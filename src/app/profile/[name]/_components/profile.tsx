'use client';

import { CalendarDays, LinkIcon, MapPinIcon, Pencil } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/cn';
import { UserProfileProps } from '@/types/user';
import { getRelativeTime } from '@/utils/time';

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <div className='mx-auto max-w-4xl flex-1 space-y-4 rounded-xl bg-[#0E0E0E] p-2'>
      <Card className='rounded-xl bg-transparent'>
        <div
          className='w-full rounded-t-xl bg-cover bg-center bg-no-repeat'
          style={{
            height: '200px',
            backgroundImage: user.banner
              ? `url(${user.banner})`
              : 'url(https://pbs.twimg.com/profile_banners/1603463890272194582/1714062352/1500x500)',
          }}
        />
        <CardHeader>
          <div className='-mt-16 flex items-center justify-between space-y-2'>
            <div className='flex items-center space-x-4'>
              <Avatar className='ring-4 ring-[#0E0E0E] ring-offset-4 ring-offset-[#0E0E0E]'>
                <AvatarImage
                  className='h-12 w-12 md:h-16 md:w-16  lg:h-20 lg:w-20'
                  src={
                    user.avatar ||
                    'https://avatars.githubusercontent.com/u/104228?v=4'
                  }
                  alt={user.name || 'User Avatar'}
                />
                <AvatarFallback>
                  <Skeleton className='h-20 w-20 rounded-full' />
                </AvatarFallback>
              </Avatar>
            </div>
            <div className='flex flex-col space-y-4'>
              <Link
                href='/settings/'
                className={cn(
                  buttonVariants(),
                  'flex items-center justify-center text-sm font-medium text-neutral-300 outline-none ring-4 ring-[#0E0E0E] ring-offset-4 ring-offset-[#0E0E0E] hover:text-primary focus-visible:ring-inset'
                )}
              >
                <Pencil className='h-5 w-5 md:mr-2' />
                <span className='hidden md:block'>Edit Profile</span>
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardContent className='mt-4 flex flex-col'>
          <section className='flex flex-col space-y-4'>
            <div>
              <h1 className='text-xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl'>
                {user.name}
              </h1>
              <span className='text-sm text-muted-foreground/90 lg:text-lg'>
                {user.email}
              </span>
            </div>

            <p className='text-sm text-muted-foreground/90'>
              {user.bio || 'your bio goes here.'}
            </p>
            <div className='flex space-x-3'>
              <div className='flex items-center'>
                <MapPinIcon className='h-5 w-5 text-muted-foreground/90 md:mr-1' />
                <span className='hidden text-sm text-muted-foreground/90 md:block'>
                  {user.location || 'Casablanca, Morocco'}
                </span>
              </div>

              <div className='flex items-center'>
                <LinkIcon className='h-5 w-5 text-muted-foreground/90 md:mr-1' />
                <span className='hidden text-sm text-muted-foreground/90 md:block'>
                  {/* here render user social media links */}
                  {user.location || 'amine-tayani.vercel.app'}
                </span>
              </div>

              <div className='flex items-center'>
                <CalendarDays className='h-5 w-5 text-muted-foreground/90 md:mr-1' />
                <span className='hidden text-sm text-muted-foreground/90 md:block'>
                  Joined {getRelativeTime(user.createdAt)}
                </span>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
