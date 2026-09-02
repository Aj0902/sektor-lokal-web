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
  content_full TEXT DEFAULT '',
  link_url TEXT NOT NULL,
  order_index INT DEFAULT 0
);

-- 5. TABEL GALERI VISUAL
CREATE TABLE IF NOT EXISTS public.gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  image_url TEXT NOT NULL,
  order_index INT DEFAULT 0
);

-- 6. TABEL KATA WARGA & TESTIMONI
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  author_role TEXT NOT NULL,
  quote TEXT NOT NULL,
  order_index INT DEFAULT 0
);

-- 7. TABEL PRODUK & INISIATIF WARGA
CREATE TABLE IF NOT EXISTS public.initiatives (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  price TEXT,
  price_variants TEXT[],
  image_url TEXT DEFAULT '',
  action_text TEXT NOT NULL,
  link_url TEXT DEFAULT '#',
  order_index INT DEFAULT 0
);

-- RLS POLICIES (PUBLIC READ ACCESS & FULL CRUD)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.life_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.works ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.initiatives ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public Read Profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Public Read Events" ON public.life_events FOR SELECT USING (true);
CREATE POLICY "Public Read Works" ON public.works FOR SELECT USING (true);
CREATE POLICY "Public Read Articles" ON public.articles FOR SELECT USING (true);
CREATE POLICY "Public Read Gallery" ON public.gallery FOR SELECT USING (true);
CREATE POLICY "Public Read Testimonials" ON public.testimonials FOR SELECT USING (true);
CREATE POLICY "Public Read Initiatives" ON public.initiatives FOR SELECT USING (true);

CREATE POLICY "All Access Profiles" ON public.profiles FOR ALL USING (true);
CREATE POLICY "All Access Events" ON public.life_events FOR ALL USING (true);
CREATE POLICY "All Access Works" ON public.works FOR ALL USING (true);
CREATE POLICY "All Access Articles" ON public.articles FOR ALL USING (true);
CREATE POLICY "All Access Gallery" ON public.gallery FOR ALL USING (true);
CREATE POLICY "All Access Testimonials" ON public.testimonials FOR ALL USING (true);
CREATE POLICY "All Access Initiatives" ON public.initiatives FOR ALL USING (true);
