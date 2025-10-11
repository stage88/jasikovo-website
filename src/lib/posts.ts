import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { load as loadYaml } from 'js-yaml';
import { kebabCase } from 'lodash';

import { resolveSiteAssetPath } from './utils';

const contentDirectory = path.join(process.cwd(), 'src', 'content');
const authorsFile = path.join(contentDirectory, 'author.yaml');
const tagsFile = path.join(contentDirectory, 'tag.yaml');

function listMarkdownFiles(dirPath: string): string[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...listMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

export interface AuthorProfile {
  id: string;
  slug: string;
  name: string;
  bio?: string;
  avatar?: string | null;
  facebook?: string;
  twitter?: string;
  website?: string;
  location?: string;
  profileImage?: string | null;
}

interface AuthorYamlEntry {
  id?: string;
  yamlId?: string;
  bio?: string;
  avatar?: string;
  facebook?: string;
  twitter?: string;
  website?: string;
  location?: string;
  profile_image?: string;
}

interface TagYamlEntry {
  id?: string;
  yamlId?: string;
  description?: string;
  image?: string;
}

interface PostMeta {
  id: string;
  slug: string;
  filePath: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  draft: boolean;
  authorIds: string[];
  readingTime: string;
  image?: string | null;
}

export interface PostSummary {
  id: string;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  draft: boolean;
  authors: AuthorProfile[];
  readingTime: string;
  image?: string | null;
}

export interface PostDetail extends PostSummary {
  html: string;
}

let authorCache: Map<string, AuthorProfile> | null = null;
let postIndexCache: Map<string, PostMeta> | null = null;
let tagCache: Map<string, TagSummary> | null = null;

export function toPostId(slug: string): string {
  return slug.replace(/[\\/]/g, '--');
}

export function fromPostId(id: string): string {
  return id.replace(/--/g, '/');
}

function loadAuthors(): Map<string, AuthorProfile> {
  if (authorCache) {
    return authorCache;
  }

  if (!fs.existsSync(authorsFile)) {
    authorCache = new Map();
    return authorCache;
  }

  const fileContents = fs.readFileSync(authorsFile, 'utf8');
  const parsed = (loadYaml(fileContents) as AuthorYamlEntry[]) ?? [];

  const authors = new Map<string, AuthorProfile>();

  for (const entry of parsed) {
    const name = entry.yamlId ?? entry.id;
    if (!name) {
      continue;
    }

    const slug = kebabCase(name);
    const avatar = entry.avatar ? `/content/${entry.avatar}` : null;
    const profileImage = entry.profile_image
      ? `/content/${entry.profile_image}`
      : null;

    authors.set(name, {
      id: name,
      slug,
      name,
      bio: entry.bio,
      avatar,
      facebook: entry.facebook,
      twitter: entry.twitter,
      website: entry.website,
      location: entry.location,
      profileImage,
    });
  }

  authorCache = authors;
  return authors;
}

function createExcerpt(body: string, limit = 240): string {
  const cleaned = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/[#>*_\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (cleaned.length <= limit) {
    return cleaned;
  }

  return `${cleaned.slice(0, limit).trimEnd()}…`;
}

function calculateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const wordsPerMinute = 200;
  const minutes = Math.max(1, Math.round(words / wordsPerMinute));
  return `${minutes} min read`;
}

function normaliseToArray<T>(value: T | T[] | undefined): T[] {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function normaliseTagName(name: string): string {
  return name.trim().toLowerCase();
}

function resolvePostImage(image: string | null | undefined, filePath: string): string | null {
  if (!image) {
    return null;
  }

  const trimmed = image.trim();
  if (!trimmed) {
    return null;
  }

  if (/^https?:\/\//i.test(trimmed) || trimmed.startsWith('/')) {
    return trimmed;
  }

  if (trimmed.startsWith('content/')) {
    return resolveSiteAssetPath(trimmed) ?? null;
  }

  const baseDir = path.dirname(filePath);
  const absolutePath = path.resolve(baseDir, trimmed);
  const relativeWithinContent = path.relative(contentDirectory, absolutePath);

  if (
    !relativeWithinContent ||
    relativeWithinContent.startsWith('..') ||
    path.isAbsolute(relativeWithinContent)
  ) {
    return resolveSiteAssetPath(trimmed) ?? null;
  }

  const relativePath = relativeWithinContent.replace(/\\/g, '/');

  return resolveSiteAssetPath(`content/${relativePath}`) ?? null;
}

function extractPostImage(data: unknown): string | undefined {
  if (!data || typeof data !== 'object') {
    return undefined;
  }

  const candidateOrder: Array<keyof { image?: string; feature_image?: string; featureImage?: string }> = [
    'image',
    'feature_image',
    'featureImage',
  ];

  for (const key of candidateOrder) {
    const value = (data as Record<string, unknown>)[key];
    if (typeof value === 'string' && value.trim().length > 0) {
      return value.trim();
    }
  }

  return undefined;
}

export interface TagSummary {
  name: string;
  slug: string;
  description?: string;
  image?: string | null;
}

function loadTags(): Map<string, TagSummary> {
  if (tagCache) {
    return tagCache;
  }

  const tags = new Map<string, TagSummary>();

  if (!fs.existsSync(tagsFile)) {
    tagCache = tags;
    return tags;
  }

  const fileContents = fs.readFileSync(tagsFile, 'utf8');
  const parsed = (loadYaml(fileContents) as TagYamlEntry[]) ?? [];

  for (const entry of parsed) {
    const rawName = entry.id ?? entry.yamlId;
    if (!rawName) {
      continue;
    }

    const slug = kebabCase(rawName);
    const image = entry.image ? `/content/${entry.image}` : null;

    tags.set(normaliseTagName(rawName), {
      name: rawName,
      slug,
      description: entry.description,
      image,
    });
  }

  tagCache = tags;
  return tags;
}

function buildPostIndex(): Map<string, PostMeta> {
  const files = listMarkdownFiles(contentDirectory);
  const index = new Map<string, PostMeta>();

  for (const filePath of files) {
    const relative = path
      .relative(contentDirectory, filePath)
      .replace(/\\/g, '/');

    const slug = relative.replace(/\.md$/, '');
    const id = toPostId(slug);

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContents);
    const data = matterResult.data as Partial<PostMeta> & {
      title?: string;
      date?: string;
      tags?: string[] | string;
      excerpt?: string;
      draft?: boolean;
      author?: Array<{ yamlId?: string; id?: string } | string> | string;
    };

    const title = data.title ?? slug.split('/').pop() ?? slug;
    const date = data.date ?? '';
    const tags = normaliseToArray(data.tags ?? []) as string[];
    const rawAuthors = normaliseToArray(data.author);
    const authorIds = rawAuthors
      .map(author => {
        if (typeof author === 'string') {
          return author;
        }

        if (author?.yamlId) {
          return author.yamlId;
        }

        if (author?.id) {
          return author.id;
        }

        return null;
      })
      .filter((a): a is string => Boolean(a));

    const excerpt =
      typeof data.excerpt === 'string' && data.excerpt.trim().length > 0
        ? data.excerpt.trim()
        : createExcerpt(matterResult.content);

    const draft = Boolean(data.draft);
    const readingTime = calculateReadingTime(matterResult.content);
  const image = resolvePostImage(extractPostImage(data) ?? null, filePath);

    index.set(id, {
      id,
      slug,
      filePath,
      title,
      date,
      tags,
      excerpt,
      draft,
      authorIds,
      readingTime,
      image,
    });
  }

  return index;
}

function ensurePostIndex(): Map<string, PostMeta> {
  if (postIndexCache && process.env.NODE_ENV === 'production') {
    return postIndexCache;
  }

  postIndexCache = buildPostIndex();
  return postIndexCache;
}

function resolveAuthors(authorIds: string[]): AuthorProfile[] {
  const authorsMap = loadAuthors();

  return authorIds.map(id => {
    const existing = authorsMap.get(id);
    if (existing) {
      return existing;
    }

    const fallbackSlug = kebabCase(id);
    return {
      id,
      slug: fallbackSlug,
      name: id,
      avatar: null,
    };
  });
}

function mapMetaToSummary(meta: PostMeta): PostSummary {
  return {
    id: meta.id,
    slug: meta.slug,
    title: meta.title,
    date: meta.date,
    tags: meta.tags,
    excerpt: meta.excerpt,
    draft: meta.draft,
    authors: resolveAuthors(meta.authorIds),
    readingTime: meta.readingTime,
    image: meta.image ?? null,
  };
}

export function getSortedPostsData(
  includeDrafts = process.env.NODE_ENV !== 'production'
): PostSummary[] {
  const index = ensurePostIndex();

  const posts = Array.from(index.values())
    .filter(post => includeDrafts || !post.draft)
    .sort((a, b) => {
      const aDate = new Date(a.date || 0).getTime();
      const bDate = new Date(b.date || 0).getTime();
      return bDate - aDate;
    })
    .map(mapMetaToSummary);

  return posts;
}

export async function getPostData(id: string): Promise<PostDetail> {
  const index = ensurePostIndex();
  const meta = index.get(id);

  if (!meta) {
    throw new Error(`Post with id ${id} not found`);
  }

  const fileContents = fs.readFileSync(meta.filePath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const excerpt =
    typeof matterResult.data.excerpt === 'string' &&
    matterResult.data.excerpt.trim().length > 0
      ? matterResult.data.excerpt.trim()
      : meta.excerpt;

  return {
    id: meta.id,
    slug: meta.slug,
    title: meta.title,
    date: meta.date,
    tags: meta.tags,
    excerpt,
    draft: meta.draft,
    authors: resolveAuthors(meta.authorIds),
    readingTime: calculateReadingTime(matterResult.content),
    html: contentHtml,
    image: resolvePostImage(
      extractPostImage(matterResult.data) ?? meta.image ?? null,
      meta.filePath,
    ),
  };
}

export function getAllPostIds(): { id: string }[] {
  const index = ensurePostIndex();
  return Array.from(index.values()).map(post => ({ id: post.id }));
}

export interface PostRouteParams {
  year: string;
  month: string;
  slug: string;
}

function splitSlugPath(slugPath: string): PostRouteParams | null {
  const segments = slugPath.split('/').filter(Boolean);
  if (segments.length < 3) {
    return null;
  }

  const [year, month, ...rest] = segments;
  const slug = rest.join('/');

  if (!year || !month || !slug) {
    return null;
  }

  return { year, month, slug };
}

export function getAllPostRouteParams(
  includeDrafts = process.env.NODE_ENV !== 'production'
): PostRouteParams[] {
  const posts = getSortedPostsData(includeDrafts);
  const params: PostRouteParams[] = [];

  for (const post of posts) {
    const routeParams = splitSlugPath(post.slug);
    if (routeParams) {
      params.push(routeParams);
    }
  }

  return params;
}

export function getPostIdFromRouteParams(route: PostRouteParams): string {
  const slugPath = `${route.year}/${route.month}/${route.slug}`;
  return toPostId(slugPath);
}

export const POSTS_PER_PAGE = 12;

export function getPaginatedPosts(
  page: number,
  includeDrafts = process.env.NODE_ENV !== 'production'
): { posts: PostSummary[]; totalPages: number } {
  const allPosts = getSortedPostsData(includeDrafts);
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));

  if (page < 1) {
    return { posts: [], totalPages };
  }

  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const pagePosts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return { posts: pagePosts, totalPages };
}

export function getAllPaginationParams(
  includeDrafts = process.env.NODE_ENV !== 'production'
): number[] {
  const allPosts = getSortedPostsData(includeDrafts);
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  return Array.from({ length: totalPages }, (_, index) => index + 1);
}

export function getRelatedPosts(
  currentId: string,
  tags: string[],
  limit = 3
): PostSummary[] {
  if (!tags || tags.length === 0) {
    return [];
  }

  const candidates = getSortedPostsData().filter(post => post.id !== currentId);
  const related = candidates.filter(post =>
    post.tags.some(tag => tags.includes(tag))
  );
  return related.slice(0, limit);
}

export function getAdjacentPosts(currentId: string): {
  previous?: PostSummary;
  next?: PostSummary;
} {
  const posts = getSortedPostsData();
  const index = posts.findIndex(post => post.id === currentId);

  if (index === -1) {
    return {};
  }

  return {
    previous: index > 0 ? posts[index - 1] : undefined,
    next: index < posts.length - 1 ? posts[index + 1] : undefined,
  };
}

export function resolvePostIdToSlug(id: string): string {
  return fromPostId(id);
}

export function getTagSummary(tagName: string): TagSummary {
  const tags = loadTags();
  const normalised = normaliseTagName(tagName);
  const existing = tags.get(normalised);
  if (existing) {
    return existing;
  }

  const fallback: TagSummary = {
    name: tagName,
    slug: kebabCase(tagName),
  };

  tags.set(normalised, fallback);
  return fallback;
}

export function getTagSummaryBySlug(slug: string): TagSummary | undefined {
  const tags = loadTags();
  return Array.from(tags.values()).find(tag => tag.slug === slug);
}

export function getAllTagSummaries(): TagSummary[] {
  return Array.from(loadTags().values());
}

export function getPostsByTag(
  tagName: string,
  includeDrafts = process.env.NODE_ENV !== 'production'
): PostSummary[] {
  const normalised = normaliseTagName(tagName);
  return getSortedPostsData(includeDrafts).filter(post =>
    post.tags.some(tag => normaliseTagName(tag) === normalised)
  );
}
