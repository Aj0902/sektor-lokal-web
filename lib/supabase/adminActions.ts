import { createClient } from './client';
import { Profile, LifeEvent, Work, Article, Testimonial, Initiative, GalleryItem, FullProfileData } from './types';
import { fallbackProfiles } from './fallbackData';

export async function getAllProfiles(): Promise<Profile[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (data && data.length > 0 && !error) {
      return data;
    }
  } catch {
    // Local fallback
  }

  return Object.values(fallbackProfiles).map(item => item.profile);
}

export async function getProfileBySlug(slug: string): Promise<FullProfileData> {
  try {
    const supabase = createClient();
    const { data: prof, error: pError } = await supabase
      .from('profiles')
      .select('*')
      .eq('slug', slug)
      .single();

    if (prof && !pError) {
      const pId = prof.id;

      const [lifeRes, wrkRes, artRes, tstRes, iniRes, galRes] = await Promise.allSettled([
        supabase.from('life_events').select('*').eq('profile_id', pId).order('order_index'),
        supabase.from('works').select('*').eq('profile_id', pId).order('order_index'),
        supabase.from('articles').select('*').eq('profile_id', pId).order('order_index'),
        supabase.from('testimonials').select('*').eq('profile_id', pId).order('order_index'),
        supabase.from('initiatives').select('*').eq('profile_id', pId).order('order_index'),
        supabase.from('gallery').select('*').eq('profile_id', pId).order('order_index'),
      ]);

      const getVal = (res: PromiseSettledResult<any>) => res.status === 'fulfilled' && res.value?.data ? res.value.data : [];

      return {
        profile: prof,
        lifeEvents: getVal(lifeRes),
        works: getVal(wrkRes),
        articles: getVal(artRes),
        testimonials: getVal(tstRes),
        initiatives: getVal(iniRes),
        gallery: getVal(galRes)
      };
    }
  } catch {
    // Local fallback
  }

  return fallbackProfiles[slug] || fallbackProfiles['ferry-irwandi'];
}

export async function saveProfileData(data: FullProfileData): Promise<{ success: boolean; message: string }> {
  // Always update local memory cache first for immediate UI responsiveness
  fallbackProfiles[data.profile.slug] = data;

  try {
    const supabase = createClient();
    const { profile, lifeEvents, works, articles, testimonials, initiatives, gallery } = data;

    if (!profile.id || !isValidUUID(profile.id)) {
      profile.id = crypto.randomUUID();
    }

    // 1. Upsert Profile
    const { data: upsertedProf, error: profErr } = await supabase
      .from('profiles')
      .upsert(profile, { onConflict: 'slug' })
      .select()
      .single();

    if (profErr) {
      console.error('Profile Upsert Error:', profErr);
      return { 
        success: false, 
        message: `Gagal menyimpan profil: ${profErr.message}` 
      };
    }

    const pId = upsertedProf?.id || profile.id;
    const errors: string[] = [];

    // 2. Save Life Events
    const { error: delLifeErr } = await supabase.from('life_events').delete().eq('profile_id', pId);
    if (delLifeErr) errors.push(`life_events delete: ${delLifeErr.message}`);
    if (lifeEvents && lifeEvents.length > 0) {
      const { error: insLifeErr } = await supabase.from('life_events').insert(lifeEvents.map((item, idx) => ({
        id: isValidUUID(item.id) ? item.id : crypto.randomUUID(),
        profile_id: pId,
        year_range: item.year_range || '',
        title: item.title || '',
        description: item.description || '',
        order_index: idx + 1
      })));
      if (insLifeErr) errors.push(`life_events insert: ${insLifeErr.message}`);
    }

    // 3. Save Works
    const { error: delWrkErr } = await supabase.from('works').delete().eq('profile_id', pId);
    if (delWrkErr) errors.push(`works delete: ${delWrkErr.message}`);
    if (works && works.length > 0) {
      const { error: insWrkErr } = await supabase.from('works').insert(works.map((item, idx) => ({
        id: isValidUUID(item.id) ? item.id : crypto.randomUUID(),
        profile_id: pId,
        title: item.title || '',
        category: item.category || 'Riset',
        description: item.description || '',
        link_url: item.link_url || '#',
        order_index: idx + 1
      })));
      if (insWrkErr) errors.push(`works insert: ${insWrkErr.message}`);
    }

    // 4. Save Articles
    const { error: delArtErr } = await supabase.from('articles').delete().eq('profile_id', pId);
    if (delArtErr) errors.push(`articles delete: ${delArtErr.message}`);
    if (articles && articles.length > 0) {
      const { error: insArtErr } = await supabase.from('articles').insert(articles.map((item, idx) => ({
        id: isValidUUID(item.id) ? item.id : crypto.randomUUID(),
        profile_id: pId,
        title: item.title || '',
        tag: item.tag || 'ESAI KRITIS',
        read_time: item.read_time || '5 Menit Membaca',
        description: item.description || '',
        content_full: item.content_full || '',
        link_url: item.link_url || '#',
        order_index: idx + 1
      })));
      if (insArtErr) errors.push(`articles insert: ${insArtErr.message}`);
    }

    // 5. Save Testimonials
    const { error: delTstErr } = await supabase.from('testimonials').delete().eq('profile_id', pId);
    if (delTstErr) errors.push(`testimonials delete: ${delTstErr.message}`);
    if (testimonials && testimonials.length > 0) {
      const { error: insTstErr } = await supabase.from('testimonials').insert(testimonials.map((item, idx) => ({
        id: isValidUUID(item.id) ? item.id : crypto.randomUUID(),
        profile_id: pId,
        author_name: item.author_name || 'Warga',
        author_role: item.author_role || 'Tokoh',
        quote: item.quote || '',
        order_index: idx + 1
      })));
      if (insTstErr) errors.push(`testimonials insert: ${insTstErr.message}`);
    }

    // 6. Save Initiatives (Products)
    const { error: delIniErr } = await supabase.from('initiatives').delete().eq('profile_id', pId);
    if (delIniErr) errors.push(`initiatives delete: ${delIniErr.message}`);
    if (initiatives && initiatives.length > 0) {
      const { error: insIniErr } = await supabase.from('initiatives').insert(initiatives.map((item, idx) => ({
        id: isValidUUID(item.id) ? item.id : crypto.randomUUID(),
        profile_id: pId,
        title: item.title || '',
        category: item.category || 'Inisiatif',
        description: item.description || '',
        price: item.price || '',
        image_url: item.image_url || '',
        action_text: item.action_text || 'Lihat',
        link_url: item.link_url || '#',
        order_index: idx + 1
      })));
      if (insIniErr) errors.push(`initiatives insert: ${insIniErr.message}`);
    }

    // 7. Save Gallery
    const { error: delGalErr } = await supabase.from('gallery').delete().eq('profile_id', pId);
    if (delGalErr) errors.push(`gallery delete: ${delGalErr.message}`);
    if (gallery && gallery.length > 0) {
      const { error: insGalErr } = await supabase.from('gallery').insert(gallery.map((item, idx) => ({
        id: isValidUUID(item.id) ? item.id : crypto.randomUUID(),
        profile_id: pId,
        title: item.title || '',
        image_url: item.image_url || '',
        order_index: idx + 1
      })));
      if (insGalErr) errors.push(`gallery insert: ${insGalErr.message}`);
    }

    if (errors.length > 0) {
      console.error('Supabase child table errors:', errors);
      return {
        success: false,
        message: `Profil tersimpan, namun ada kendala di sub-tabel: ${errors.join('; ')}`
      };
    }

    return { 
      success: true, 
      message: '✅ Berhasil! Semua data profil, artikel, dan produk tersimpan sempurna di Supabase Cloud Database!' 
    };

  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown error';
    return { 
      success: false, 
      message: `Terjadi kendala jaringan ke Supabase: ${errorMsg}` 
    };
  }
}

export async function deleteProfileBySlug(slug: string): Promise<{ success: boolean; message: string }> {
  delete fallbackProfiles[slug];
  try {
    const supabase = createClient();
    await supabase.from('profiles').delete().eq('slug', slug);
  } catch {
    // Ignore offline error
  }
  return { success: true, message: `Profil ${slug} telah berhasil dihapus!` };
}

function isValidUUID(str: string): boolean {
  if (!str) return false;
  const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return regex.test(str);
}
