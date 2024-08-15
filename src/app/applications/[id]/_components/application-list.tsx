'use client';

import { Avatar } from '@radix-ui/react-avatar';
import Link from 'next/link';

import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/cn';
import { Application } from '@/lib/db/types';
import { getRelativeTime } from '@/utils/time';

interface ApplicationListProps {
  items: Application[];
  selected: string;
}

export function ApplicationList({ items, selected }: ApplicationListProps) {
  return (
    <ScrollArea className='col-span-2 h-screen'>
      <div className=' flex flex-col gap-2 p-4 pt-0'>
        {items.map((item) => (
          <Link
            href={`/applications/${item.id}`}
            key={item.id}
            className={cn(
              'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent',
              {
                'bg-muted hover:bg-muted/70': selected === item.id,
              }
            )}
          >
            <div className='flex w-full flex-col gap-1'>
              <div className='flex items-center'>
                <div className='flex items-center space-x-2'>
                  <Avatar>
                    <AvatarImage
                      className='h-14 w-14 rounded-full object-cover object-center'
                      width={40}
                      src='https://avatars.githubusercontent.com/u/62437851?v=4'
                      alt={item.company}
                    />
                    <AvatarFallback>
                      <Skeleton className='h-14 w-14 rounded-full bg-background' />
                    </AvatarFallback>
                  </Avatar>
                  <div className=''>
                    <div className='flex items-center gap-2'>
                      <div className='font-semibold'>{item.title}</div>
                      <span
                        className={cn('flex h-2 w-2 rounded-full ', {
                          'bg-yellow-600': item.status === 'CLOSED',
                          'bg-red-600': item.status === 'REJECTED',
                          'bg-green-600': item.status === 'INTERVIEW',
                          'bg-muted-foreground/20': item.status === 'APPLIED',
                        })}
                      />
                    </div>
                    <div className='text-xs font-medium'>{item.location}</div>
                  </div>
                </div>

                <div className={cn('ml-auto text-xs')}>
                  {getRelativeTime(item.datePosted)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </ScrollArea>
  );
}
