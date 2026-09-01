import './globals.css';
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#e11d48',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Ferry Irwandi — Potret Kebanggaan Warga | Sektor Lokal',
  description: 'Dokumentasi otentik rekam jejak, filosofi, dan valuasi dampak sosial Ferry Irwandi — Inisiator Malaka Project & Pejuang Literasi Kritis Indonesia.',
  openGraph: {
    title: 'Ferry Irwandi — Potret Kebanggaan Warga | Sektor Lokal',
    description: 'Dokumentasi otentik rekam jejak, filosofi, dan valuasi dampak sosial Ferry Irwandi.',
    url: 'https://sektor-lokal-web.vercel.app',
    siteName: 'Sektor Lokal',
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
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased font-sans selection:bg-rose-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
