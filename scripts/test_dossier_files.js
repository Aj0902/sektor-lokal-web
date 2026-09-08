const fs = require('fs');
const path = require('path');

const DOSSIERS_ROOT = 'c:/AI Challlenge/docs/dossiers';

const LACI_DIRS = [
  'laci_01_penjaga_nalar',
  'laci_02_penyelamat_bumi',
  'laci_03_pembangun_sistem',
  'laci_04_pejuang_akar_rumput',
  'laci_05_arsitek_usaha_mandiri',
  'laci_06_perawat_jiwa_dan_rasa',
  'laci_07_penjaga_tawa',
  'laci_08_pencerah_generasi',
  'laci_09_duta_talenta',
  'laci_10_panggung_ekspresi'
];

function testAll() {
  let totalDossiersFound = 0;

  for (const laciDir of LACI_DIRS) {
    const fullDir = path.join(DOSSIERS_ROOT, laciDir);
    if (!fs.existsSync(fullDir)) {
      console.log(`❌ Not found: ${laciDir}`);
      continue;
    }

    const files = fs.readdirSync(fullDir);
    const mdFiles = files.filter(f => f.endsWith('.md'));
    console.log(`\n📂 ${laciDir}: ${mdFiles.length} markdown files found.`);

    // Group files by figure
    const figures = {};
    for (const f of mdFiles) {
      const baseName = f.replace(/(_master_dossier|_platform_profile|_MASTER-DOSSIER|_PLATFORM-PROFILE)\.md$/i, '')
                        .replace(/^\[LACI-\d+-[^\]]+\]\s*\d+_/, '');
      if (!figures[baseName]) figures[baseName] = [];
      figures[baseName].push(f);
    }

    console.log(`   Found ${Object.keys(figures).length} distinct figures.`);
    for (const [figName, fList] of Object.entries(figures)) {
      totalDossiersFound++;
    }
  }

  console.log(`\nTotal figures with dossiers across all lacis: ${totalDossiersFound}`);
}

testAll();
