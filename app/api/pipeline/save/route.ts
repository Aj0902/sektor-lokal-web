import { NextRequest, NextResponse } from 'next/server';
import { saveProfileData, updateQueueStatus } from '../../../../lib/supabase/adminActions';
import { FullProfileData } from '../../../../lib/supabase/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { job_id, profileData } = body as { job_id?: string; profileData: FullProfileData };

    if (!profileData || !profileData.profile || !profileData.profile.slug) {
      return NextResponse.json({
        success: false,
        error: 'Payload tidak valid: profileData dan profile.slug wajib ada.'
      }, { status: 400 });
    }

    // 1. Simpan ke Supabase Live Tables
    const result = await saveProfileData(profileData);

    if (!result.success) {
      if (job_id) {
        await updateQueueStatus(job_id, {
          status: 'failed',
          error_message: result.message,
          log_message: 'Gagal menyimpan data ke Supabase'
        });
      }
      return NextResponse.json({ success: false, error: result.message }, { status: 500 });
    }

    // 2. Perbarui status antrean menjadi LIVE jika ada job_id
    if (job_id) {
      await updateQueueStatus(job_id, {
        status: 'live',
        current_agent: 'Supabase Production',
        progress_percent: 100,
        slug: profileData.profile.slug,
        category: profileData.profile.category,
        log_message: `Sukses terpublikasi live di /profil/${profileData.profile.slug}`
      });
    }

    return NextResponse.json({
      success: true,
      slug: profileData.profile.slug,
      live_url: `/profil/${profileData.profile.slug}`,
      message: result.message
    });

  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message || 'Internal server error'
    }, { status: 500 });
  }
}
