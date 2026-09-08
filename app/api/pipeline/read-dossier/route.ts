import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DOSSIERS_ROOT = 'c:/AI Challlenge/docs/dossiers';

// Helper untuk mengambil teks langsung dari Google Drive URL
async function fetchGoogleDriveContent(driveUrl: string): Promise<string> {
  try {
    const match = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/) || driveUrl.match(/id=([a-zA-Z0-9_-]+)/);
    if (!match || !match[1]) return '';

    const fileId = match[1];
    const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const res = await fetch(directDownloadUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });

    if (res.ok) {
      return await res.text();
    }
  } catch (err) {
    console.warn('Drive fetch error:', err);
  }
  return '';
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') || searchParams.get('slug') || searchParams.get('name') || '';
  const driveUrlParam = searchParams.get('drive_url') || '';

  // 1. Jika diberikan direct Drive URL
  if (driveUrlParam) {
    const text = await fetchGoogleDriveContent(driveUrlParam);
    if (text) {
      return NextResponse.json({
        success: true,
        source: 'google_drive_direct',
        found: true,
        content: text
      });
    }
  }

  if (!query) {
    return NextResponse.json({ success: false, error: 'Parameter ?q= atau ?slug= wajib disertakan.' }, { status: 400 });
  }

  const cleanQuery = query.toLowerCase().trim();
  const slugQuery = cleanQuery.replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const result = {
    found: false,
    source: 'google_drive_and_local',
    slug: slugQuery,
    profile_md: '',
    master_dossier_md: '',
    extracted_articles: [] as { filename: string; content: string }[]
  };

  // 2. Baca dari arsip dossier lokal (yang tersinkronisasi 1-to-1 dengan Google Drive)
  if (fs.existsSync(DOSSIERS_ROOT)) {
    const laciDirs = fs.readdirSync(DOSSIERS_ROOT).filter(f => {
      const fullPath = path.join(DOSSIERS_ROOT, f);
      return fs.statSync(fullPath).isDirectory();
    });

    for (const laci of laciDirs) {
      const laciPath = path.join(DOSSIERS_ROOT, laci);
      const files = fs.readdirSync(laciPath);

      for (const file of files) {
        const fileLower = file.toLowerCase();
        if (fileLower.endsWith('.md')) {
          if (fileLower.includes(slugQuery) || fileLower.includes(cleanQuery)) {
            result.found = true;
            const fullFilePath = path.join(laciPath, file);
            const content = fs.readFileSync(fullFilePath, 'utf8');

            if (fileLower.includes('platform-profile')) {
              result.profile_md = content;
            } else if (fileLower.includes('master-dossier') || fileLower.includes('fact')) {
              result.master_dossier_md = content;
            }
          }
        }
      }

      // Subfolder extracted_articles
      const extDir = path.join(laciPath, 'extracted_articles');
      if (fs.existsSync(extDir)) {
        const artFiles = fs.readdirSync(extDir);
        for (const artFile of artFiles) {
          const artLower = artFile.toLowerCase();
          if (artLower.endsWith('.md') && (artLower.includes(slugQuery) || artLower.includes(cleanQuery))) {
            result.found = true;
            const artContent = fs.readFileSync(path.join(extDir, artFile), 'utf8');
            result.extracted_articles.push({
              filename: artFile,
              content: artContent
            });
          }
        }
      }

      if (result.found && (result.profile_md || result.master_dossier_md)) {
        break;
      }
    }
  }

  if (result.found) {
    return NextResponse.json({
      success: true,
      found: true,
      source: 'google_drive_synced_dossier',
      slug: result.slug,
      summary: `Ditemukan berkas resume dossier dari Google Drive untuk "${query}"`,
      dossier_content: {
        platform_profile_text: result.profile_md,
        master_dossier_text: result.master_dossier_md,
        total_extracted_articles: result.extracted_articles.length,
        articles: result.extracted_articles.slice(0, 3)
      }
    });
  }

  return NextResponse.json({
    success: true,
    found: false,
    source: 'not_found',
    message: `Berkas resume Google Drive untuk "${query}" belum ditemukan.`
  });
}
