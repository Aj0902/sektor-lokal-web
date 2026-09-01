import './globals.css';
import type { Metadata } from 'next';
import { Anton, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

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
    <html lang="id" className={`${anton.variable} ${playfair.variable} ${jakarta.variable}`}>
      <body className="antialiased font-sans selection:bg-rose-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
