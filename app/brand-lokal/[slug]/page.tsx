import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { brandLenses, getBrandLensBySlug } from '../../../lib/supabase/brandData';
import BrandLensClientView from './BrandLensClientView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return brandLenses.map((lens) => ({
    slug: lens.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lens = getBrandLensBySlug(slug);

  if (!lens) {
    return {
      title: 'Lensa Brand Lokal | Sektor Lokal',
      description: 'Kurasi independen brand dan manufaktur etis Indonesia.'
    };
  }

  return {
    title: `${lens.editorialTitle} (${lens.name}) | Sektor Lokal`,
    description: `${lens.definition} - ${lens.findingQuestion}`,
    openGraph: {
      title: `${lens.editorialTitle} | Sektor Lokal`,
      description: lens.definition,
      type: 'article'
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const lens = getBrandLensBySlug(slug);

  if (!lens) {
    notFound();
  }

  return <BrandLensClientView lens={lens} />;
}
