import './globals.css';
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#e11d48',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sektorlokal.id'),
  title: {
    default: 'Sektor Lokal | Manifestasi Jiwa Raga Bangsa dari Sebutan Lokal',
    template: '%s | Sektor Lokal'
  },
  description: 'Zona kurasi dan ekosistem independen yang menyatukan karya, cerita, pemikiran, dan manusia Indonesia. Menjaga akal sehat, kedaulatan tanah air, dan martabat peradaban lokal.',
  keywords: [
    'Sektor Lokal',
    'Warga Lokal',
    'Brand Lokal',
    'Inovasi Lokal',
    'Tokoh Inspiratif Indonesia',
    'Kedaulatan Budaya',
    'Kurasi Independen',
    'Akal Sehat Nusantara'
  ],
  authors: [{ name: 'Sektor Lokal Editorial Board', url: 'https://sektorlokal.id' }],
  creator: 'Sektor Lokal',
  publisher: 'Sektor Lokal',
  alternates: {
    canonical: 'https://sektorlokal.id'
  },
  openGraph: {
    title: 'Sektor Lokal | Manifestasi Jiwa Raga Bangsa dari Sebutan Lokal',
    description: 'Zona kurasi dan ekosistem independen yang menyatukan karya, cerita, pemikiran, dan manusia Indonesia.',
    url: 'https://sektorlokal.id',
    siteName: 'Sektor Lokal',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Sektor Lokal | Kanon Kurasi Warga Nusantara'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sektor Lokal | Manifestasi Jiwa Raga Bangsa dari Sebutan Lokal',
    description: 'Zona kurasi dan ekosistem independen yang menyatukan karya, cerita, pemikiran, dan manusia Indonesia.',
    creator: '@sektorlokal',
    images: ['https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const globalWebsiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://sektorlokal.id/#website',
  'url': 'https://sektorlokal.id',
  'name': 'Sektor Lokal',
  'alternateName': 'Warga Lokal',
  'description': 'Manifestasi jiwa raga bangsa dari sebutan lokal. Zona kurasi dan ekosistem independen yang menyatukan karya, cerita, pemikiran, dan manusia Indonesia.',
  'inLanguage': 'id-ID',
  'publisher': {
    '@type': 'Organization',
    '@id': 'https://sektorlokal.id/#organization',
    'name': 'Sektor Lokal',
    'url': 'https://sektorlokal.id',
    'logo': 'https://sektorlokal.id/logo.png',
    'sameAs': [
      'https://twitter.com/sektorlokal',
      'https://instagram.com/sektorlokal.id',
      'https://youtube.com/@sektorlokal'
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalWebsiteJsonLd) }}
        />
      </head>
      <body className="antialiased font-sans selection:bg-rose-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
