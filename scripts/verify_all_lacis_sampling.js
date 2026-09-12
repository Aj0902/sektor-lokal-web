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
  const sampleSlugs = [
    'farwiza-farhan',      // Laci 2: Penyelamat Bumi
    'onno-w-purbo',        // Laci 3: Pembangun Sistem
    'butet-manurung',      // Laci 4: Pejuang Akar Rumput
    'singgih-susilo-kartono', // Laci 5: Arsitek Usaha Mandiri
    'cholil-mahmud',       // Laci 6: Perawat Jiwa & Rasa
    'pandji-pragiwaksono', // Laci 7: Penjaga Tawa
    'ferry-irwandi',       // Laci 8: Pencerah Generasi
    'carina-joe',          // Laci 9: Duta Talenta
    'raditya-dika'         // Laci 10: Panggung Ekspresi
  ];

  console.log('================================================================');
  console.log('🔍 AUDIT SAMPLING KUALITAS EDITORIAL 10 LACI SEKTOR LOKAL');
  console.log('================================================================\n');

  for (const slug of sampleSlugs) {
    const { data: p, error } = await supabase
      .from('profiles_warga_demo1')
      .select('name, title, category, quote, bio_paragraphs, gallery_warga_demo1(*), initiatives_warga_demo1(*), life_events_warga_demo1(*), works_warga_demo1(*)')
      .eq('slug', slug)
      .single();

    if (error || !p) {
      console.error(`Error fetching ${slug}:`, error?.message);
      continue;
    }

    console.log('----------------------------------------------------');
    console.log(`👤 NAMA: ${p.name} (${slug}) | LACI: [${p.category}]`);
    console.log(`🏷️ TITLE: ${p.title}`);
    console.log(`💬 QUOTE: "${p.quote}"`);
    console.log(`📝 BIO TEMPO: ${p.bio_paragraphs?.length || 0} Paragraf`);
    console.log(`   Paragraf 1 (Hook/Problem): ${p.bio_paragraphs?.[0] ? p.bio_paragraphs[0].substring(0, 110) + '...' : '-'}`);
    console.log(`⏳ PERJALANAN HIDUP (Linimasa): ${p.life_events_warga_demo1?.length || 0} Tonggak Sejarah`);
    if (p.life_events_warga_demo1) {
      p.life_events_warga_demo1.forEach((le) => {
        console.log(`   • [${le.year_range}] ${le.title} -> ${le.description.substring(0, 90)}...`);
      });
    }
    console.log(`📸 FOTO GALLERY (Si Mael): ${p.gallery_warga_demo1?.length || 0} Foto HD`);
    console.log(`🛍️ INISIATIF/PRODUK (Bang Marko): ${p.initiatives_warga_demo1?.length || 0} Item`);
    if (p.initiatives_warga_demo1) {
      p.initiatives_warga_demo1.forEach((ini, idx) => {
        console.log(`   ${idx + 1}. ${ini.title} [${ini.category}]`);
      });
    }
  }
}

check();
