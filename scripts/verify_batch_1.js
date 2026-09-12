process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const envFile = fs.readFileSync('.env.local', 'utf8');
const env = {};
envFile.split('\n').forEach(line => {
  const [k, ...v] = line.trim().split('=');
  if (k && v.length) {
    env[k.trim()] = v.join('=').trim().replace(/^["']|["']$/g, '');
  }
});

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function check() {
  const slugs = ['najwa-shihab', 'dandhy-dwi-laksono', 'fahruddin-faiz', 'bivitri-susanti', 'rocky-gerung'];
  console.log('================================================================');
  console.log('🔍 VERIFIKASI KUALITAS DATA EDITORIAL: BATCH 1 (PENJAGA NALAR)');
  console.log('================================================================\n');

  for (const slug of slugs) {
    const { data: p, error } = await supabase
      .from('profiles_warga_demo1')
      .select('name, title, category, quote, bio_paragraphs, gallery_warga_demo1(*), initiatives_warga_demo1(*), life_events_warga_demo1(*), works_warga_demo1(*)')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error(`Error fetching ${slug}:`, error.message);
      continue;
    }

    console.log('----------------------------------------------------');
    console.log(`👤 NAMA: ${p.name} (${slug})`);
    console.log(`🏷️ TITLE: ${p.title}`);
    console.log(`💬 QUOTE: "${p.quote}"`);
    console.log(`📝 BIO PARAGRAF COUNT: ${p.bio_paragraphs?.length || 0} Paragraf Tempo Style`);
    console.log(`   Paragraf 1: ${p.bio_paragraphs?.[0] ? p.bio_paragraphs[0].substring(0, 120) + '...' : '-'}`);
    console.log(`⏳ PERJALANAN HIDUP (Linimasa): ${p.life_events_warga_demo1?.length || 0} Tonggak Sejarah`);
    if (p.life_events_warga_demo1) {
      p.life_events_warga_demo1.forEach((le, idx) => {
        console.log(`   [${le.year_range}] ${le.title} -> ${le.description}`);
      });
    }
    console.log(`📸 FOTO GALLERY (Si Mael): ${p.gallery_warga_demo1?.length || 0} Foto HD Terkurasi`);
    console.log(`🛍️ INISIATIF/PRODUK (Bang Marko): ${p.initiatives_warga_demo1?.length || 0} Item Terkurasi`);
    if (p.initiatives_warga_demo1) {
      p.initiatives_warga_demo1.forEach((ini, idx) => {
        console.log(`   ${idx + 1}. ${ini.title} [${ini.category}] -> ${ini.link_url}`);
      });
    }
  }
}

check();
