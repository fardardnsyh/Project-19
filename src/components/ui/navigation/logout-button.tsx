'use client';

import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

import { Button } from '@/components/ui/button';

export function LogoutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.refresh();
  };
  return (
    <Button
      size='xs'
      onClick={handleSignOut}
      variant='link'
      className='no-underline'
    >
      Log out
    </Button>
  );
}
