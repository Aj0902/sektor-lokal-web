import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_DIR = 'c:/AI Challlenge/data';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') || searchParams.get('name') || '';

  if (!query) {
    return NextResponse.json({ success: false, error: 'Parameter ?q= atau ?name= wajib disertakan.' }, { status: 400 });
  }

  const cleanQuery = query.toLowerCase().trim();
  const slugQuery = cleanQuery.replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  let matchedData: any = null;

  // 1. Cari di Berkas Panen Serper Lokal (100 Tokoh Lengkap)
  if (fs.existsSync(DATA_DIR)) {
    const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('_harvest.json'));
    for (const f of files) {
      try {
        const content = JSON.parse(fs.readFileSync(path.join(DATA_DIR, f), 'utf8'));
        const found = content.find((item: any) => 
          item.name.toLowerCase().includes(cleanQuery) || 
          (item.slug && item.slug.toLowerCase() === slugQuery) ||
          cleanQuery.includes(item.name.toLowerCase())
        );
        if (found) {
          matchedData = found;
          break;
        }
      } catch (e) {}
    }
  }

  if (matchedData) {
    return NextResponse.json({
      success: true,
      source: 'google_sheet_serper_harvest',
      found_in_archive: true,
      data: {
        name: matchedData.name,
        slug: matchedData.slug || slugQuery,
        laci: matchedData.laci,
        role: matchedData.role,
        score: matchedData.score,
        summary: matchedData.summary,
        verified_articles_count: matchedData.articles?.length || 0,
        articles: matchedData.articles || [],
        verified_images_count: matchedData.images?.length || 0,
        images: matchedData.images || [],
        verified_products_count: matchedData.products?.length || 0,
        products: matchedData.products || []
      }
    });
  }

  // Jika tidak ditemukan di sheet panen 100 tokoh
  return NextResponse.json({
    success: true,
    source: 'not_in_sheet_needs_live_search',
    found_in_archive: false,
    message: `Tokoh "${query}" belum ada di arsip Sheet Serper 100 tokoh. Agen 1 akan melakukan riset pencarian baru.`,
    data: {
      name: query,
      slug: slugQuery
    }
  });
}
