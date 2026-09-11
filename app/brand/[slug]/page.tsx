import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { brandProfiles, getAllBrandSlugs, getBrandBySlug } from '../../../lib/supabase/brandData';
import BrandClientView from './BrandClientView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBrandSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    return {
      title: 'Berkas Brand Lokal | Sektor Lokal',
      description: 'Kurasi dan investigasi rantai pasok brand mandiri Indonesia.'
    };
  }

  const title = `${brand.name} | Berkas Brand Sektor Lokal`;
  const description = `${brand.coreFinding} (${brand.origin} - ${brand.lensName})`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      images: [
        {
          url: brand.heroBgUrl || brand.logoUrl,
          width: 1200,
          height: 630,
          alt: brand.name
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [brand.heroBgUrl || brand.logoUrl]
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  // Schema.org JSON-LD for Answer Engine Optimization & Knowledge Graph
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.name,
    url: brand.channels.officialStore[0]?.url || 'https://sektorlokal.id',
    logo: brand.logoUrl,
    description: brand.coreFinding,
    address: {
      '@type': 'PostalAddress',
      addressLocality: brand.origin,
      addressCountry: 'ID'
    },
    knowsAbout: [brand.lensName, 'Indonesian Manufacturing', 'Ethical Supply Chain', 'Local Economy'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (brand.scores.total / 20).toFixed(1),
      bestRating: '5.0',
      ratingCount: '1'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BrandClientView brand={brand} />
    </>
  );
}
