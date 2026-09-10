const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const files = fs.readdirSync(dataDir).filter(f => f.startsWith('laci_') && f.endsWith('.json'));

let allProfiles = [];
let count = 0;

for (const file of files.sort()) {
  const content = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf-8'));
  console.log(`${file}: ${content.length} tokoh`);
  content.forEach(p => {
    allProfiles.push(p);
  });
  count += content.length;
}

console.log(`\nTotal Tokoh collected: ${count}`);

// Check duplicates
const slugs = allProfiles.map(p => p.slug);
const uniqueSlugs = new Set(slugs);
if (slugs.length !== uniqueSlugs.size) {
  console.error("Duplicate slugs detected!");
  const duplicates = slugs.filter((item, index) => slugs.indexOf(item) !== index);
  console.error(duplicates);
} else {
  console.log("All slugs are unique!");
}
