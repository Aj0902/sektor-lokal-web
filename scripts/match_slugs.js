const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://urauzxjgaaymjnfulxdb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyYXV6eGpnYWF5bWpuZnVseGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwMzM2NTQsImV4cCI6MjA5MDYwOTY1NH0.42uXdKlYcjkEpCRyd3ewEKJiyQuvyLWPk0X5oKJqSNQ';

const supabase = createClient(supabaseUrl, supabaseKey);

async function match() {
  const { data: dbProfiles, error } = await supabase.from('profiles_warga_demo1').select('id, slug, name, category');
  if (error) {
    console.error('Supabase error:', error);
    return;
  }
  
  console.log(`Total profiles in DB: ${dbProfiles.length}`);
  const dbSlugMap = new Map();
  dbProfiles.forEach(p => dbSlugMap.set(p.slug, p));

  const dataDir = path.join(__dirname, 'data');
  const files = fs.readdirSync(dataDir).filter(f => f.startsWith('laci_') && f.endsWith('.json'));

  let matched = 0;
  let missing = [];

  for (const file of files.sort()) {
    const list = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf-8'));
    list.forEach(p => {
      if (dbSlugMap.has(p.slug)) {
        matched++;
      } else {
        missing.push({ file, slug: p.slug, name: p.name });
      }
    });
  }

  console.log(`Matched with DB: ${matched} / 100`);
  if (missing.length > 0) {
    console.log(`Missing in DB (${missing.length}):`, missing);
  }
}

match();
