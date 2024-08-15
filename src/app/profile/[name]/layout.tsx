import type { Metadata } from 'next';

import { Icons } from '@/components/ui/icons';
import UserNav from '@/components/ui/navigation/user-nav';

export const metadata: Metadata = {
  title: 'Profile | Onyx',
  description:
    'View your profile on Onyx, the job tracking app that helps organize your applications.',
};

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=' flex-1 space-y-4  p-8 pt-6'>
      <div className='flex h-16 items-center justify-between px-4'>
        <div className='flex items-center space-x-4'>
          <Icons.logo className='h-8 w-8' />
        </div>
        <div className='ml-auto'>
          <UserNav align='end' />
        </div>
      </div>
      {children}
    </main>
  );
}
