-- ============================================================================
-- SEKTOR LOKAL - MULTI-AGENT PIPELINE QUEUE SCHEMA & REALTIME SUPPORT
-- ============================================================================

CREATE TABLE IF NOT EXISTS public.pipeline_queue (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  query_name TEXT NOT NULL,
  slug TEXT,
  category TEXT,
  status TEXT NOT NULL DEFAULT 'queued', -- queued, researching, writing, curating, validating, live, failed
  current_agent TEXT DEFAULT 'Menunggu Antrean',
  mode TEXT DEFAULT 'new', -- new | update
  progress_percent INT DEFAULT 0,
  log_message TEXT,
  error_message TEXT,
  profile_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for speedy status querying and queue ordering (FIFO)
CREATE INDEX IF NOT EXISTS idx_pipeline_queue_status_created 
  ON public.pipeline_queue (status, created_at ASC);

-- Enable RLS
ALTER TABLE public.pipeline_queue ENABLE ROW LEVEL SECURITY;

-- Allow public / anon read access for live UI updates
CREATE POLICY "Allow public read on pipeline_queue"
  ON public.pipeline_queue
  FOR SELECT
  USING (true);

-- Allow anon / service role insert & update for pipeline orchestration
CREATE POLICY "Allow all on pipeline_queue for service and anon"
  ON public.pipeline_queue
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Enable Supabase Realtime for pipeline_queue
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' 
    AND schemaname = 'public' 
    AND tablename = 'pipeline_queue'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.pipeline_queue;
  END IF;
END
$$;
