import Link from 'next/link';

import { getPageMetaData } from '@/lib/utils';
import Page from '@/templates/page';

export const metadata = getPageMetaData({ title: 'Not Found' });

export default function NotFound() {
  return (
    <Page title='404 - Page Not Found'>
      <h2>Oops! We couldn't find that page.</h2>
      <br />
      <br />
      <p>
        We couldn't find the page you were looking for. Please check the URL or
        return to the <Link href='/'>homepage</Link>.
      </p>
    </Page>
  );
}
