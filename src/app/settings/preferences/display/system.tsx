'use client';

export function SystemDisplay() {
  return (
    <div className='flex justify-evenly rounded-lg border-2 bg-primary p-2'>
      <div className=' bg-primary'>
        <div className='space-y-2 rounded-md p-2'>
          <div className='h-2 w-[60px] rounded-lg bg-muted-foreground/50' />
          <div className='h-2 w-[80px] rounded-lg bg-muted-foreground/50' />
        </div>
        <div className='space-y-2 rounded-md p-2'>
          <div className='h-2 w-[60px] rounded-lg bg-muted-foreground/50' />
          <div className='h-2 w-[80px] rounded-lg bg-muted-foreground/50' />
        </div>
        <div className='space-y-2 rounded-md p-2'>
          <div className='h-2 w-[60px] rounded-lg bg-muted-foreground/50' />
          <div className='h-2 w-[80px] rounded-lg bg-muted-foreground/50' />
        </div>
      </div>
      <div className='rounded-lg bg-muted'>
        <div className='space-y-2 rounded-lg p-2'>
          <div className='h-2 w-[60px] rounded-lg bg-muted-foreground/20' />
          <div className='h-2 w-[80px] rounded-lg bg-muted-foreground/20' />
        </div>
        <div className='space-y-2 rounded-lg p-2'>
          <div className='h-2 w-[60px] rounded-lg bg-muted-foreground/20' />
          <div className='h-2 w-[80px] rounded-lg bg-muted-foreground/20' />
        </div>
        <div className='space-y-2 rounded-lg p-2'>
          <div className='h-2 w-[60px] rounded-lg bg-muted-foreground/20' />
          <div className='h-2 w-[80px] rounded-lg bg-muted-foreground/20' />
        </div>
      </div>
    </div>
  );
}
