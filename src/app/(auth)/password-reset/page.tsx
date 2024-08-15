import { Metadata } from 'next';

import { ResetPasswordForm } from '@/components/auth/reset-password';

export const metadata: Metadata = {
  title: 'Request Password Reset | Onyx',
  description: 'Request a password reset for your Onyx account',
};
export default function ResetPassword() {
  return (
    <div className='container relative mt-8 flex-col items-center justify-center lg:max-w-none lg:px-0'>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[400px]'>
          <h1 className='font-display text-2xl font-extrabold text-neutral-100'>
            Reset your password
          </h1>
          <p className='text-sm text-muted-foreground/80'>
            Enter your email below to reset your password.
          </p>
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
}
