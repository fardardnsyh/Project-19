import type { Metadata } from 'next';

import { SidebarNav } from './general/_components/sidebar-nav';

export const metadata: Metadata = {
  title: 'Settings | Onyx',
  description: 'onyx user Settings page',
};

export default async function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className='space-y-6 p-10 pb-16 md:block lg:px-12'>
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-32 lg:space-y-0'>
          <SidebarNav />
          <div className='relative mx-auto flex-1 grow overflow-hidden px-1 lg:max-w-3xl xl:-ml-12 xl:pl-36'>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
