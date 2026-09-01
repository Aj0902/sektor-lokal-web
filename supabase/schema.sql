-- ====================================================================
-- SEKTOR LOKAL WEB — SCHEMA DATABASE SUPABASE MULTI-PROFIL
-- ====================================================================

-- 1. TABEL UTAMA PROFIL
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  bio_paragraphs TEXT[] NOT NULL,
  quote TEXT NOT NULL,
  photo_url TEXT NOT NULL,
  verified BOOLEAN DEFAULT true,
  status_text TEXT DEFAULT 'VERIFIKASI TERKURASI',
  social_links JSONB NOT NULL DEFAULT '{}'::jsonb,
  theme_default TEXT DEFAULT 'light',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. TABEL LINIMASA PERJALANAN HIDUP
CREATE TABLE IF NOT EXISTS public.life_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  year_range TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  order_index INT DEFAULT 0
);

-- 3. TABEL DISCOVERY KARYA
CREATE TABLE IF NOT EXISTS public.works (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  link_url TEXT NOT NULL,
  order_index INT DEFAULT 0
);

-- 4. TABEL ARTIKEL & WAWASAN
CREATE TABLE IF NOT EXISTS public.articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  tag TEXT DEFAULT 'ESAI KRITIS',
  read_time TEXT DEFAULT '5 Menit Membaca',
  description TEXT NOT NULL,
  link_url TEXT NOT NULL,
  order_index INT DEFAULT 0
);

-- 5. TABEL KATA WARGA & TESTIMONI
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  author_role TEXT NOT NULL,
  quote TEXT NOT NULL,
  order_index INT DEFAULT 0
);

-- 6. TABEL PRODUK & INISIATIF WARGA
CREATE TABLE IF NOT EXISTS public.initiatives (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  action_text TEXT NOT NULL,
  link_url TEXT DEFAULT '#',
  order_index INT DEFAULT 0
);

-- RLS POLICIES (PUBLIC READ-ONLY ACCESS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.life_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.works ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.initiatives ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Allow public read access on life_events" ON public.life_events FOR SELECT USING (true);
CREATE POLICY "Allow public read access on works" ON public.works FOR SELECT USING (true);
CREATE POLICY "Allow public read access on articles" ON public.articles FOR SELECT USING (true);
CREATE POLICY "Allow public read access on testimonials" ON public.testimonials FOR SELECT USING (true);
CREATE POLICY "Allow public read access on initiatives" ON public.initiatives FOR SELECT USING (true);

-- SEED DATA AWAL PROFIL FERRY IRWANDI
INSERT INTO public.profiles (slug, name, title, category, bio_paragraphs, quote, photo_url, verified, status_text, social_links)
VALUES (
  'ferry-irwandi',
  'FERRY IRWANDI',
  'The Voices • Disruptor • Literasi Kritis',
  'THE VOICES',
  ARRAY[
    'Ferry Irwandi adalah mantan ASN Kementerian Keuangan yang mengambil keputusan berani untuk keluar dari zona nyaman birokrasi demi mendedikasikan hidupnya sebagai kreator esai video, edukator finansial kritis, dan penggerak aksi warga.',
    'Dikenal lewat gaya penyampaiannya yang analitis, tajam, dan membumi, ia konsisten menggunakan media digitalnya untuk membongkar kejahatan keuangan serta membakar semangat pemikiran rasional bagi generasi muda Indonesia.'
  ],
  'Berpikir kritis adalah benteng terakhir kebebasan individu di tengah gempuran skema penipuan dan kebodohan finansial.',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  true,
  'VERIFIKASI TERKURASI',
  '{"youtube": "https://youtube.com/@ferryirwandi", "twitter": "https://twitter.com/ferryirwandi", "instagram": "https://instagram.com/ferryirwandi", "spotify": "https://spotify.com", "email": "contact@malakaproject.id"}'::jsonb
) ON CONFLICT (slug) DO NOTHING;
