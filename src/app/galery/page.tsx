import { getPageMetaData } from '@/lib/utils';
import { GalleryPageContent } from './components';

export const metadata = getPageMetaData({ title: 'Gallery - Galerija' });

export default function GalleryPage() {
  return (
    <GalleryPageContent />
  );
}
