import type { Metadata } from 'next';

import { Navigation } from '@/components/ui/navigation';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Onyx - Unlock Your Dream Job',
  description: `${siteConfig.description}`,
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
}
