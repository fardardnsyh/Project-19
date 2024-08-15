import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';

import { CreateAccountForm } from '@/components/auth/signup/form';
import { AUTH_OPTIONS } from '@/lib/next-auth-options';

export const metadata: Metadata = {
  title: 'Signup | Onyx',
  description: 'Sign up to Onyx and Manage your job applications.',
};
export default async function Signup() {
  const session = await getServerSession(AUTH_OPTIONS);
  if (session && session?.user) redirect('/dashboard');
  return (
    <div className='container relative mt-8 flex-col items-center justify-center lg:max-w-none lg:px-0'>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
          <h1 className='font-display text-2xl font-extrabold text-neutral-100'>
            Create an Onyx Account
          </h1>
          <CreateAccountForm />
        </div>
      </div>
    </div>
  );
}
