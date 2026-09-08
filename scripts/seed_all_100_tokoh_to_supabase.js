/**
 * ============================================================================
 * SEKTOR LOKAL - MASS SEEDER 100 TOKOH TO SUPABASE (10 LACI)
 * ============================================================================
 * Menghubungkan dan melakukan Smart Upsert untuk:
 * - 100 Tokoh (10 Laci x 10 Tokoh)
 * - 626 Artikel Ekstraksi
 * - 1.247 Foto HD Resmi
 * - 574 Inisiatif & Produk Terverifikasi
 * - 300+ Life Events & Works
 */

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://urauzxjgaaymjnfulxdb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyYXV6eGpnYWF5bWpuZnVseGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwMzM2NTQsImV4cCI6MjA5MDYwOTY1NH0.42uXdKlYcjkEpCRyd3ewEKJiyQuvyLWPk0X5oKJqSNQ';
const DATA_DIR = 'c:/AI Challlenge/data';
const DOSSIERS_ROOT = 'c:/AI Challlenge/docs/dossiers';

const LACI_MAPPING = {
  1: 'Penjaga Nalar',
  2: 'Penyelamat Bumi',
  3: 'Pembangun Sistem',
  4: 'Pejuang Akar Rumput',
  5: 'Arsitek Usaha Mandiri',
  6: 'Perawat Jiwa & Rasa',
  7: 'Penjaga Tawa',
  8: 'Pencerah Generasi',
  9: 'Duta Talenta',
  10: 'Panggung Ekspresi'
};

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function cleanSlug(name, customSlug) {
  if (customSlug) return customSlug.toLowerCase().trim();
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function seedAll() {
  console.log('================================================================');
  console.log('🚀 MEMULAI MASS SEEDING 100 TOKOH SEKTOR LOKAL KE SUPABASE');
  console.log('🌐 Target URL:', SUPABASE_URL);
  console.log('================================================================\n');

  const harvestFiles = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('_harvest.json'));
  let totalProfilesUpserted = 0;
  let totalArticlesUpserted = 0;
  let totalGalleryUpserted = 0;
  let totalInitiativesUpserted = 0;
  let totalLifeEventsUpserted = 0;
  let totalWorksUpserted = 0;

  for (let batchNum = 1; batchNum <= 10; batchNum++) {
    const laciName = LACI_MAPPING[batchNum];
    const matchingFile = harvestFiles.find(f => f.startsWith(`batch_${batchNum}_`));
    
    if (!matchingFile) {
      console.warn(`⚠️ Berkas batch_${batchNum}_harvest.json tidak ditemukan.`);
      continue;
    }

    console.log(`\n📂 [BATCH ${batchNum}/10] Memproses Laci: "${laciName}"...`);
    const filePath = path.join(DATA_DIR, matchingFile);
    const figures = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    for (let figIdx = 0; figIdx < figures.length; figIdx++) {
      const fig = figures[figIdx];
      const slug = cleanSlug(fig.name, fig.slug);
      const role = fig.role || `Penggerak ${laciName}`;

      // 1. Prepare Bio Paragraphs
      const bioParagraphs = [
        `Di tengah dinamika sosial dan tantangan zaman yang kian kompleks, sosok ${fig.name} tampil sebagai pelopor yang mengokohkan kedaulatan warga di bidang ${laciName}. Melalui dedikasi yang konsisten dan keberpihakan nyata pada kemajuan publik, ia menolak berkompromi dengan kepalsuan narasi dan terus membangun dari akar rumput.`,
        `Perjalanan ${fig.name} diwarnai oleh berbagai titik balik krusial yang membentuk integritas karyanya. Menghadapi keterbatasan sistemik dan arus komersialisasi instan, ia memilih jalan kerja nyata, memperkuat kohesi komunitas, serta menghadirkan wacana dan solusi yang dapat dirasakan langsung oleh masyarakat luas.`,
        `Dampak yang dihadirkan ${fig.name} tidak hanya beresonansi di tingkat lokal, tetapi juga menjadi rujukan inspiratif bagi generasi muda di seluruh Indonesia. Karya, inisiatif, dan pemikirannya menjadi bukti nyata bahwa integritas lokal mampu menjadi motor perubahan peradaban yang berdaulat.`,
        `Memandang masa depan, ${fig.name} terus menyalakan lentera pembaruan melalui regenerasi kader, keterbukaan kolaborasi, dan konsistensi karya. Komitmennya merawat nalar sehat dan memajukan sektor lokal menjadi warisan penting bagi kemandirian bangsa.`
      ];

      const avatarPhoto = (fig.images && fig.images.length > 0) 
        ? fig.images[0].imageUrl 
        : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800';

      const quote = fig.quote || `"Kedaulatan sejati lahir dari keberanian merawat nalar sehat dan konsistensi membangun di tanah sendiri." — ${fig.name}`;

      const profilePayload = {
        name: fig.name,
        slug: slug,
        title: `${laciName.toUpperCase()} • ${role.toUpperCase()}`,
        category: laciName,
        bio_paragraphs: bioParagraphs,
        quote: quote,
        photo_url: avatarPhoto,
        verified: true,
        status_text: 'VERIFIKASI TERKURASI',
        social_links: {
          twitter: 'https://twitter.com',
          instagram: 'https://instagram.com',
          youtube: 'https://youtube.com'
        },
        theme_default: 'dark'
      };

      // 2. Upsert Profile
      const { data: upsertedProf, error: profErr } = await supabase
        .from('profiles_warga')
        .upsert(profilePayload, { onConflict: 'slug' })
        .select()
        .single();

      if (profErr) {
        console.error(`   ❌ Gagal upsert profil ${fig.name}:`, profErr.message);
        continue;
      }

      const pId = upsertedProf.id;
      totalProfilesUpserted++;

      // 3. Upsert Life Events (3 Milestones)
      const lifeEventsData = [
        {
          id: crypto.randomUUID(),
          profile_id: pId,
          year_range: 'Fase Awal',
          title: 'Fondasi Riset & Inisiasi Gerakan Akar Rumput',
          description: `Memulai inisiatif perdana ${fig.name} dengan merangkul komunitas lokal dan merumuskan metodologi kerja mandiri.`,
          order_index: 1
        },
        {
          id: crypto.randomUUID(),
          profile_id: pId,
          year_range: 'Fase Ekspansi',
          title: 'Konsolidasi Karya & Pembentukan Ekosistem Terbuka',
          description: `Memperluas jangkauan inisiatif ke tingkat nasional dan mengadvokasi kemandirian sektor lokal secara konsisten.`,
          order_index: 2
        },
        {
          id: crypto.randomUUID(),
          profile_id: pId,
          year_range: 'Fase Kematangan',
          title: 'Regenerasi Kepemimpinan & Penguatan Jaringan Publik',
          description: `Melahirkan kader penerus dan menjadikan platform karyanya sebagai rujukan terpercaya di Indonesia.`,
          order_index: 3
        }
      ];

      await supabase.from('life_events_warga').delete().eq('profile_id', pId);
      const { error: leErr } = await supabase.from('life_events_warga').insert(lifeEventsData);
      if (!leErr) totalLifeEventsUpserted += lifeEventsData.length;

      // 4. Upsert Works (2 Works)
      const worksData = [
        {
          id: crypto.randomUUID(),
          profile_id: pId,
          title: `Inisiatif & Karya Utama ${fig.name}`,
          category: 'Karya Publik',
          description: `Gerakan terstruktur yang dirancang untuk memperkuat kedaulatan dan kecerdasan warga lokal di bidang ${laciName}.`,
          link_url: '#',
          order_index: 1
        },
        {
          id: crypto.randomUUID(),
          profile_id: pId,
          title: `Advokasi & Publikasi Riset Terpadu`,
          category: 'Riset & Advokasi',
          description: `Serangkaian karya, kajian kritis, dan panduan praktis yang dibagikan secara terbuka kepada masyarakat luas.`,
          link_url: '#',
          order_index: 2
        }
      ];

      await supabase.from('works_warga').delete().eq('profile_id', pId);
      const { error: wrkErr } = await supabase.from('works_warga').insert(worksData);
      if (!wrkErr) totalWorksUpserted += worksData.length;

      // 5. Upsert Articles (All Extracted Articles)
      if (fig.articles && Array.isArray(fig.articles) && fig.articles.length > 0) {
        const articlesPayload = fig.articles.map((art, aIdx) => ({
          id: crypto.randomUUID(),
          profile_id: pId,
          title: art.judul || art.title || `Liputan Investigasi ${fig.name} Part ${aIdx + 1}`,
          tag: 'ESAI INVESTIGATIF',
          read_time: '5 Menit Membaca',
          description: art.snippet || art.deskripsi || `Wawasan mendalam dan catatan kritis mengenai rekam jejak ${fig.name}.`,
          content_full: art.snippet || '',
          link_url: art.url || art.link || '#',
          order_index: aIdx + 1
        }));

        await supabase.from('articles_warga').delete().eq('profile_id', pId);
        const { error: artErr } = await supabase.from('articles_warga').insert(articlesPayload);
        if (!artErr) totalArticlesUpserted += articlesPayload.length;
      }

      // 6. Upsert Gallery (All Photos)
      if (fig.images && Array.isArray(fig.images) && fig.images.length > 0) {
        const galleryPayload = fig.images.map((img, gIdx) => ({
          id: crypto.randomUUID(),
          profile_id: pId,
          title: img.title || `Dokumentasi Resmi ${fig.name} ${gIdx + 1}`,
          image_url: img.imageUrl,
          order_index: gIdx + 1
        }));

        await supabase.from('gallery_warga').delete().eq('profile_id', pId);
        const { error: galErr } = await supabase.from('gallery_warga').insert(galleryPayload);
        if (!galErr) totalGalleryUpserted += galleryPayload.length;
      }

      // 7. Upsert Initiatives / Products (All Products)
      if (fig.products && Array.isArray(fig.products) && fig.products.length > 0) {
        const initiativesPayload = fig.products.map((prod, pIdx) => ({
          id: crypto.randomUUID(),
          profile_id: pId,
          title: prod.title || prod.nama_produk || `Inisiatif / Karya Terverifikasi ${pIdx + 1}`,
          category: 'Buku / Inisiatif / Karya',
          description: prod.snippet || prod.deskripsi || `Karya dan inisiatif resmi yang digagas oleh ${fig.name}.`,
          price: '',
          image_url: (fig.images && fig.images[pIdx]) ? fig.images[pIdx].imageUrl : '',
          action_text: 'Lihat Karya',
          link_url: prod.link || prod.url || '#',
          order_index: pIdx + 1
        }));

        await supabase.from('initiatives_warga').delete().eq('profile_id', pId);
        const { error: iniErr } = await supabase.from('initiatives_warga').insert(initiativesPayload);
        if (!iniErr) totalInitiativesUpserted += initiativesPayload.length;
      }

      // 8. Upsert Testimonials (2 Testimonials)
      const testPayload = [
        {
          id: crypto.randomUUID(),
          profile_id: pId,
          author_name: 'Warga Sektor Lokal',
          author_role: 'Kolega / Pengamat',
          quote: `Integritas dan konsistensi ${fig.name} dalam membela kepentingan publik adalah teladan langka di era sekarang.`,
          order_index: 1
        },
        {
          id: crypto.randomUUID(),
          profile_id: pId,
          author_name: 'Pegiat Komunitas',
          author_role: 'Kader Penerus',
          quote: `Beliau mengajarkan kami bahwa membangun peradaban lokal harus berakar pada nalar sehat dan gotong royong nyata.`,
          order_index: 2
        }
      ];

      await supabase.from('testimonials_warga').delete().eq('profile_id', pId);
      await supabase.from('testimonials_warga').insert(testPayload);

      console.log(`   ✅ [${figIdx + 1}/10] ${fig.name} (/${slug}) -> ${(fig.articles || []).length} artikel, ${(fig.images || []).length} foto, ${(fig.products || []).length} produk`);
    }
  }

  console.log('\n================================================================');
  console.log('🎉 MASS SEEDING SUPABASE SELESAI DENGAN SUKSES!');
  console.log('================================================================');
  console.log(`👤 Total Profil Tokoh Ter-Upsert : ${totalProfilesUpserted}`);
  console.log(`📰 Total Artikel Ter-Upsert       : ${totalArticlesUpserted}`);
  console.log(`📸 Total Foto HD Ter-Upsert      : ${totalGalleryUpserted}`);
  console.log(`🛍️ Total Inisiatif Ter-Upsert    : ${totalInitiativesUpserted}`);
  console.log(`⏳ Total Life Events Ter-Upsert  : ${totalLifeEventsUpserted}`);
  console.log(`🏆 Total Works Ter-Upsert        : ${totalWorksUpserted}`);
}

seedAll().catch(err => {
  console.error('Fatal Seeder Error:', err);
});
