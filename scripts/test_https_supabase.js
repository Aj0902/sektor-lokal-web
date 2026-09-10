const https = require('https');

const supabaseUrl = 'https://urauzxjgaaymjnfulxdb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyYXV6eGpnYWF5bWpuZnVseGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwMzM2NTQsImV4cCI6MjA5MDYwOTY1NH0.42uXdKlYcjkEpCRyd3ewEKJiyQuvyLWPk0X5oKJqSNQ';

const options = {
  hostname: 'urauzxjgaaymjnfulxdb.supabase.co',
  port: 443,
  path: '/rest/v1/profiles_warga?select=slug,name&limit=5',
  method: 'GET',
  rejectUnauthorized: false,
  headers: {
    'apikey': supabaseKey,
    'Authorization': `Bearer ${supabaseKey}`
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('Status code:', res.statusCode);
    console.log('Response:', data);
  });
});

req.on('error', (e) => {
  console.error('HTTPS Error:', e);
});

req.end();
