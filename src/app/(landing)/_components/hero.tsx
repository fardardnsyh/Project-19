'use client';

import React from 'react';

import { Spotlight } from '@/components/ui/spotlight';

export default function Hero() {
  return (
    <div className='bg-grid-white/[0.02] relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center'>
      <Spotlight
        className='absolute -top-40 left-0 md:-top-20 md:left-60'
        fill='#fff'
      />
      <div className=' relative z-10  mx-auto w-full max-w-7xl  p-4 pt-20 md:pt-0'>
        <h1
          style={{ opacity: 0.7 }}
          className=' bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl'
        >
          Onyx is your <br /> job search assistant.
        </h1>
      </div>
    </div>
  );
}
