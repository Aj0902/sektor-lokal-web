process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { createClient } = require('@supabase/supabase-js');
const url = 'https://urauzxjgaaymjnfulxdb.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyYXV6eGpnYWF5bWpuZnVseGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwMzM2NTQsImV4cCI6MjA5MDYwOTY1NH0.42uXdKlYcjkEpCRyd3ewEKJiyQuvyLWPk0X5oKJqSNQ';
const supabase = createClient(url, key);

async function check() {
  const tables = ['profiles_warga', 'life_events_warga', 'works_warga', 'articles_warga', 'gallery_warga', 'initiatives_warga', 'testimonials_warga'];
  for (const t of tables) {
    const { count, error } = await supabase.from(t).select('*', { count: 'exact', head: true });
    console.log('Table ' + t + ': count = ' + count + ', error = ' + (error ? error.message : 'none'));
  }
}
check();
