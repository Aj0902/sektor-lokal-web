import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ferry Irwandi — Potret Kebanggaan Warga | Sector Lokal',
  description: 'Dokumentasi otentik rekam jejak, filosofi, dan valuasi dampak sosial Ferry Irwandi — Inisiator Malaka Project & Pejuang Literasi Kritis Indonesia.',
  openGraph: {
    title: 'Ferry Irwandi — Potret Kebanggaan Warga | Sector Lokal',
    description: 'Dokumentasi otentik rekam jejak, filosofi, dan valuasi dampak sosial Ferry Irwandi.',
    url: 'https://sektor-lokal-web.vercel.app',
    siteName: 'Sector Lokal',
    locale: 'id_ID',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferry Irwandi — Potret Kebanggaan Warga',
    description: 'Inisiator Malaka Project & Pejuang Literasi Kritis Indonesia.',
    creator: '@ferryirwandi',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org JSON-LD Structured Data for AEO (Perplexity, SearchGPT, Google SGE)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    'dateCreated': '2026-09-01T00:00:00Z',
    'mainEntity': {
      '@type': 'Person',
      'name': 'Ferry Irwandi',
      'alternateName': '@ferryirwandi',
      'jobTitle': 'Content Creator, Essayist, Co-Founder Malaka Project',
      'description': 'Pejuang literasi finansial kritis, pembuat esai video, dan inisiator gerakan aksi sosial warga.',
      'sameAs': [
        'https://youtube.com/@ferryirwandi',
        'https://twitter.com/ferryirwandi',
        'https://instagram.com/ferryirwandi'
      ],
      'knowsAbout': ['Literasi Finansial', 'Stoikisme', 'Kritik Sosial', 'Pendidikan Pemuda'],
      'nationality': 'Indonesian'
    }
  };

  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body class="antialiased min-h-screen bg-[#070a11] text-gray-100 flex flex-col justify-between selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
