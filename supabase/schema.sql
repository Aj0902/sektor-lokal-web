-- SKEMA DATABASE SEKTOR LOKAL WEB (ISOLASI AKHIRAN _WARGA)

-- 1. TABEL UTAMA PROFIL WARGA
CREATE TABLE IF NOT EXISTS public.profiles_warga (
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

-- 2. TABEL LINIMASA PERJALANAN HIDUP WARGA
CREATE TABLE IF NOT EXISTS public.life_events_warga (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES public.profiles_warga(id) ON DELETE CASCADE,
  year_range TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  order_index INT DEFAULT 0
);

-- 3. TABEL DISCOVERY KARYA WARGA
CREATE TABLE IF NOT EXISTS public.works_warga (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES public.profiles_warga(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  link_url TEXT NOT NULL,
  order_index INT DEFAULT 0
);

-- 4. TABEL ARTIKEL & WAWASAN WARGA
CREATE TABLE IF NOT EXISTS public.articles_warga (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES public.profiles_warga(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  tag TEXT DEFAULT 'ESAI KRITIS',
  read_time TEXT DEFAULT '5 Menit Membaca',
  description TEXT NOT NULL,
  content_full TEXT DEFAULT '',
  link_url TEXT NOT NULL,
  order_index INT DEFAULT 0
);

-- 5. TABEL GALERI VISUAL WARGA
CREATE TABLE IF NOT EXISTS public.gallery_warga (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES public.profiles_warga(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  image_url TEXT NOT NULL,
  order_index INT DEFAULT 0
);

-- 6. TABEL KATA WARGA & TESTIMONI WARGA
CREATE TABLE IF NOT EXISTS public.testimonials_warga (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES public.profiles_warga(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  author_role TEXT NOT NULL,
  quote TEXT NOT NULL,
  order_index INT DEFAULT 0
);

-- 7. TABEL PRODUK & INISIATIF WARGA
CREATE TABLE IF NOT EXISTS public.initiatives_warga (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES public.profiles_warga(id) ON DELETE CASCADE,
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
ALTER TABLE public.profiles_warga ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.life_events_warga ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.works_warga ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles_warga ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_warga ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials_warga ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.initiatives_warga ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public Read Profiles Warga" ON public.profiles_warga FOR SELECT USING (true);
CREATE POLICY "Public Read Events Warga" ON public.life_events_warga FOR SELECT USING (true);
CREATE POLICY "Public Read Works Warga" ON public.works_warga FOR SELECT USING (true);
CREATE POLICY "Public Read Articles Warga" ON public.articles_warga FOR SELECT USING (true);
CREATE POLICY "Public Read Gallery Warga" ON public.gallery_warga FOR SELECT USING (true);
CREATE POLICY "Public Read Testimonials Warga" ON public.testimonials_warga FOR SELECT USING (true);
CREATE POLICY "Public Read Initiatives Warga" ON public.initiatives_warga FOR SELECT USING (true);

CREATE POLICY "All Access Profiles Warga" ON public.profiles_warga FOR ALL USING (true);
CREATE POLICY "All Access Events Warga" ON public.life_events_warga FOR ALL USING (true);
CREATE POLICY "All Access Works Warga" ON public.works_warga FOR ALL USING (true);
CREATE POLICY "All Access Articles Warga" ON public.articles_warga FOR ALL USING (true);
CREATE POLICY "All Access Gallery Warga" ON public.gallery_warga FOR ALL USING (true);
CREATE POLICY "All Access Testimonials Warga" ON public.testimonials_warga FOR ALL USING (true);
CREATE POLICY "All Access Initiatives Warga" ON public.initiatives_warga FOR ALL USING (true);
