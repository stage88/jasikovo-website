import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

const CONTENT_ROOT = path.join(process.cwd(), 'src', 'content');
const EXPORTABLE_EXTENSIONS = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.svg',
  '.webp',
  '.ico',
  '.json',
  '.txt',
]);

export const dynamic = 'force-static';
export const revalidate = 31536000;
export const dynamicParams = false;

function getMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();

  switch (ext) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    case '.gif':
      return 'image/gif';
    case '.svg':
      return 'image/svg+xml';
    case '.webp':
      return 'image/webp';
    case '.ico':
      return 'image/x-icon';
    case '.json':
      return 'application/json';
    case '.txt':
      return 'text/plain; charset=utf-8';
    default:
      return 'application/octet-stream';
  }
}

function isPathInside(target: string, base: string) {
  const relative = path.relative(base, target);
  return (
    Boolean(relative) &&
    !relative.startsWith('..') &&
    !path.isAbsolute(relative)
  );
}

async function listExportableFiles(dir: string): Promise<string[][]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const params: string[][] = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const childParams = await listExportableFiles(entryPath);
      params.push(...childParams);
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!EXPORTABLE_EXTENSIONS.has(ext)) {
      continue;
    }

    const relativePath = path.relative(CONTENT_ROOT, entryPath);
    const segments = relativePath.split(path.sep).filter(Boolean);
    if (segments.length > 0) {
      params.push(segments);
    }
  }

  return params;
}

export async function generateStaticParams() {
  const files = await listExportableFiles(CONTENT_ROOT);
  return files.map(slug => ({ slug }));
}

export async function GET(_request: NextRequest, context: unknown) {
  const { params } =
    (context as { params?: Record<string, string | string[] | undefined> }) ??
    {};
  const slugParam = params?.slug;
  const segments = Array.isArray(slugParam)
    ? slugParam
    : typeof slugParam === 'string'
      ? [slugParam]
      : [];
  if (segments.length === 0) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const requestedPath = segments.join('/');
  const normalisedPath = path.normalize(requestedPath).replace(/^\.\/+/, '');
  const absolutePath = path.join(CONTENT_ROOT, normalisedPath);

  if (!isPathInside(absolutePath, CONTENT_ROOT)) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  try {
    const fileBuffer = await fs.readFile(absolutePath);
    const mimeType = getMimeType(absolutePath);
    const arrayBuffer = fileBuffer.buffer.slice(
      fileBuffer.byteOffset,
      fileBuffer.byteOffset + fileBuffer.byteLength
    ) as ArrayBuffer;

    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': mimeType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(
      { error: 'Failed to read asset' },
      { status: 500 }
    );
  }
}
