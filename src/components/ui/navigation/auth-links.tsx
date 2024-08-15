'use client';

import Link from 'next/link';
import React from 'react';

const AuthenticationLinks: React.FC = () => {
  return (
    <div className='hidden lg:flex lg:items-center lg:space-x-2'>
      <Link
        className='rounded-lg border border-muted-foreground/30 px-6 py-1.5 text-sm font-medium text-primary transition-colors hover:border-transparent hover:bg-muted lg:w-auto'
        href='/login'
      >
        Log In{' '}
      </Link>
      <Link
        className='rounded-lg bg-primary px-6 py-1.5 text-sm font-medium text-muted transition-colors hover:border-transparent hover:bg-primary/90 lg:w-auto'
        href='/signup'
      >
        Sign Up{' '}
      </Link>
    </div>
  );
};

export default AuthenticationLinks;
