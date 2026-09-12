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

// Helper to determine realistic estimated prices for initiatives
function getEstimatedPrice(figure, work) {
  const title = (work.title || '').toLowerCase();
  const cat = (work.category || '').toLowerCase();
  const desc = (work.description || '').toLowerCase();

  // 1. Civic Tech & Open Knowledge (Free / Public Access)
  if (title.includes('turnbackhoax') || title.includes('cekfakta') || title.includes('kawalpemilu') || title.includes('bijak memilih') || title.includes('openbts') || title.includes('internet rakyat') || cat.includes('civic-tech') || cat.includes('civic tech') || cat.includes('open-source')) {
    return '100% Akses Publik Bebas';
  }
  if (title.includes('ngaji filsafat')) {
    return 'Bebas Biaya (Akses Publik)';
  }
  if (title.includes('pshk') || title.includes('sthi jentera')) {
    if (title.includes('sthi jentera')) return 'Program Sarjana & Beasiswa Penuh';
    return 'Riset Independen & Pro-Bono';
  }

  // 2. Physical Products / Fashion / Crafts
  if (title.includes('spedagi') || title.includes('sepeda')) {
    return 'Rp 7.500.000 - Rp 14.500.000';
  }
  if (title.includes('magno') || title.includes('radio kayu')) {
    return 'Rp 1.800.000 - Rp 3.500.000';
  }
  if (title.includes('hirka') || title.includes('ceker ayam') || title.includes('kulit kaki ayam')) {
    return 'Rp 1.450.000 - Rp 3.200.000';
  }
  if (title.includes('brodo') || (title.includes('sepatu') && !title.includes('hirka'))) {
    return 'Rp 375.000 - Rp 899.000';
  }
  if (title.includes('batik kultur') || title.includes('batik') || title.includes('busana') || title.includes('tenun')) {
    if (title.includes("du'anyam") || title.includes('lontar')) return 'Rp 120.000 - Rp 650.000';
    return 'Rp 450.000 - Rp 2.250.000';
  }
  if (title.includes('pipiltin') || title.includes('cokelat') || title.includes('kakao')) {
    return 'Rp 45.000 - Rp 135.000 / bar';
  }
  if (title.includes('javara') || title.includes('beras') || title.includes('garam') || title.includes('rempah')) {
    return 'Rp 35.000 - Rp 165.000 / pack';
  }
  if (title.includes("du'anyam") || title.includes('anyaman')) {
    return 'Rp 120.000 - Rp 650.000';
  }
  if (title.includes('asgar') || title.includes('sukaregang') || title.includes('akar wangi')) {
    return 'Rp 150.000 - Rp 1.200.000';
  }
  if (title.includes('majestic buana') || title.includes('biji plastik') || title.includes('daur ulang')) {
    return 'Rp 18.000 - Rp 85.000 / kg';
  }
  if (title.includes('evoware') || title.includes('bioplastik') || title.includes('rumput laut')) {
    return 'Rp 25.000 - Rp 120.000';
  }

  // 3. Books & Publications
  if (title.includes('buku') || title.includes('novel') || title.includes('komik') || cat.includes('buku') || cat.includes('literatur') || cat.includes('sastra')) {
    return 'Rp 85.000 - Rp 185.000';
  }

  // 4. Courses / Bootcamps / Masterclasses / Education
  if (title.includes('foodizz') || title.includes('akademi') || title.includes('kursus') || title.includes('zenius') || title.includes('brainmatics') || title.includes('sekolah') || title.includes('kelas') || cat.includes('edukasi') || cat.includes('edutech')) {
    if (title.includes('sokola')) return 'Bebas Biaya / Donasi Swadaya';
    return 'Rp 199.000 - Rp 1.450.000 / paket';
  }

  // 5. Music, Vinyl, Concerts, Stand-Up Special
  if (title.includes('album') || title.includes('vinyl') || title.includes('piringan hitam')) {
    return 'Rp 350.000 - Rp 650.000';
  }
  if (title.includes('konser') || title.includes('tur konser') || title.includes('tur dunia') || title.includes('tur stand-up') || title.includes('tiket konser')) {
    return 'Rp 150.000 - Rp 450.000 / tiket';
  }
  if (title.includes('stand-up') || title.includes('special') || title.includes('comika') || cat.includes('komedi')) {
    return 'Rp 50.000 - Rp 175.000 / akses';
  }
  if (cat.includes('musik') || title.includes('diskografi') || title.includes('lagu')) {
    return 'Rilisan Digital / Fisik Rp 49.000 - Rp 250.000';
  }

  // 6. Film / Series / Sinema
  if (cat.includes('sinema') || cat.includes('film') || title.includes('filmografi') || title.includes('dokumenter')) {
    if (title.includes('watchdoc') || title.includes('ekspedisi indonesia baru')) return 'Akses Terbuka / Donasi Swadaya';
    return 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000';
  }

  // 7. Social / Crowdfunding / Humanitarian / Medical / Ecology
  if (title.includes('doctorshare') || title.includes('rumah sakit apung') || title.includes('medis')) {
    return 'Donasi Medis (Mulai Rp 25.000)';
  }
  if (title.includes('kitabisa') || title.includes('salingjaga')) {
    return 'Iuran Mulai Rp 10.000 / bln';
  }
  if (title.includes('food bank') || title.includes('foi')) {
    return 'Paket Donasi Pangan Rp 50.000';
  }
  if (title.includes('leuser') || title.includes('haka') || title.includes('ecoton') || title.includes('sungai') || title.includes('telapak') || title.includes('ibeka') || title.includes('reboisasi')) {
    return 'Donasi Konservasi (Mulai Rp 50.000)';
  }
  if (title.includes('kamisan') || title.includes('kendeng') || title.includes('aman') || title.includes('mosintuwu')) {
    return 'Swadaya Solidaritas Warga';
  }

  // 8. Tech Platforms / AI / SaaS / Deep Tech
  if (title.includes('kata.ai') || title.includes('prosa.ai') || title.includes('ctech') || title.includes('brainmatics') || cat.includes('kecerdasan buatan') || cat.includes('deep-tech')) {
    return 'Freemium / B2B (Mulai Rp 299.000/bln)';
  }

  // Category based fallbacks
  if (figure.category === 'Arsitek Usaha Mandiri') return 'Rp 85.000 - Rp 450.000';
  if (figure.category === 'Pencerah Generasi') return 'Akses Terbuka / Mulai Rp 99.000';
  if (figure.category === 'Perawat Jiwa & Rasa') return 'Rp 50.000 - Rp 350.000';
  if (figure.category === 'Penjaga Tawa') return 'Mulai Rp 50.000 / tayang';
  if (figure.category === 'Duta Talenta' || figure.category === 'Panggung Ekspresi') return 'Karya Budaya / Mulai Rp 75.000';

  return 'Akses Terbuka / Donasi Swadaya';
}

// Generate SQL per Laci (without updated_at)
files.forEach(file => {
  const laciName = file.replace('.json', '');
  const figures = laciMap[laciName];
  let sql = `-- SQL Batch for ${laciName}\nBEGIN;\n\n`;

  figures.forEach(p => {
    // 1. Upsert / Update profiles_warga_demo1
    sql += `-- Figure: ${p.name} (${p.slug})\n`;
    sql += `DO $$ \n`;
    sql += `DECLARE \n`;
    sql += `  v_profile_id UUID;\n`;
    sql += `BEGIN \n`;
    sql += `  -- Check if profile exists by slug\n`;
    sql += `  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = ${esc(p.slug)} LIMIT 1;\n`;
    sql += `  \n`;
    sql += `  IF v_profile_id IS NOT NULL THEN\n`;
    sql += `    UPDATE profiles_warga_demo1 SET\n`;
    sql += `      name = ${esc(p.name)},\n`;
    sql += `      title = ${esc(p.title)},\n`;
    sql += `      category = ${esc(p.category)},\n`;
    sql += `      quote = ${esc(p.quote)},\n`;
    sql += `      bio_paragraphs = ${escArray(p.bio_paragraphs)},\n`;
    sql += `      status_text = 'VERIFIKASI TERKURASI',\n`;
    sql += `      verified = true\n`;
    sql += `    WHERE id = v_profile_id;\n`;
    sql += `  ELSE\n`;
    sql += `    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)\n`;
    sql += `    VALUES (${esc(p.slug)}, ${esc(p.name)}, ${esc(p.title)}, ${esc(p.category)}, ${esc(p.quote)}, ${escArray(p.bio_paragraphs)}, 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')\n`;
    sql += `    RETURNING id INTO v_profile_id;\n`;
    sql += `  END IF;\n\n`;

    // 2. Clear old children
    sql += `  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;\n`;
    sql += `  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;\n`;
    sql += `  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;\n`;
    sql += `  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;\n`;
    sql += `  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;\n\n`;

    // 3. Insert life events
    if (p.lifeEvents && p.lifeEvents.length > 0) {
      p.lifeEvents.forEach((le, idx) => {
        sql += `  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)\n`;
        sql += `  VALUES (v_profile_id, ${esc(le.year_range)}, ${esc(le.title)}, ${esc(le.description)}, ${idx + 1});\n`;
      });
    }

    // 4. Insert works
    if (p.works && p.works.length > 0) {
      p.works.forEach((w, idx) => {
        sql += `  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)\n`;
        sql += `  VALUES (v_profile_id, ${esc(w.title)}, ${esc(w.category)}, ${esc(w.description)}, ${esc(w.link_url || '#')}, ${idx + 1});\n`;
      });
    }

    // 5. Insert articles
    if (p.articles && p.articles.length > 0) {
      p.articles.forEach((a, idx) => {
        const articleSlug = `/artikel/${p.slug}-${idx + 1}`;
        sql += `  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)\n`;
        sql += `  VALUES (v_profile_id, ${esc(a.title)}, ${esc(a.tag)}, ${esc(a.read_time)}, ${esc(a.description)}, ${esc(a.content_full)}, ${esc(articleSlug)}, ${idx + 1});\n`;
      });
    }

    // 6. Insert initiatives with estimated price
    if (p.works && p.works.length > 0) {
      p.works.slice(0, 2).forEach((w, idx) => {
        const estPrice = getEstimatedPrice(p, w);
        sql += `  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)\n`;
        sql += `  VALUES (v_profile_id, ${esc(w.title)}, ${esc(w.category)}, ${esc(w.description)}, ${esc(estPrice)}, 'Dukung Inisiatif', ${esc(w.link_url || '#')}, 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', ${idx + 1});\n`;
      });
    }

    sql += `END $$;\n\n`;
  });

  sql += `COMMIT;\n`;
  const outFile = path.join(sqlDir, `${laciName}.sql`);
  fs.writeFileSync(outFile, sql, 'utf-8');
  console.log(`Generated SQL for ${laciName} -> ${outFile}`);
});

// Generate all_initiatives_clean.sql
let initSql = `BEGIN;\nDELETE FROM initiatives_warga_demo1;\nDELETE FROM testimonials_warga_demo1;\n\n`;
allTokoh.forEach(p => {
  if (p.works && p.works.length > 0) {
    p.works.slice(0, 2).forEach((w, idx) => {
      const estPrice = getEstimatedPrice(p, w);
      initSql += `INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)\n`;
      initSql += `SELECT p.id, ${esc(w.title)}, ${esc(w.category)}, ${esc(w.description)}, ${esc(estPrice)}, 'Dukung Inisiatif', ${esc(w.link_url || '#')}, 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', ${idx + 1}\n`;
      initSql += `FROM profiles_warga_demo1 p WHERE p.slug = ${esc(p.slug)};\n\n`;
    });
  }
});
initSql += `COMMIT;\n`;
fs.writeFileSync(path.join(sqlDir, 'all_initiatives_clean.sql'), initSql, 'utf-8');
console.log(`Generated all_initiatives_clean.sql!`);

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
    testimonials: [],
    initiatives: (p.works || []).slice(0, 2).map((w, idx) => ({
      id: `i-${p.slug}-${idx + 1}`,
      profile_id: profileId,
      title: w.title,
      category: w.category,
      description: w.description,
      price: getEstimatedPrice(p, w),
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
console.log(`Updated ${fallbackFilePath} with 100 comprehensive profiles and estimated prices!`);
