'use client';

import * as React from 'react';

import { Icons } from './icons';

export const Spinner: React.FC = () => {
  return (
    <div role='status'>
      <Icons.spinner className='inline h-6 w-6 animate-spin fill-gray-600 text-gray-200' />
      <span className='sr-only'>Loading...</span>
    </div>
  );
};
