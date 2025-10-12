import React from 'react';

import { getPageMetaData } from '@/lib/utils';
import { FamilyTreeContent } from './components';

export const metadata = getPageMetaData({
  title: 'Family Tree - Porodicno Stablo',
  description:
    'Explore the Jasikovo family tree, photos, and stories about the Ilic, Georgonji, and related families.',
});

export default function FamilyTreePage() {
  return <FamilyTreeContent />;
}
