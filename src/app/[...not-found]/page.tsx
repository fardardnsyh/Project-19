import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { EmptyPlaceholder } from '@/components/ui/empty-placeholder';

export default function NotFound() {
  return (
    <EmptyPlaceholder className='my-4 '>
      <EmptyPlaceholder.Title>404 Not Found</EmptyPlaceholder.Title>
      <EmptyPlaceholder.Description>
        We couldn&#39;t find the page that you&#39;re looking for!
      </EmptyPlaceholder.Description>
      <div className='flex flex-col items-center justify-center gap-2 md:flex-row'>
        <Link href='/dashboard'>
          <Button variant='secondary' className='w-full items-center gap-2 '>
            Go Back
          </Button>
        </Link>
      </div>
    </EmptyPlaceholder>
  );
}
