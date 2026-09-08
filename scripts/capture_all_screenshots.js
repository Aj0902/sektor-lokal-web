const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const OUT_DIR_LOCAL = path.join(__dirname, '..', 'screenshots');
const OUT_DIR_ARTIFACT = path.join('C:', 'Users', 'acer', '.gemini', 'antigravity', 'brain', '5414a652-ca3d-47e9-a901-086b7c5b04eb', 'screenshots');

if (!fs.existsSync(OUT_DIR_LOCAL)) {
  fs.mkdirSync(OUT_DIR_LOCAL, { recursive: true });
}
if (!fs.existsSync(OUT_DIR_ARTIFACT)) {
  fs.mkdirSync(OUT_DIR_ARTIFACT, { recursive: true });
}

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const PAGES_TO_CAPTURE = [
  {
    name: '01_home_radar_utama',
    title: 'Radar Utama (Homepage)',
    url: 'http://localhost:3000/'
  },
  {
    name: '02_arsip_discovery_hub',
    title: 'Hub Discovery Arsip',
    url: 'http://localhost:3000/arsip'
  },
  {
    name: '03_katalog_100_warga',
    title: 'Katalog 100 Warga Lokal',
    url: 'http://localhost:3000/arsip/warga'
  },
  {
    name: '04_direktori_brand_mandiri',
    title: 'Direktori Brand Lokal Mandiri',
    url: 'http://localhost:3000/arsip/brand'
  },
  {
    name: '05_manifesto_bangsa',
    title: 'Manifesto Jiwa Raga Bangsa',
    url: 'http://localhost:3000/manifesto'
  },
  {
    name: '06_ruang_redaksi_artikel',
    title: 'Ruang Redaksi & Esai',
    url: 'http://localhost:3000/artikel'
  },
  {
    name: '07_esai_detail_reader',
    title: 'Pembaca Esai Analisis Kritis',
    url: 'http://localhost:3000/artikel/analisis-kritis-literasi-keuangan'
  },
  {
    name: '08_berkas_profil_warga',
    title: 'Berkas Profil Warga (Ferry Irwandi)',
    url: 'http://localhost:3000/profil/ferry-irwandi'
  },
  {
    name: '09_ruang_dialog_kontak',
    title: 'Ruang Dialog, Kolaborasi & Tip-Off',
    url: 'http://localhost:3000/kontak'
  },
  {
    name: '10_kriteria_kurasi_6_tahap',
    title: 'Kriteria Kurasi 6-Tahap',
    url: 'http://localhost:3000/legal/kriteria-kurasi'
  },
  {
    name: '11_policy_brief_kedaulatan',
    title: 'Policy Brief Kedaulatan Data',
    url: 'http://localhost:3000/legal/policy-brief'
  },
  {
    name: '12_syarat_ketentuan_privacy',
    title: 'Syarat & Kebijakan Privasi',
    url: 'http://localhost:3000/legal/terms'
  }
];

async function run() {
  console.log('🚀 Memulai penangkapan screenshot untuk Kurator Sektor Lokal...');
  
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars']
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 1440,
    height: 900,
    deviceScaleFactor: 1.5
  });

  for (let i = 0; i < PAGES_TO_CAPTURE.length; i++) {
    const item = PAGES_TO_CAPTURE[i];
    console.log(`📸 [${i + 1}/${PAGES_TO_CAPTURE.length}] Mengambil: ${item.title} (${item.url})...`);
    
    try {
      await page.goto(item.url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      // Wait for fonts & framer motion entrance animations
      await new Promise(r => setTimeout(r, 1200));

      const filename = `${item.name}.png`;
      const localPath = path.join(OUT_DIR_LOCAL, filename);
      const artifactPath = path.join(OUT_DIR_ARTIFACT, filename);

      // Capture executive hero view
      await page.screenshot({
        path: localPath,
        fullPage: false
      });

      fs.copyFileSync(localPath, artifactPath);

      // Also capture full-length version
      const fullFilename = `${item.name}_full.png`;
      const localFullPath = path.join(OUT_DIR_LOCAL, fullFilename);
      const artifactFullPath = path.join(OUT_DIR_ARTIFACT, fullFilename);
      
      await page.screenshot({
        path: localFullPath,
        fullPage: true
      });
      fs.copyFileSync(localFullPath, artifactFullPath);

      console.log(`  ✓ Tersimpan: ${filename} & ${fullFilename}`);
    } catch (err) {
      console.error(`  ✗ Gagal mengambil ${item.title}:`, err.message);
    }
  }

  await browser.close();
  console.log('✨ Selesai! Seluruh screenshot representatif berhasil disimpan.');
}

run();
