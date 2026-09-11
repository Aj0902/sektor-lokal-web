import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient } from '../../../lib/supabase/client';
import { fallbackProfiles } from '../../../lib/supabase/fallbackData';
import { FullProfileData } from '../../../lib/supabase/types';
import ProfileClientView from './ProfileClientView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Fetch full profile data server-side
 */
async function getProfileData(slug: string): Promise<FullProfileData> {
  const defaultData = fallbackProfiles[slug] || fallbackProfiles['ferry-irwandi'];

  try {
    const supabase = createClient();
    const { data: prof, error: pError } = await supabase
      .from('profiles_warga')
      .select('*')
      .eq('slug', slug)
      .single();

    if (prof && !pError) {
      const pId = prof.id;
      const [life, wrk, art, tst, ini, gal] = await Promise.all([
        supabase.from('life_events_warga').select('*').eq('profile_id', pId).order('order_index'),
        supabase.from('works_warga').select('*').eq('profile_id', pId).order('order_index'),
        supabase.from('articles_warga').select('*').eq('profile_id', pId).order('order_index'),
        supabase.from('testimonials_warga').select('*').eq('profile_id', pId).order('order_index'),
        supabase.from('initiatives_warga').select('*').eq('profile_id', pId).order('order_index'),
        supabase.from('gallery_warga').select('*').eq('profile_id', pId).order('order_index'),
      ]);

      return {
        profile: prof,
        lifeEvents: (life.data && life.data.length > 0) ? life.data : (defaultData?.lifeEvents || []),
        works: (wrk.data && wrk.data.length > 0) ? wrk.data : (defaultData?.works || []),
        articles: (art.data && art.data.length > 0) ? art.data : (defaultData?.articles || []),
        testimonials: (tst.data && tst.data.length > 0) ? tst.data : (defaultData?.testimonials || []),
        initiatives: (ini.data && ini.data.length > 0) ? ini.data : (defaultData?.initiatives || []),
        gallery: (gal.data && gal.data.length > 0) ? gal.data : (defaultData?.gallery || [])
      };
    }
  } catch {
    // fallback
  }

  return defaultData;
}

/**
 * Dynamic SEO & AEO Metadata Generator
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getProfileData(slug);
  const profile = data?.profile;

  if (!profile) {
    return {
      title: 'Profil Warga Tidak Ditemukan | Sektor Lokal',
      description: 'Arsip profil warga lokal tidak ditemukan dalam radar Sektor Lokal.'
    };
  }

  const rawDescription = profile.quote 
    ? `"${profile.quote}" (${profile.name} - ${profile.title})`
    : `${profile.name} (${profile.title}). ${profile.bio_paragraphs?.[0] || 'Dokumentasi otentik rekam jejak warga lokal Indonesia.'}`;

  const cleanDescription = rawDescription.length > 160 
    ? rawDescription.substring(0, 157) + '...'
    : rawDescription;

  const canonicalUrl = `https://sektorlokal.id/profil/${slug}`;
  const ogImageUrl = profile.photo_url || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80';

  return {
    title: `${profile.name} | ${profile.title} | Warga Lokal`,
    description: cleanDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${profile.name} | Potret Warga Lokal | Sektor Lokal`,
      description: cleanDescription,
      url: canonicalUrl,
      siteName: 'Sektor Lokal',
      locale: 'id_ID',
      type: 'profile',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `Potret Resmi ${profile.name} (${profile.title})`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${profile.name} | Potret Warga Lokal | Sektor Lokal`,
      description: cleanDescription,
      images: [ogImageUrl],
      creator: '@sektorlokal'
    },
    other: {
      'ai:entity_type': 'Person',
      'ai:name': profile.name,
      'ai:role': profile.title,
      'ai:category': profile.category,
      'ai:relevance': 'Indonesian Civic & Cultural Leader'
    }
  };
}

/**
 * Pre-generate static pages for top profiles
 */
export async function generateStaticParams() {
  try {
    const supabase = createClient();
    const { data: profiles } = await supabase.from('profiles_warga').select('slug');
    if (profiles && profiles.length > 0) {
      return profiles.map((p) => ({ slug: p.slug }));
    }
  } catch {}

  return [
    { slug: 'ferry-irwandi' },
    { slug: 'najwa-shihab' },
    { slug: 'dandhy-dwi-laksono' },
    { slug: 'farwiza-farhan' },
    { slug: 'onno-w-purbo' }
  ];
}

export default async function DynamicProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const fullData = await getProfileData(slug);

  if (!fullData || !fullData.profile) {
    notFound();
  }

  const { profile, lifeEvents = [], works = [], initiatives = [] } = fullData;

  // Bangun Social SameAs list
  const soc = profile.social_links || {};
  const sameAsList = [
    soc.youtube,
    soc.twitter,
    soc.instagram,
    soc.linkedin,
    soc.website,
    soc.spotify,
    soc.tiktok,
    soc.threads,
    soc.substack,
    soc.medium
  ].filter((url): url is string => Boolean(url && url.startsWith('http')));

  // Schema.org Person & ProfilePage JSON-LD Graph (AEO & LLM-Ready)
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `https://sektorlokal.id/profil/${slug}#webpage`,
        'url': `https://sektorlokal.id/profil/${slug}`,
        'name': `${profile.name} | Potret Warga Lokal | Sektor Lokal`,
        'description': profile.quote || profile.bio_paragraphs?.[0] || '',
        'inLanguage': 'id-ID',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://sektorlokal.id/#website',
          'name': 'Sektor Lokal',
          'url': 'https://sektorlokal.id',
          'description': 'Manifestasi jiwa raga bangsa dari sebutan lokal. Zona kurasi independen yang menyatukan karya, cerita, pemikiran, dan manusia Indonesia.'
        },
        'mainEntity': {
          '@id': `https://sektorlokal.id/profil/${slug}#person`
        }
      },
      {
        '@type': 'Person',
        '@id': `https://sektorlokal.id/profil/${slug}#person`,
        'name': profile.name,
        'jobTitle': profile.title,
        'description': profile.bio_paragraphs?.join(' ') || profile.quote || '',
        'image': profile.photo_url,
        'url': `https://sektorlokal.id/profil/${slug}`,
        'sameAs': sameAsList,
        'knowsAbout': [
          profile.category,
          'Sektor Lokal',
          'Warga Lokal',
          'Pemberdayaan Masyarakat Indonesia',
          'Inovasi Lokal Berkelanjutan'
        ],
        'award': works
          .filter(w => w.category?.toLowerCase().includes('penghargaan') || w.category?.toLowerCase().includes('rekognisi'))
          .map(w => w.title),
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': `Inisiatif & Karya Unggulan ${profile.name}`,
          'itemListElement': initiatives.map((ini, idx) => ({
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': ini.title,
              'description': ini.description,
              'category': ini.category,
              'url': ini.link_url !== '#' ? ini.link_url : `https://sektorlokal.id/profil/${slug}#produk`
            },
            'position': idx + 1
          }))
        }
      }
    ]
  };

  return (
    <>
      {/* AEO / SCHEMA.ORG STRUCTURED DATA INJECTION (SERVER-RENDERED FOR LLM & SEARCH ENGINES) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {/* INTERACTIVE CLIENT VIEW */}
      <ProfileClientView initialData={fullData} slug={slug} />
    </>
  );
}
