'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Skeleton } from '../skeleton';
import { LogoutButton } from './logout-button';

interface UserNavProps {
  align?: 'center' | 'end' | 'start';
}

export default function UserNav({ align }: UserNavProps) {
  const { data: session, status } = useSession();

  if (status === 'loading')
    return <Skeleton className='h-8 w-8 rounded-full bg-muted-foreground/80' />;

  if (!session || !session.user) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
          <Avatar className='h-8 w-8'>
            <AvatarImage
              alt={session.user.name ?? 'avatar'}
              src={
                session.user.avatar ??
                'https://avatars.githubusercontent.com/u/104228?v=4'
              }
            />
            <AvatarFallback>
              <Skeleton className='h-8 w-8 rounded-full py-3' />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align={align} forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>
              {session.user.name}
            </p>
            <p className='text-xs leading-none text-muted-foreground'>
              {session.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={`/profile/${session.user.name}`}>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href='/dashboard'>
            <DropdownMenuItem>
              Dashboard
              <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href='/settings'>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
