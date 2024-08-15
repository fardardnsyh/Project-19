'use client';

export function DarkDisplay() {
  return (
    <div className='space-y-2 rounded-lg border-2 p-2'>
      <div className='space-y-2 rounded-lg bg-muted p-2 shadow-sm'>
        <div className='h-2 w-[80px] rounded-lg bg-muted-foreground/20' />
        <div className='h-2 w-[100px] rounded-lg bg-muted-foreground/20' />
      </div>
      <div className='flex items-center space-x-2 rounded-lg bg-muted p-2 shadow-sm'>
        <div className='h-4 w-4 rounded-full bg-muted-foreground/20' />
        <div className='h-2 w-[100px] rounded-lg bg-muted-foreground/20' />
      </div>
      <div className='flex items-center space-x-2 rounded-lg bg-muted p-2 shadow-sm'>
        <div className='h-4 w-4 rounded-full bg-muted-foreground/20' />
        <div className='h-2 w-[100px] rounded-lg bg-muted-foreground/20' />
      </div>
    </div>
  );
}
