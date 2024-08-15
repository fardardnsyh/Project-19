'use client';

import Image from 'next/image';

export function EmptyApplicationsView() {
  return (
    <div className='mt-12 flex flex-col items-center justify-center gap-y-4 md:items-start md:justify-start md:gap-y-8'>
      <div className='relative mx-auto h-[172px] max-w-[301px] rounded-t-xl md:h-[294px] md:max-w-[512px]'>
        <div className='h-[140px] overflow-hidden rounded-xl md:h-[262px]'>
          <Image
            width={300}
            height={172}
            src='/mockup/browser.svg'
            className='block h-[140px] w-full rounded-xl object-contain object-center md:h-[262px]'
            alt=''
          />
        </div>
        <div className='mt-4 flex flex-col gap-y-2'>
          <h1 className='text-center text-xl font-semibold text-neutral-100 sm:text-2xl md:text-3xl'>
            Create your first application
          </h1>
          <p className='text-center text-sm text-muted-foreground/80 md:text-base'>
            Add your first application to get started.
          </p>
        </div>
      </div>
    </div>
  );
}
