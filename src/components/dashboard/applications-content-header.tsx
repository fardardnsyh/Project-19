import { TableIcon } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/cn';

import { buttonVariants } from '../ui/button';
import { Icons } from '../ui/icons';
import { CreateAppButton } from './applications/create-application-button';

export function ApplicationsContentHeader() {
  return (
    <div className='mt-2 flex items-center justify-end'>
      <div className='flex items-center gap-x-4 '>
        <Link
          href='/dashboard'
          className={cn(
            buttonVariants({
              className: 'flex items-center text-muted-foreground',
            })
          )}
        >
          <Icons.gridIcon className='h-5 w-5' />
          <span className='ml-2 hidden md:inline'>Grid</span>
        </Link>
        <Link
          href='/dashboard?mode=table'
          className={cn(
            buttonVariants({
              className: 'flex items-center text-muted-foreground',
            })
          )}
        >
          <TableIcon strokeWidth={1} className='h-5 w-5' />
          <span className='ml-2 hidden md:inline'>Table</span>
        </Link>
        <CreateAppButton />
      </div>
    </div>
  );
}
