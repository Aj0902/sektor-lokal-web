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

async function main() {
  const { data: profiles, error } = await supabase
    .from('profiles_warga_demo1')
    .select('*')
    .limit(5);

  if (error) {
    console.error('Error fetching profiles:', error);
    return;
  }
  console.log('Columns in profiles_warga_demo1:', Object.keys(profiles[0] || {}));

  const { data: allProfiles } = await supabase
    .from('profiles_warga_demo1')
    .select('id, slug, name, category, verified');

  const catMap = {};
  (allProfiles || []).forEach(p => {
    catMap[p.category] = (catMap[p.category] || 0) + 1;
  });

  console.log('=== DISTRIBUSI KATEGORI SUPABASE ===');
  console.table(catMap);
  console.log(`Total Semua Profil di DB: ${allProfiles?.length || 0}`);

  // Test sample 1 profile with child relations
  const { data: sample, error: sampleErr } = await supabase
    .from('profiles_warga_demo1')
    .select('name, slug, category, gallery_warga_demo1(*), articles_warga_demo1(*), initiatives_warga_demo1(*), life_events_warga_demo1(*), works_warga_demo1(*)')
    .eq('slug', 'ferry-irwandi')
    .single();

  if (sample) {
    console.log('\n=== SAMPLE CHECK (ferry-irwandi) ===');
    console.log({
      name: sample.name,
      slug: sample.slug,
      category: sample.category,
      gallery_count: sample.gallery_warga_demo1?.length || 0,
      articles_count: sample.articles_warga_demo1?.length || 0,
      initiatives_count: sample.initiatives_warga_demo1?.length || 0,
      life_events_count: sample.life_events_warga_demo1?.length || 0,
      works_count: sample.works_warga_demo1?.length || 0,
    });
  }
}

main();
