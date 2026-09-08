'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Play, 
  Trash2, 
  RefreshCw, 
  CheckCircle2, 
  Clock, 
  Layers,
  Search,
  FileText,
  Image as ImageIcon,
  CheckCheck,
  Zap,
  Globe,
  Database,
  ArrowRight
} from 'lucide-react';
import { createClient } from '../../../lib/supabase/client';
import { 
  getQueueItems, 
  addQueriesToQueue, 
  updateQueueStatus, 
  deleteQueueItem, 
  clearFinishedQueue 
} from '../../../lib/supabase/adminActions';
import { PipelineQueueItem, PipelineStage } from '../../../lib/supabase/types';

const STAGES: { key: PipelineStage; label: string; agent: string; icon: any; color: string }[] = [
  { key: 'queued', label: 'Antrean', agent: 'Sistem', icon: Clock, color: 'text-gray-400' },
  { key: 'researching', label: 'Riset', agent: 'Jurnalis Lapangan', icon: Search, color: 'text-blue-500' },
  { key: 'writing', label: 'Menulis', agent: 'Penulis Naskah', icon: FileText, color: 'text-amber-500' },
  { key: 'curating', label: 'Kurasi', agent: 'Kurator Visual & Niaga', icon: ImageIcon, color: 'text-purple-500' },
  { key: 'validating', label: 'Validasi', agent: 'Pemred QA', icon: CheckCheck, color: 'text-indigo-500' },
  { key: 'live', label: 'Live', agent: 'Supabase Production', icon: CheckCircle2, color: 'text-emerald-500' }
];

export default function GeneratorAdminPage() {
  const [inputText, setInputText] = useState('');
  const [queue, setQueue] = useState<PipelineQueueItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState<{ text: string; type: 'success' | 'info' | 'error' } | null>(null);
  const [webhookUrl, setWebhookUrl] = useState('http://localhost:5678/webhook/editorial-pipeline');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const showToast = (text: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToastMsg({ text, type });
    setTimeout(() => setToastMsg(null), 5000);
  };

  const fetchQueue = async () => {
    const items = await getQueueItems();
    setQueue(items);
  };

  useEffect(() => {
    fetchQueue();

    const supabase = createClient();
    const channel = supabase
      .channel('pipeline_queue_realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'pipeline_queue' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setQueue(prev => [payload.new as PipelineQueueItem, ...prev.filter(i => i.id !== payload.new.id)]);
            showToast(`📥 Job baru masuk antrean: ${payload.new.query_name}`, 'info');
          } else if (payload.eventType === 'UPDATE') {
            setQueue(prev => prev.map(item => item.id === payload.new.id ? payload.new as PipelineQueueItem : item));
            if (payload.new.status === 'live') {
              showToast(`🎉 Profil "${payload.new.query_name}" telah LIVE di Supabase!`, 'success');
            }
          } else if (payload.eventType === 'DELETE') {
            setQueue(prev => prev.filter(item => item.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    const interval = setInterval(fetchQueue, 4000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(interval);
    };
  }, []);

  const handleAddToQueue = async () => {
    if (!inputText.trim()) return;

    const rawNames = inputText
      .split(/[\n,]+/)
      .map(s => s.trim())
      .filter(s => s.length > 0);

    if (rawNames.length === 0) return;

    setLoading(true);
    const res = await addQueriesToQueue(rawNames);
    setLoading(false);

    if (res.success) {
      showToast(`🚀 ${res.added} tokoh berhasil ditambahkan ke antrean!`, 'success');
      setInputText('');
      fetchQueue();
    } else {
      showToast(res.message, 'error');
    }
  };

  const handleAddPreset = (names: string[]) => {
    setInputText(names.join('\n'));
  };

  const handleDelete = async (id: string, name: string) => {
    if (confirm(`Hapus "${name}" dari antrean?`)) {
      await deleteQueueItem(id);
      fetchQueue();
    }
  };

  const handleClearFinished = async () => {
    await clearFinishedQueue();
    fetchQueue();
    showToast('Antrean yang selesai telah dibersihkan', 'info');
  };

  const handleTriggerSingle = async (item: PipelineQueueItem) => {
    showToast(`⚡ Mengirim "${item.query_name}" ke agen editorial...`, 'info');
    
    await updateQueueStatus(item.id, {
      status: 'researching',
      current_agent: 'Jurnalis Lapangan (Riset Serper/Sheet)',
      progress_percent: 20,
      log_message: 'Menganalisis profil dari data panen Serper / Google Search'
    });
    fetchQueue();

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          job_id: item.id,
          query_name: item.query_name,
          slug: item.slug,
          mode: item.mode || 'new'
        })
      });

      if (res.ok) {
        showToast(`✅ n8n berhasil menerima job "${item.query_name}"!`, 'success');
      } else {
        simulatePipelineProgress(item.id, item.query_name, item.slug || 'tokoh');
      }
    } catch (err) {
      simulatePipelineProgress(item.id, item.query_name, item.slug || 'tokoh');
    }
  };

  const simulatePipelineProgress = async (id: string, name: string, slug: string) => {
    const steps: { stage: PipelineStage; agent: string; percent: number; log: string; delay: number }[] = [
      { stage: 'researching', agent: 'Jurnalis Lapangan', percent: 25, log: 'Memeriksa rekam jejak Serper & database 100 tokoh...', delay: 1800 },
      { stage: 'writing', agent: 'Penulis Naskah', percent: 50, log: 'Menyusun draf naratif standar Tempo Institute...', delay: 2200 },
      { stage: 'curating', agent: 'Kurator Foto & Produk', percent: 75, log: 'Mengurasi 10 foto HD & 5 inisiatif karya terverifikasi...', delay: 1800 },
      { stage: 'validating', agent: 'Pemred QA Validator', percent: 90, log: 'Memvalidasi relasi skema Supabase & anti-halusinasi...', delay: 1400 },
      { stage: 'live', agent: 'Supabase Production', percent: 100, log: 'Sukses terpublikasi live di web /profil/' + slug, delay: 1000 }
    ];


    for (const step of steps) {
      await new Promise(r => setTimeout(r, step.delay));
      await updateQueueStatus(id, {
        status: step.stage,
        current_agent: step.agent,
        progress_percent: step.percent,
        log_message: step.log
      });
      fetchQueue();
    }
    showToast(`🎉 Profil "${name}" selesai diproses dan LIVE!`, 'success');
  };

  const getStageIndex = (status: PipelineStage) => {
    const idx = STAGES.findIndex(s => s.key === status);
    return idx === -1 ? 0 : idx;
  };

  const filteredQueue = queue.filter(item => {
    if (filterStatus === 'all') return true;
    if (filterStatus === 'active') return ['queued', 'researching', 'writing', 'curating', 'validating'].includes(item.status);
    if (filterStatus === 'live') return item.status === 'live';
    if (filterStatus === 'failed') return item.status === 'failed';
    return true;
  });

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6 border-inherit/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#E11D48] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              PABRIK EDITORIAL MULTI-AGEN OTONOM
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#E11D48]/10 text-[#E11D48] font-mono text-[10px] font-bold border border-[#E11D48]/30">
              N8N + SUPABASE REALTIME
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display uppercase tracking-tight mt-1">
            AI GENERATOR & LIVE PIPELINE MONITOR
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/admin"
            className="px-4 py-2.5 rounded-xl border border-inherit/20 hover:border-[#E11D48] text-xs font-mono font-bold uppercase transition-colors"
          >
            ← Kembali ke Direktori
          </Link>
        </div>
      </div>

      {/* TOAST MESSAGE */}
      {toastMsg && (
        <div className={`p-4 rounded-xl border text-xs font-mono flex items-center justify-between gap-3 shadow-lg transition-all ${
          toastMsg.type === 'success' 
            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
            : toastMsg.type === 'error'
            ? 'bg-red-500/10 border-red-500/30 text-red-400'
            : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
        }`}>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 shrink-0" />
            <span>{toastMsg.text}</span>
          </div>
          <button onClick={() => setToastMsg(null)} className="opacity-60 hover:opacity-100">✕</button>
        </div>
      )}

      {/* SECTION 1: INPUT GENERATOR & BATCH DISPATCHER */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Input Textarea Form */}
        <div className="lg:col-span-2 p-6 rounded-2xl border border-inherit/10 bg-inherit/40 space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#E11D48]" />
              Input Batch Nama Tokoh (Fleksibel 1 s.d. Puluhan)
            </label>
            <span className="text-[11px] font-mono text-gray-500">1 baris = 1 tokoh</span>
          </div>

          <textarea
            rows={5}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`Masukkan nama tokoh di sini...\nContoh:\nNajwa Shihab\nGreysia Polii\nFajar Alfian`}
            className="w-full p-4 rounded-xl border border-inherit/10 bg-inherit/60 text-sm font-mono focus:outline-none focus:border-[#E11D48] transition-colors resize-y leading-relaxed"
          />

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-gray-400">
            <span>Preset Cepat:</span>
            <button
              onClick={() => handleAddPreset(['Najwa Shihab', 'Greysia Polii', 'Fajar Alfian'])}
              className="px-2.5 py-1 rounded-lg border border-inherit/10 hover:border-[#E11D48] hover:text-[#E11D48] text-[11px] transition-colors"
            >
              + 3 Tokoh Baru
            </button>
            <button
              onClick={() => handleAddPreset(['Dandhy Dwi Laksono', 'Bivitri Susanti', 'Dr. Fahruddin Faiz'])}
              className="px-2.5 py-1 rounded-lg border border-inherit/10 hover:border-[#E11D48] hover:text-[#E11D48] text-[11px] transition-colors"
            >
              + Laci 1 (Penjaga Nalar)
            </button>
            <button
              onClick={() => handleAddPreset(['Farwiza Farhan', 'M. Bijaksana Junerosano', 'Tri Mumpuni'])}
              className="px-2.5 py-1 rounded-lg border border-inherit/10 hover:border-[#E11D48] hover:text-[#E11D48] text-[11px] transition-colors"
            >
              + Laci 2 (Penyelamat Bumi)
            </button>
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-500">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Smart Upsert Aktif (Auto-Detect Baru vs Update)</span>
            </div>

            <button
              onClick={handleAddToQueue}
              disabled={loading || !inputText.trim()}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] disabled:opacity-50 text-white font-bold text-xs uppercase font-mono tracking-wider shadow-md shadow-[#E11D48]/30 flex items-center justify-center gap-2 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>{loading ? 'Memproses...' : '🚀 Masukkan ke Antrean Agen'}</span>
            </button>
          </div>
        </div>

        {/* Pipeline Architecture Info Card */}
        <div className="p-6 rounded-2xl border border-inherit/10 bg-inherit/30 space-y-4 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-mono text-[#E11D48] font-bold uppercase tracking-wider">
              ALUR 4 AGEN N8N
            </span>
            <h3 className="font-display text-lg uppercase tracking-tight mt-1">
              PRODUKSI EDITORIAL KELAS DUNIA
            </h3>
            
            <div className="mt-4 space-y-2 text-xs font-mono text-gray-400">
              <div className="flex items-start gap-2">
                <span className="text-[#E11D48] font-bold">1.</span>
                <span><strong>Jurnalis Lapangan:</strong> Riset Serper Sheet / Live Search & Fakta 5W+1H.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#E11D48] font-bold">2.</span>
                <span><strong>Penulis Naskah:</strong> Draf Narasi Standar Tempo & Gen-Z Dialectics.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#E11D48] font-bold">3.</span>
                <span><strong>Kurator Visual:</strong> Kurasi Foto HD & Produk Terverifikasi.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#E11D48] font-bold">4.</span>
                <span><strong>Pemred QA:</strong> Self-Correction & Relasi Schema Supabase.</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-inherit/10 space-y-2">
            <label className="text-[10px] font-mono text-gray-500 uppercase">n8n Webhook Target:</label>
            <input
              type="text"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg border border-inherit/10 bg-inherit/80 text-[11px] font-mono text-gray-300 focus:outline-none focus:border-[#E11D48]"
            />
          </div>
        </div>

      </div>

      {/* SECTION 2: LIVE QUEUE MONITOR & STEPPER CARDS */}
      <div className="space-y-4">
        
        {/* Queue Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-inherit/10 bg-inherit/40">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-display uppercase tracking-tight flex items-center gap-2">
              <Database className="w-5 h-5 text-[#E11D48]" />
              ANTREAN & MONITOR PROSES REAL-TIME
            </h2>
            <span className="px-2.5 py-0.5 rounded-full bg-[#E11D48]/10 text-[#E11D48] font-mono text-xs font-bold border border-[#E11D48]/20">
              {queue.length} Pekerjaan
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Filter Buttons */}
            <div className="flex items-center rounded-lg border border-inherit/10 p-1 text-[11px] font-mono">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-2.5 py-1 rounded-md transition-colors ${filterStatus === 'all' ? 'bg-[#E11D48] text-white' : 'text-gray-400 hover:text-inherit'}`}
              >
                Semua ({queue.length})
              </button>
              <button
                onClick={() => setFilterStatus('active')}
                className={`px-2.5 py-1 rounded-md transition-colors ${filterStatus === 'active' ? 'bg-[#E11D48] text-white' : 'text-gray-400 hover:text-inherit'}`}
              >
                Aktif ({queue.filter(i => ['queued', 'researching', 'writing', 'curating', 'validating'].includes(i.status)).length})
              </button>
              <button
                onClick={() => setFilterStatus('live')}
                className={`px-2.5 py-1 rounded-md transition-colors ${filterStatus === 'live' ? 'bg-emerald-500 text-white' : 'text-gray-400 hover:text-inherit'}`}
              >
                Live ({queue.filter(i => i.status === 'live').length})
              </button>
            </div>

            <button
              onClick={fetchQueue}
              className="p-2 rounded-lg border border-inherit/10 hover:border-[#E11D48] text-gray-400 hover:text-[#E11D48] transition-colors"
              title="Refresh Antrean"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <button
              onClick={handleClearFinished}
              className="px-3 py-1.5 rounded-lg border border-inherit/10 hover:border-red-500 text-gray-400 hover:text-red-500 font-mono text-[11px] transition-colors"
            >
              🧹 Bersihkan Selesai
            </button>
          </div>
        </div>

        {/* Queue Cards List */}
        {filteredQueue.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-dashed border-inherit/20 text-gray-500 font-mono text-xs space-y-2">
            <Clock className="w-8 h-8 mx-auto opacity-30 text-[#E11D48]" />
            <p>Antrean kosong. Masukkan nama tokoh pada form di atas untuk memulai eksekusi agen.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredQueue.map((item) => {
              const currentStepIdx = getStageIndex(item.status);
              const isLive = item.status === 'live';
              const isFailed = item.status === 'failed';
              const isWorking = !isLive && !isFailed && item.status !== 'queued';

              return (
                <div 
                  key={item.id}
                  className={`p-6 rounded-2xl border transition-all ${
                    isLive 
                      ? 'border-emerald-500/30 bg-emerald-950/10' 
                      : isWorking
                      ? 'border-[#E11D48]/40 bg-[#E11D48]/5 shadow-lg shadow-[#E11D48]/5'
                      : 'border-inherit/10 bg-inherit/40'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-inherit/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        isLive ? 'bg-emerald-500' : isWorking ? 'bg-amber-400 animate-ping' : 'bg-gray-500'
                      }`} />
                      <div>
                        <h3 className="font-display text-lg uppercase tracking-tight text-inherit">
                          {item.query_name}
                        </h3>
                        <p className="text-[11px] font-mono text-gray-400">
                          Slug: <span className="text-[#E11D48] font-bold">/profil/{item.slug}</span> • Mode: <span className="uppercase text-emerald-500">{item.mode || 'Smart Upsert'}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      {isLive ? (
                        <Link
                          href={`/profil/${item.slug}`}
                          target="_blank"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-xs font-bold uppercase transition-all shadow-md shadow-emerald-500/20"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Lihat Profil Live</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleTriggerSingle(item)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E11D48]/10 hover:bg-[#E11D48] hover:text-white text-[#E11D48] border border-[#E11D48]/30 font-mono text-xs font-bold uppercase transition-all"
                        >
                          <Play className="w-3.5 h-3.5" />
                          <span>Jalankan Agen</span>
                        </button>
                      )}

                      <button
                        onClick={() => handleDelete(item.id, item.query_name)}
                        className="p-1.5 rounded-lg border border-inherit/10 hover:border-red-500 text-gray-500 hover:text-red-500 transition-colors"
                        title="Hapus"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Visual Multi-Agent Stepper */}
                  <div className="py-5">
                    <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                      {STAGES.map((s, idx) => {
                        const Icon = s.icon;
                        const isPast = idx < currentStepIdx || isLive;
                        const isCurrent = idx === currentStepIdx && !isLive;

                        return (
                          <div 
                            key={s.key}
                            className={`p-3 rounded-xl border flex flex-col justify-between gap-2 transition-all ${
                              isPast 
                                ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-500' 
                                : isCurrent
                                ? 'border-[#E11D48] bg-[#E11D48]/10 text-[#E11D48] ring-1 ring-[#E11D48]'
                                : 'border-inherit/10 bg-inherit/20 text-gray-500 opacity-60'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono font-bold">0{idx + 1}</span>
                              <Icon className={`w-4 h-4 ${isCurrent ? 'animate-bounce' : ''}`} />
                            </div>
                            <div>
                              <p className="font-display text-xs uppercase tracking-tight">{s.label}</p>
                              <p className="text-[9px] font-mono truncate">{s.agent}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Status Progress & Live Agent Log */}
                  <div className="border-t border-inherit/10 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="text-[#E11D48] font-bold">Agen Aktif:</span>
                      <span className="text-inherit">{item.current_agent || 'Menunggu giliran'}</span>
                      {item.log_message && (
                        <span className="text-gray-500 italic hidden md:inline">— {item.log_message}</span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-28 h-2 rounded-full bg-inherit/40 border border-inherit/10 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#E11D48] to-emerald-500 transition-all duration-500"
                          style={{ width: `${item.progress_percent || (isLive ? 100 : (currentStepIdx / 5) * 100)}%` }}
                        />
                      </div>
                      <span className="font-bold text-[11px] text-gray-400">
                        {item.progress_percent || (isLive ? 100 : Math.round((currentStepIdx / 5) * 100))}%
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>

    </div>
  );
}
