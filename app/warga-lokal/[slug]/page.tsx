import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { discoveryLenses, getDiscoveryLensBySlug } from '../../../lib/supabase/discoveryData';
import DiscoveryLensClientView from './DiscoveryLensClientView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return discoveryLenses.map((lens) => ({
    slug: lens.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lens = getDiscoveryLensBySlug(slug);

  if (!lens) {
    return {
      title: 'Lensa Penemuan | Sektor Lokal',
      description: 'Kurasi terbuka warga dan kedaulatan karya di Indonesia.'
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
  const lens = getDiscoveryLensBySlug(slug);

  if (!lens) {
    notFound();
  }

  return <DiscoveryLensClientView lens={lens} />;
}
