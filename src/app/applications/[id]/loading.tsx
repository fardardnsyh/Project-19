import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div>
      <div className='mx-4 mt-4 flex flex-col gap-6'>
        <div className='flex items-center space-x-4'>
          <Skeleton className='h-14 w-14 rounded-full bg-muted' />
          <div>
            <Skeleton className=' h-5 w-32 bg-muted' />
            <Skeleton className='mt-2 h-5 w-20 bg-muted' />
            <Skeleton className='mt-2 h-5 w-20 bg-muted' />
          </div>
        </div>
        <div>
          <Skeleton className='h-40 w-full bg-muted' />
        </div>
      </div>
    </div>
  );
}
