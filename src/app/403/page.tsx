import Link from 'next/link';

import { getPageMetaData } from '@/lib/utils';
import Page from '@/templates/page';

export const metadata = getPageMetaData({ title: 'Not Authorized' });

export default function NotAuthorizedPage() {
  return (
    <Page title='Not Authorized'>
      <h2>Oops! You are not authorized to access this page.</h2>
      <br />
      <br />
      <p>
        You do not have permission to view this page. Please check the URL or
        return to the <Link href='/'>homepage</Link>.
      </p>
    </Page>
  );
}
