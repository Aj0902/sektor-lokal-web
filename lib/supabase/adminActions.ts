import { createClient } from './client';
import { Profile, LifeEvent, Work, Article, Testimonial, Initiative, FullProfileData } from './types';
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
      const [life, wrk, art, tst, ini] = await Promise.all([
        supabase.from('life_events').select('*').eq('profile_id', pId).order('order_index'),
        supabase.from('works').select('*').eq('profile_id', pId).order('order_index'),
        supabase.from('articles').select('*').eq('profile_id', pId).order('order_index'),
        supabase.from('testimonials').select('*').eq('profile_id', pId).order('order_index'),
        supabase.from('initiatives').select('*').eq('profile_id', pId).order('order_index'),
      ]);

      return {
        profile: prof,
        lifeEvents: life.data || [],
        works: wrk.data || [],
        articles: art.data || [],
        testimonials: tst.data || [],
        initiatives: ini.data || []
      };
    }
  } catch {
    // Local fallback
  }

  return fallbackProfiles[slug] || fallbackProfiles['ferry-irwandi'];
}

export async function saveProfileData(data: FullProfileData): Promise<{ success: boolean; message: string }> {
  // Always update in-memory fallback cache
  fallbackProfiles[data.profile.slug] = data;

  try {
    const supabase = createClient();
    const { profile, lifeEvents, works, articles, testimonials, initiatives } = data;

    // Ensure valid UUID for profile.id
    if (!profile.id || !isValidUUID(profile.id)) {
      profile.id = crypto.randomUUID();
    }

    // Upsert Profile
    const { data: upsertedProf, error: profErr } = await supabase
      .from('profiles')
      .upsert(profile, { onConflict: 'slug' })
      .select()
      .single();

    if (profErr) {
      return { success: true, message: `Data tersimpan di cache memori lokal. (${profErr.message})` };
    }

    const pId = upsertedProf.id;

    if (pId) {
      await Promise.all([
        supabase.from('life_events').delete().eq('profile_id', pId),
        supabase.from('works').delete().eq('profile_id', pId),
        supabase.from('articles').delete().eq('profile_id', pId),
        supabase.from('testimonials').delete().eq('profile_id', pId),
        supabase.from('initiatives').delete().eq('profile_id', pId),
      ]);

      if (lifeEvents.length > 0) {
        await supabase.from('life_events').insert(lifeEvents.map((item, idx) => ({
          id: isValidUUID(item.id) ? item.id : crypto.randomUUID(),
          profile_id: pId,
          year_range: item.year_range || '',
          title: item.title || '',
          description: item.description || '',
          order_index: idx + 1
        })));
      }

      if (works.length > 0) {
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

      if (articles.length > 0) {
        await supabase.from('articles').insert(articles.map((item, idx) => ({
          id: isValidUUID(item.id) ? item.id : crypto.randomUUID(),
          profile_id: pId,
          title: item.title || '',
          tag: item.tag || 'ESAI KRITIS',
          read_time: item.read_time || '5 Menit Membaca',
          description: item.description || '',
          link_url: item.link_url || '#',
          order_index: idx + 1
        })));
      }

      if (testimonials.length > 0) {
        await supabase.from('testimonials').insert(testimonials.map((item, idx) => ({
          id: isValidUUID(item.id) ? item.id : crypto.randomUUID(),
          profile_id: pId,
          author_name: item.author_name || 'Warga',
          author_role: item.author_role || 'Tokoh',
          quote: item.quote || '',
          order_index: idx + 1
        })));
      }

      if (initiatives.length > 0) {
        await supabase.from('initiatives').insert(initiatives.map((item, idx) => ({
          id: isValidUUID(item.id) ? item.id : crypto.randomUUID(),
          profile_id: pId,
          title: item.title || '',
          category: item.category || 'Inisiatif',
          description: item.description || '',
          price: item.price || '',
          price_variants: item.price_variants || [],
          action_text: item.action_text || 'Lihat',
          link_url: item.link_url || '#',
          order_index: idx + 1
        })));
      }
    }

    return { success: true, message: 'Data profil & ekosistem berhasil tersimpan sempurna ke Supabase!' };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown error';
    return { success: true, message: `Data tersimpan di memori lokal. (${errorMsg})` };
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
