'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/cn';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ChangePasswordForm({ className, ...props }: UserAuthFormProps) {
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
          <div className='grid gap-2'>
            <Label className='text-xs text-neutral-500' htmlFor='firstname'>
              New Password
            </Label>
            <Input
              className='border-none bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 '
              id='newPassword'
              placeholder=''
              type='password'
              autoCapitalize='none'
              autoComplete='newPassword'
              autoCorrect='off'
              disabled={isLoading}
            />
          </div>

          <div className='grid gap-2'>
            <Label className='text-xs text-neutral-500' htmlFor='password'>
              Confirm new password
            </Label>
            <Input
              className='border-none bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 '
              id='confirmPassword'
              placeholder=''
              type='password'
              autoComplete='confirmPassword'
              autoCorrect='off'
              disabled={isLoading}
            />
          </div>
        </div>

        <div className='my-8 flex'>
          <Button
            variant='outline'
            disabled={isLoading}
            style={{ borderRadius: '0.3rem' }}
          >
            {isLoading && 'Loading ...'}
            {!isLoading && 'Change Password'}
          </Button>
        </div>
      </form>
    </div>
  );
}
