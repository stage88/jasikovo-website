import { getPageMetaData } from '@/lib/utils';
import { AboutPageContent } from './components';

export const metadata = getPageMetaData({ title: 'Videos' });

export default function AboutPage() {
  return <AboutPageContent />;
}
