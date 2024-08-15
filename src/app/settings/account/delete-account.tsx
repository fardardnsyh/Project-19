'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

export function DeleteAccountForm() {
  const [loading] = useState(false);

  return (
    <div className=''>
      <h3 className='text-lg font-medium'>Delete Account</h3>
      <p className='mt-1 text-sm text-muted-foreground'>
        If you no longer want to use Onyx, you can permanently delete your
        account.
      </p>
      <Button
        size='sm'
        variant='destructive'
        className='mt-5 font-medium disabled:cursor-not-allowed disabled:opacity-50'
        type='submit'
        disabled={loading}
      >
        {loading ? <Spinner /> : 'Delete My Account'}
      </Button>
    </div>
  );
}
