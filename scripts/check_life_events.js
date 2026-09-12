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
  const { data: p } = await supabase.from('profiles_warga_demo1').select('id, name').eq('slug', 'najwa-shihab').single();
  const { data: events, error } = await supabase.from('life_events_warga_demo1').select('*').eq('profile_id', p.id);
  console.log('Najwa Shihab ID:', p.id);
  console.log('Najwa Shihab life events count:', events?.length);
  console.log('Events Data:', events);
  if (error) console.error('Query error:', error);
}

check();
