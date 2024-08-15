'use client';

import Link from 'next/link';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/cn';

import { Spinner } from '../ui/spinner';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ResetPasswordForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className='mt-2 grid gap-4'>
          <Input
            className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
            id='email'
            placeholder='Email Address'
            type='email'
            disabled={isLoading}
          />
          <Button
            type='submit'
            className='bg-hero hover:bg-hero/90 disabled:cursor-not-allowed disabled:opacity-50'
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : 'Recover Password'}
          </Button>
          <Link
            href='/login'
            className='my-2 text-sm text-neutral-400 hover:text-neutral-100'
          >
            Back to login
          </Link>
        </div>
      </form>
    </div>
  );
}
