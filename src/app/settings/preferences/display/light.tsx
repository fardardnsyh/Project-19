'use client';

export function LightDisplay() {
  return (
    <div className='space-y-2 rounded-lg border-2 bg-white p-2'>
      <div className='space-y-2 rounded-md bg-neutral-100 p-2 shadow-sm'>
        <div className='h-2 w-[80px] rounded-lg bg-muted-foreground/50' />
        <div className='h-2 w-[100px] rounded-lg bg-muted-foreground/50' />
      </div>
      <div className='flex items-center space-x-2 rounded-md bg-neutral-100 p-2 shadow-sm'>
        <div className='h-4 w-4 rounded-full bg-muted-foreground/50' />
        <div className='h-2 w-[100px] rounded-lg bg-muted-foreground/50' />
      </div>
      <div className='flex items-center space-x-2 rounded-md bg-neutral-100 p-2 shadow-sm'>
        <div className='h-4 w-4 rounded-full bg-muted-foreground/50' />
        <div className='h-2 w-[100px] rounded-lg bg-muted-foreground/50' />
      </div>
    </div>
  );
}
