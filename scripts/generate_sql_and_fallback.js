const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const sqlDir = path.join(__dirname, 'sql');
if (!fs.existsSync(sqlDir)) {
  fs.mkdirSync(sqlDir, { recursive: true });
}

const files = fs.readdirSync(dataDir).filter(f => f.startsWith('laci_') && f.endsWith('.json')).sort();

let allTokoh = [];
const laciMap = {};

files.forEach(file => {
  const content = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf-8'));
  const laciName = file.replace('.json', '');
  laciMap[laciName] = content;
  allTokoh.push(...content);
});

console.log(`Loaded ${allTokoh.length} figures across ${files.length} Laci.`);

// Helper to escape SQL single quotes
function esc(str) {
  if (str === null || str === undefined) return 'NULL';
  return `'${String(str).replace(/'/g, "''")}'`;
}

function escArray(arr) {
  if (!arr || !Array.isArray(arr)) return "'{}'::text[]";
  return `ARRAY[${arr.map(s => esc(s)).join(', ')}]::text[]`;
}

// Generate SQL per Laci (without updated_at)
files.forEach(file => {
  const laciName = file.replace('.json', '');
  const figures = laciMap[laciName];
  let sql = `-- SQL Batch for ${laciName}\nBEGIN;\n\n`;

  figures.forEach(p => {
    // 1. Upsert / Update profiles_warga
    sql += `-- Figure: ${p.name} (${p.slug})\n`;
    sql += `DO $$ \n`;
    sql += `DECLARE \n`;
    sql += `  v_profile_id UUID;\n`;
    sql += `BEGIN \n`;
    sql += `  -- Check if profile exists by slug\n`;
    sql += `  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = ${esc(p.slug)} LIMIT 1;\n`;
    sql += `  \n`;
    sql += `  IF v_profile_id IS NOT NULL THEN\n`;
    sql += `    UPDATE profiles_warga SET\n`;
    sql += `      name = ${esc(p.name)},\n`;
    sql += `      title = ${esc(p.title)},\n`;
    sql += `      category = ${esc(p.category)},\n`;
    sql += `      quote = ${esc(p.quote)},\n`;
    sql += `      bio_paragraphs = ${escArray(p.bio_paragraphs)},\n`;
    sql += `      status_text = 'VERIFIKASI TERKURASI',\n`;
    sql += `      verified = true\n`;
    sql += `    WHERE id = v_profile_id;\n`;
    sql += `  ELSE\n`;
    sql += `    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)\n`;
    sql += `    VALUES (${esc(p.slug)}, ${esc(p.name)}, ${esc(p.title)}, ${esc(p.category)}, ${esc(p.quote)}, ${escArray(p.bio_paragraphs)}, 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')\n`;
    sql += `    RETURNING id INTO v_profile_id;\n`;
    sql += `  END IF;\n\n`;

    // 2. Clear old children
    sql += `  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;\n`;
    sql += `  DELETE FROM works_warga WHERE profile_id = v_profile_id;\n`;
    sql += `  DELETE FROM articles_warga WHERE profile_id = v_profile_id;\n\n`;

    // 3. Insert life events
    if (p.lifeEvents && p.lifeEvents.length > 0) {
      p.lifeEvents.forEach((le, idx) => {
        sql += `  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)\n`;
        sql += `  VALUES (v_profile_id, ${esc(le.year_range)}, ${esc(le.title)}, ${esc(le.description)}, ${idx + 1});\n`;
      });
    }

    // 4. Insert works
    if (p.works && p.works.length > 0) {
      p.works.forEach((w, idx) => {
        sql += `  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)\n`;
        sql += `  VALUES (v_profile_id, ${esc(w.title)}, ${esc(w.category)}, ${esc(w.description)}, ${esc(w.link_url || '#')}, ${idx + 1});\n`;
      });
    }

    // 5. Insert articles
    if (p.articles && p.articles.length > 0) {
      p.articles.forEach((a, idx) => {
        const articleSlug = `/artikel/${p.slug}-${idx + 1}`;
        sql += `  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)\n`;
        sql += `  VALUES (v_profile_id, ${esc(a.title)}, ${esc(a.tag)}, ${esc(a.read_time)}, ${esc(a.description)}, ${esc(a.content_full)}, ${esc(articleSlug)}, ${idx + 1});\n`;
      });
    }

    sql += `END $$;\n\n`;
  });

  sql += `COMMIT;\n`;
  const outFile = path.join(sqlDir, `${laciName}.sql`);
  fs.writeFileSync(outFile, sql, 'utf-8');
  console.log(`Generated SQL for ${laciName} -> ${outFile}`);
});

// Also generate full fallbackData.ts
const fallbackFilePath = path.join(__dirname, '..', 'lib', 'supabase', 'fallbackData.ts');

let fallbackContent = `import { FullProfileData, Profile } from './types';\n\n`;
fallbackContent += `export const fallbackProfiles: Record<string, FullProfileData> = {\n`;

allTokoh.forEach(p => {
  const profileId = `gen-${p.slug}`;
  const fullProfile = {
    profile: {
      id: profileId,
      slug: p.slug,
      name: p.name,
      title: p.title,
      category: p.category,
      bio_paragraphs: p.bio_paragraphs,
      quote: p.quote,
      photo_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        instagram: `https://instagram.com/${p.slug.replace(/-/g, '_')}`,
        website: p.works && p.works[0] ? p.works[0].link_url : 'https://sektorlokal.id'
      },
      theme_default: 'light'
    },
    lifeEvents: (p.lifeEvents || []).map((le, idx) => ({
      id: `le-${p.slug}-${idx + 1}`,
      profile_id: profileId,
      year_range: le.year_range,
      title: le.title,
      description: le.description,
      order_index: idx + 1
    })),
    works: (p.works || []).map((w, idx) => ({
      id: `w-${p.slug}-${idx + 1}`,
      profile_id: profileId,
      title: w.title,
      category: w.category,
      description: w.description,
      link_url: w.link_url || '#',
      order_index: idx + 1
    })),
    articles: (p.articles || []).map((a, idx) => ({
      id: `a-${p.slug}-${idx + 1}`,
      profile_id: profileId,
      title: a.title,
      tag: a.tag,
      read_time: a.read_time,
      description: a.description,
      content_full: a.content_full,
      link_url: `/artikel/${p.slug}-${idx + 1}`,
      order_index: idx + 1
    })),
    gallery: [
      {
        id: `g-${p.slug}-1`,
        profile_id: profileId,
        title: `Dokumentasi Arsip Kurasi: ${p.name}`,
        image_url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
        order_index: 1
      }
    ],
    testimonials: [
      {
        id: `t-${p.slug}-1`,
        profile_id: profileId,
        author_name: 'Redaksi Sektor Lokal',
        author_role: 'Dewan Kurator Warga',
        quote: `Dedikasi dan integritas ${p.name} dalam bidang ${p.category} menjadi teladan otentik gerakan kemandirian bangsa.`,
        order_index: 1
      }
    ],
    initiatives: (p.works || []).slice(0, 2).map((w, idx) => ({
      id: `i-${p.slug}-${idx + 1}`,
      profile_id: profileId,
      title: w.title,
      category: w.category,
      description: w.description,
      price: 'Inisiatif Terbuka',
      image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
      action_text: 'Dukung Inisiatif',
      link_url: w.link_url || '#',
      order_index: idx + 1
    }))
  };

  fallbackContent += `  ${JSON.stringify(p.slug)}: ${JSON.stringify(fullProfile, null, 4)},\n`;
});

fallbackContent += `};\n\n`;
fallbackContent += `export const directoryProfiles: Profile[] = Object.values(fallbackProfiles).map(item => item.profile);\n`;

fs.writeFileSync(fallbackFilePath, fallbackContent, 'utf-8');
console.log(`Updated ${fallbackFilePath} with 100 comprehensive profiles!`);
