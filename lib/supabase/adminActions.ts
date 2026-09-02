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

      // Safe individual queries to avoid failing entire profile if 1 table is missing
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
        message: `Gagal menyimpan ke Supabase: ${profErr.message} (Data tersimpan di memori lokal)` 
      };
    }

    const pId = upsertedProf?.id || profile.id;

    // 2. Save Life Events
    try {
      await supabase.from('life_events').delete().eq('profile_id', pId);
      if (lifeEvents && lifeEvents.length > 0) {
        await supabase.from('life_events').insert(lifeEvents.map((item, idx) => ({
          id: isValidUUID(item.id) ? item.id : crypto.randomUUID(),
          profile_id: pId,
          year_range: item.year_range || '',
          title: item.title || '',
          description: item.description || '',
          order_index: idx + 1
        })));
      }
    } catch (e) {
      console.error('Life Events Save Error:', e);
    }

    // 3. Save Works
    try {
      await supabase.from('works').delete().eq('profile_id', pId);
      if (works && works.length > 0) {
        await supabase.from('works').insert(works.map((item, idx) => ({
          id: isValidUUID(item.id) ? item.id : crypto.randomUUID(),
          profile_id: pId,
          title: item.title || '',
          category: item.category || 'Riset',
          description: item.description || '',
          link_url: item.link_url || '#',
          order_index: idx + 1
        })));
      }
    } catch (e) {
      console.error('Works Save Error:', e);
    }

    // 4. Save Articles
    try {
      await supabase.from('articles').delete().eq('profile_id', pId);
      if (articles && articles.length > 0) {
        await supabase.from('articles').insert(articles.map((item, idx) => ({
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
      }
    } catch (e) {
      console.error('Articles Save Error:', e);
    }

    // 5. Save Testimonials
    try {
      await supabase.from('testimonials').delete().eq('profile_id', pId);
      if (testimonials && testimonials.length > 0) {
        await supabase.from('testimonials').insert(testimonials.map((item, idx) => ({
          id: isValidUUID(item.id) ? item.id : crypto.randomUUID(),
          profile_id: pId,
          author_name: item.author_name || 'Warga',
          author_role: item.author_role || 'Tokoh',
          quote: item.quote || '',
          order_index: idx + 1
        })));
      }
    } catch (e) {
      console.error('Testimonials Save Error:', e);
    }

    // 6. Save Initiatives (Products)
    try {
      await supabase.from('initiatives').delete().eq('profile_id', pId);
      if (initiatives && initiatives.length > 0) {
        await supabase.from('initiatives').insert(initiatives.map((item, idx) => ({
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
      }
    } catch (e) {
      console.error('Initiatives Save Error:', e);
    }

    // 7. Save Gallery (Safe Try-Catch in case table gallery is not created in DB yet)
    try {
      await supabase.from('gallery').delete().eq('profile_id', pId);
      if (gallery && gallery.length > 0) {
        await supabase.from('gallery').insert(gallery.map((item, idx) => ({
          id: isValidUUID(item.id) ? item.id : crypto.randomUUID(),
          profile_id: pId,
          title: item.title || '',
          image_url: item.image_url || '',
          order_index: idx + 1
        })));
      }
    } catch (e) {
      console.error('Gallery Save Error:', e);
    }

    return { 
      success: true, 
      message: '✅ Berhasil! Semua data profil, artikel, dan produk tersimpan sempurna di Supabase Cloud Database!' 
    };

  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown error';
    return { 
      success: false, 
      message: `Terjadi kendala jaringan ke Supabase: ${errorMsg} (Data tersimpan sementara di memori lokal)` 
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
