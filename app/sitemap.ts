import { MetadataRoute } from 'next';
import { createClient } from '../lib/supabase/client';
import { brandLenses, getAllBrandSlugs } from '../lib/supabase/brandData';
import { discoveryLenses } from '../lib/supabase/discoveryData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sektorlokal.id';
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/warga-lokal`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/brand-lokal`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/arsip`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/manifesto`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/artikel`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/legal/kriteria-kurasi`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/legal/policy-brief`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/legal/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/legal/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Warga Lenses
  const wargaLensRoutes: MetadataRoute.Sitemap = discoveryLenses.map(l => ({
    url: `${baseUrl}/warga-lokal/${l.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.88,
  }));

  // Brand Lenses
  const brandLensRoutes: MetadataRoute.Sitemap = brandLenses.map(l => ({
    url: `${baseUrl}/brand-lokal/${l.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.88,
  }));

  // 60 Brand Profiles
  const brandProfileRoutes: MetadataRoute.Sitemap = getAllBrandSlugs().map(slug => ({
    url: `${baseUrl}/brand/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  let supabaseProfileRoutes: MetadataRoute.Sitemap = [];
  try {
    const supabase = createClient();
    const { data: profiles } = await supabase
      .from('profiles_warga_demo1')
      .select('slug, updated_at');

    if (profiles && profiles.length > 0) {
      supabaseProfileRoutes = profiles.map((p) => ({
        url: `${baseUrl}/profil/${p.slug}`,
        lastModified: p.updated_at ? new Date(p.updated_at) : now,
        changeFrequency: 'weekly',
        priority: 0.85,
      }));
    }
  } catch {}

  return [
    ...staticRoutes,
    ...wargaLensRoutes,
    ...brandLensRoutes,
    ...brandProfileRoutes,
    ...supabaseProfileRoutes,
  ];
}
