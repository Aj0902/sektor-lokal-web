import { createClient } from './client';
import { BrandProfile, brandProfiles, BrandMilestone, BrandProduct } from './brandData';

function isValidUUID(id?: string): boolean {
  if (!id) return false;
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(id);
}

export async function getAllBrandProfiles(): Promise<BrandProfile[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('profiles_brand_demo1')
      .select('*')
      .order('name', { ascending: true });

    if (data && data.length > 0 && !error) {
      return data.map((row: any) => ({
        slug: row.slug,
        name: row.name,
        lensSlug: row.lens_slug,
        lensName: row.lens_name,
        curationTier: row.curation_tier || 'Established',
        origin: row.origin || '',
        logoUrl: row.logo_url || '',
        heroBgUrl: row.hero_bg_url || '',
        quote: row.quote || '',
        bio_paragraphs: row.bio_paragraphs || [],
        discoveryTitle: {
          anomaly: row.name,
          question: '',
          paradigm: ''
        },
        coreFinding: row.core_finding || '',
        contextNarrative: {
          marketVacuum: '',
          disruptedStatusQuo: ''
        },
        evidenceTelemetry: {
          originCoordinates: row.origin || '',
          productionModel: '',
          verifiedClaims: []
        },
        flagshipProducts: [],
        milestones: [],
        initiatives: [],
        sovereigntyMeaning: row.sovereignty_meaning || '',
        channels: row.channels || { officialStore: [], publicSpaces: [] },
        scores: row.scores || { quality: 25, discovery: 25, trackRecord: 25, story: 25, total: 100 },
        statusRedFlag: 'CLEAR'
      }));
    }
  } catch {
    // Fallback to local
  }

  return Object.values(brandProfiles);
}

export async function getBrandFullData(slug: string): Promise<BrandProfile> {
  try {
    const supabase = createClient();
    const { data: prof, error: pError } = await supabase
      .from('profiles_brand_demo1')
      .select('*')
      .eq('slug', slug)
      .single();

    if (prof && !pError) {
      const bId = prof.id;
      const [msRes, prRes] = await Promise.allSettled([
        supabase.from('milestones_brand_demo1').select('*').eq('brand_id', bId).order('order_index'),
        supabase.from('products_brand_demo1').select('*').eq('brand_id', bId).order('order_index'),
      ]);

      const milestones: BrandMilestone[] = (msRes.status === 'fulfilled' && msRes.value?.data)
        ? msRes.value.data.map((m: any) => ({
            year: m.year,
            title: m.title,
            description: m.description
          }))
        : (brandProfiles[slug]?.milestones || []);

      const flagshipProducts: BrandProduct[] = (prRes.status === 'fulfilled' && prRes.value?.data)
        ? prRes.value.data.map((p: any) => ({
            name: p.name,
            specs: p.specs,
            price: p.price,
            action_text: p.action_text || 'Beli di Toko Resmi',
            buyUrl: p.buy_url,
            imageUrl: p.image_url,
            category: p.category
          }))
        : (brandProfiles[slug]?.flagshipProducts || []);

      return {
        slug: prof.slug,
        name: prof.name,
        lensSlug: prof.lens_slug,
        lensName: prof.lens_name,
        curationTier: prof.curation_tier || 'Established',
        origin: prof.origin || '',
        logoUrl: prof.logo_url || '',
        heroBgUrl: prof.hero_bg_url || '',
        quote: prof.quote || '',
        bio_paragraphs: prof.bio_paragraphs || [],
        discoveryTitle: {
          anomaly: prof.name,
          question: '',
          paradigm: ''
        },
        coreFinding: prof.core_finding || '',
        contextNarrative: {
          marketVacuum: '',
          disruptedStatusQuo: ''
        },
        evidenceTelemetry: {
          originCoordinates: prof.origin || '',
          productionModel: '',
          verifiedClaims: []
        },
        flagshipProducts,
        milestones,
        initiatives: [],
        sovereigntyMeaning: prof.sovereignty_meaning || '',
        channels: prof.channels || { officialStore: [], publicSpaces: [] },
        scores: prof.scores || { quality: 25, discovery: 25, trackRecord: 25, story: 25, total: 100 },
        statusRedFlag: 'CLEAR'
      };
    }
  } catch {
    // Local fallback
  }

  return brandProfiles[slug] || brandProfiles['javara-indigenous-indonesia'];
}

export async function saveBrandData(brand: BrandProfile): Promise<{ success: boolean; message: string }> {
  // Update local in-memory cache
  brandProfiles[brand.slug] = brand;

  try {
    const supabase = createClient();

    // 1. Upsert profiles_brand_demo1
    const { data: upserted, error: pErr } = await supabase
      .from('profiles_brand_demo1')
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
      console.error('Save brand error:', pErr);
      return { success: false, message: `Gagal menyimpan brand: ${pErr.message}` };
    }

    const brandId = upserted.id;

    // 2. Save Milestones
    await supabase.from('milestones_brand_demo1').delete().eq('brand_id', brandId);
    if (brand.milestones && brand.milestones.length > 0) {
      const msRows = brand.milestones.map((m, idx) => ({
        brand_id: brandId,
        year: m.year,
        title: m.title || `Fase Kemandirian ${idx + 1}`,
        description: m.description,
        order_index: idx
      }));
      await supabase.from('milestones_brand_demo1').insert(msRows);
    }

    // 3. Save Products
    await supabase.from('products_brand_demo1').delete().eq('brand_id', brandId);
    if (brand.flagshipProducts && brand.flagshipProducts.length > 0) {
      const prodRows = brand.flagshipProducts.map((p, idx) => ({
        brand_id: brandId,
        name: p.name,
        specs: p.specs,
        price: p.price,
        action_text: p.action_text || 'Beli di Toko Resmi',
        buy_url: p.buyUrl,
        image_url: p.imageUrl || brand.logoUrl,
        category: p.category || (idx === 0 ? 'Karya Utama' : 'Koleksi Pilihan'),
        order_index: idx
      }));
      await supabase.from('products_brand_demo1').insert(prodRows);
    }

    return { success: true, message: `Berkas brand "${brand.name}" berhasil disimpan ke database!` };
  } catch (err: any) {
    return { success: false, message: `Terjadi kesalahan: ${err.message}` };
  }
}

export async function deleteBrandBySlug(slug: string): Promise<{ success: boolean; message: string }> {
  try {
    const supabase = createClient();
    const { error } = await supabase.from('profiles_brand_demo1').delete().eq('slug', slug);
    if (error) throw error;
    delete brandProfiles[slug];
    return { success: true, message: 'Berkas brand berhasil dihapus.' };
  } catch (err: any) {
    return { success: false, message: `Gagal menghapus: ${err.message}` };
  }
}
