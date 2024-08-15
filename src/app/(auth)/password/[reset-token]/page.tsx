import { Metadata } from 'next';

import { ChangePasswordForm } from '@/components/auth/change-password';

export const metadata: Metadata = {
  title: 'Request Password Reset | Onyx',
  description: 'Request a password reset for your Onyx account',
};

export default function passwordReset() {
  return (
    <div className='container relative mt-8 flex-col items-center justify-center lg:max-w-none lg:px-0'>
      <div className='grid min-h-[500px] place-content-center lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[400px]'>
          <h1 className='text-2xl font-semibold tracking-tight text-neutral-100'>
            Change your password
          </h1>
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
}
