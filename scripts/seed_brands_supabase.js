const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = 'https://urauzxjgaaymjnfulxdb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyYXV6eGpnYWF5bWpuZnVseGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwMzM2NTQsImV4cCI6MjA5MDYwOTY1NH0.42uXdKlYcjkEpCRyd3ewEKJiyQuvyLWPk0X5oKJqSNQ';

const supabase = createClient(supabaseUrl, supabaseKey);

const brandData = require('../lib/supabase/brandData.ts');
const { brandProfiles } = brandData;

async function seed() {
  console.log('Seeding 60 brands into Supabase...');

  for (const [slug, brand] of Object.entries(brandProfiles)) {
    // 1. Upsert profiles_brand
    const { data: prof, error: pErr } = await supabase
      .from('profiles_brand')
      .upsert({
        slug: brand.slug,
        name: brand.name,
        lens_slug: brand.lensSlug,
        lens_name: brand.lensName,
        curation_tier: brand.curationTier,
        origin: brand.origin,
        logo_url: brand.logoUrl,
        hero_bg_url: brand.heroBgUrl || brand.logoUrl,
        quote: brand.quote,
        bio_paragraphs: brand.bio_paragraphs || [],
        core_finding: brand.coreFinding,
        sovereignty_meaning: brand.sovereigntyMeaning,
        channels: brand.channels || { officialStore: [], publicSpaces: [] },
        scores: brand.scores || { quality: 25, discovery: 25, trackRecord: 25, story: 25, total: 100 },
        updated_at: new Date().toISOString()
      }, { onConflict: 'slug' })
      .select()
      .single();

    if (pErr) {
      console.error('Error inserting brand:', brand.slug, pErr);
      continue;
    }

    const brandId = prof.id;

    // 2. Delete and insert milestones
    await supabase.from('milestones_brand').delete().eq('brand_id', brandId);
    if (brand.milestones && brand.milestones.length > 0) {
      const msRows = brand.milestones.map((m, idx) => ({
        brand_id: brandId,
        year: m.year,
        title: m.title || 'Fase Kemandirian ' + (idx + 1),
        description: m.description,
        order_index: idx
      }));
      const { error: mErr } = await supabase.from('milestones_brand').insert(msRows);
      if (mErr) console.error('Error inserting milestones:', brand.slug, mErr);
    }

    // 3. Delete and insert products
    await supabase.from('products_brand').delete().eq('brand_id', brandId);
    if (brand.flagshipProducts && brand.flagshipProducts.length > 0) {
      const prodRows = brand.flagshipProducts.map((p, idx) => {
        let actionText = 'Beli di Toko Resmi';
        if (p.price && (p.price.toLowerCase().includes('akses') || p.price.toLowerCase().includes('gratis') || p.price.toLowerCase().includes('terbuka'))) {
          actionText = 'Akses Platform';
        } else if (brand.lensSlug === 'kedaulatan-digital-civic-tech-open-source') {
          actionText = 'Dukung Inisiatif';
        } else if (brand.lensSlug === 'media-independen-ruang-arsip-literasi-kritis') {
          actionText = 'Akses Publikasi';
        }

        return {
          brand_id: brandId,
          name: p.name,
          specs: p.specs,
          price: p.price,
          action_text: actionText,
          buy_url: p.buyUrl,
          image_url: p.imageUrl || brand.logoUrl,
          category: p.category || (idx === 0 ? 'Karya Utama' : 'Koleksi Pilihan'),
          order_index: idx
        };
      });

      const { error: prErr } = await supabase.from('products_brand').insert(prodRows);
      if (prErr) console.error('Error inserting products:', brand.slug, prErr);
    }

    console.log('Seeded:', brand.name, '(' + brand.slug + ')');
  }

  console.log('Seeding completed successfully!');
}

seed();
