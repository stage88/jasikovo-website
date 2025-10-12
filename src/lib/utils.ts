import { Metadata } from 'next';

export interface WebsiteConfig {
  title: string;
  tagline: string;
  description: string;
  coverImage?: string;
  logo?: string;
  lang: string;
  siteUrl: string;
  facebook?: string;
  twitter?: string;
  footer?: string;
  footerLink?: string;
  gtmId: string;
}

const ABSOLUTE_URL_PATTERN = /^https?:\/\//i;

const DEFAULT_KEYWORDS = [
  'Jasikovo',
  'Eastern Serbia',
  'Homolje',
  'Serbian village',
  'Jasikovo history',
  'Jasikovo photography',
];

const SITE_CONFIG: WebsiteConfig = {
  title: 'Jasikovo',
  tagline: 'Daleko, daleko i jos dalje ...',
  description:
    'This is a site about a town called Jasikovo in eastern Serbia - Ovo je sajt o selu Jasikovu u istočnoj Srbiji.',
  coverImage: 'img/blog-cover.jpg',
  logo: 'content/img/site-logo.png',
  lang: 'en',
  siteUrl: 'https://jasikovo.com',
  facebook: 'https://www.facebook.com/ljuba.ilic.jasikovo',
  footer: 'theme by Sam Ilic',
  footerLink: 'https://github.com/stage88/jasikovo-website',
  gtmId: 'G-PLCHSHBZQD',
};

export function toTitleCase(str: string) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

export function getSiteConfig(): WebsiteConfig {
  return { ...SITE_CONFIG };
}

export function resolveSiteAssetPath(asset?: string): string | undefined {
  if (!asset) {
    return undefined;
  }

  if (ABSOLUTE_URL_PATTERN.test(asset) || asset.startsWith('/')) {
    return asset;
  }

  const normalised = asset.replace(/^content\//, '');
  return `/content/${normalised}`;
}

function resolveSiteImageUrl(
  asset: string | undefined,
  siteUrl: string
): string | undefined {
  const resolved = resolveSiteAssetPath(asset);
  if (!resolved) {
    return undefined;
  }

  if (ABSOLUTE_URL_PATTERN.test(resolved)) {
    return resolved;
  }

  try {
    return new URL(resolved, siteUrl).toString();
  } catch (_error) {
    return undefined;
  }
}

export function getPageMetaData(meta: Metadata = {}): Metadata {
  const siteConfig = getSiteConfig();
  const siteTitle = siteConfig.title;
  const metaTitle = typeof meta.title === 'string' ? meta.title : undefined;
  const title = metaTitle ? `${metaTitle} | ${siteTitle}` : siteTitle;
  const description = meta.description ?? siteConfig.description;
  const metadataBase = meta.metadataBase ?? new URL(siteConfig.siteUrl);

  const icons = meta.icons ?? {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
  };

  const alternates = meta.alternates
    ? { ...meta.alternates }
    : { canonical: siteConfig.siteUrl };
  if (!alternates.canonical) {
    alternates.canonical = siteConfig.siteUrl;
  }

  const defaultOgImage = resolveSiteImageUrl(
    siteConfig.coverImage ?? siteConfig.logo,
    siteConfig.siteUrl
  );
  const openGraph = {
    ...meta.openGraph,
    title: meta.openGraph?.title ?? title,
    description: meta.openGraph?.description ?? description,
    url: meta.openGraph?.url ?? siteConfig.siteUrl,
    siteName: meta.openGraph?.siteName ?? siteTitle,
    images:
      meta.openGraph?.images ??
      (defaultOgImage ? [{ url: defaultOgImage }] : undefined),
  } as Metadata['openGraph'];

  const defaultTwitterImages = defaultOgImage ? [defaultOgImage] : undefined;
  const twitter = {
    ...meta.twitter,
    title: meta.twitter?.title ?? title,
    description: meta.twitter?.description ?? description,
    images: meta.twitter?.images ?? defaultTwitterImages,
  } as Metadata['twitter'];

  const keywords = meta.keywords ?? DEFAULT_KEYWORDS;

  return {
    ...meta,
    title,
    description,
    metadataBase,
    icons,
    alternates,
    keywords,
    openGraph,
    twitter,
  };
}
