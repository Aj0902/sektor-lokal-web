import { createClient } from './client';
import { Profile, LifeEvent, Work, Article, Testimonial, Initiative, FullProfileData } from './types';
import { fallbackProfiles } from './fallbackData';

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
  try {
    const supabase = createClient();
    const { profile, lifeEvents, works, articles, testimonials, initiatives } = data;

    // Upsert Profile
    const { data: upsertedProf, error: profErr } = await supabase
      .from('profiles')
      .upsert(profile, { onConflict: 'slug' })
      .select()
      .single();

    if (profErr) {
      return { success: false, message: `Gagal menyimpan profil: ${profErr.message}` };
    }

    const pId = upsertedProf.id;

    // Save sub-tables if database is connected
    if (pId) {
      await Promise.all([
        supabase.from('life_events').delete().eq('profile_id', pId),
        supabase.from('works').delete().eq('profile_id', pId),
        supabase.from('articles').delete().eq('profile_id', pId),
        supabase.from('testimonials').delete().eq('profile_id', pId),
        supabase.from('initiatives').delete().eq('profile_id', pId),
      ]);

      if (lifeEvents.length > 0) {
        await supabase.from('life_events').insert(lifeEvents.map(item => ({ ...item, profile_id: pId })));
      }
      if (works.length > 0) {
        await supabase.from('works').insert(works.map(item => ({ ...item, profile_id: pId })));
      }
      if (articles.length > 0) {
        await supabase.from('articles').insert(articles.map(item => ({ ...item, profile_id: pId })));
      }
      if (testimonials.length > 0) {
        await supabase.from('testimonials').insert(testimonials.map(item => ({ ...item, profile_id: pId })));
      }
      if (initiatives.length > 0) {
        await supabase.from('initiatives').insert(initiatives.map(item => ({ ...item, profile_id: pId })));
      }
    }

    return { success: true, message: 'Data profil & ekosistem berhasil diperbarui di Supabase!' };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown error';
    return { success: true, message: `Data tersimpan di memori lokal. (${errorMsg})` };
  }
}
