'use client';

import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { NavLink } from '@/components/ui/navigation/nav-link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className='mx-auto mb-24 mt-36 max-w-4xl px-8 text-[14px]'>
      <div className='space-y-8 sm:flex sm:space-y-0'>
        <div className='grid flex-1 grid-cols-2 gap-8 sm:flex sm:flex-col'>
          <Link className='flex items-center gap-x-2' href='/'>
            <Icons.logo className='h-10 w-10' />
            <span className='font-display text-lg font-extrabold text-primary'>
              Onyx
            </span>
          </Link>
          <div className='flex flex-1 space-x-4 sm:items-end'>
            <Link target='_blank' href={`${siteConfig.links.linkedin}`}>
              <Icons.linkedin className='h-6 w-6 text-muted-foreground hover:text-primary' />
            </Link>
            <div className='h-4 w-px bg-muted-foreground/30' />
            <Link target='_blank' href={`${siteConfig.links.github}`}>
              <Icons.gitHub className='h-6 w-6 text-muted-foreground hover:text-primary' />
            </Link>
            <div className='h-4 w-px bg-muted-foreground/30' />
            <Link target='_blank' href={`${siteConfig.links.twitter}`}>
              <Icons.x className='h-5 w-5 text-muted-foreground hover:text-primary' />
            </Link>
          </div>
        </div>
        <div className='grid flex-1 grid-cols-2 gap-8'>
          <div className='mt-4 flex flex-col space-y-3.5'>
            <NavLink slug='Product' href='/product' />
            <NavLink slug='Features' href='/features' />
            <NavLink slug='Docs' href='/docs' />
            <NavLink slug='Pricing' href='/pricing' />
            <NavLink slug='Customers' href='/customers' />
          </div>
          <div className='mt-4 flex flex-col space-y-3.5'>
            <NavLink slug='Blog' href='/blog' />
            <NavLink slug='FAQs' href='/faq' />
            <NavLink slug='Community' href='/community' />
            <NavLink slug='Changelog' href='/changelog' />
            <NavLink slug='Contact Us' href='/contact' />
          </div>
        </div>
      </div>
      <div className='mt-16 flex items-center border-t border-muted-foreground/20 pt-16'>
        <div className=' text-center text-[14px] text-muted-foreground sm:block'>
          © 2023 Onyx, Inc.
        </div>
        <div className='flex flex-1 items-center justify-end space-x-1 text-muted-foreground'>
          <Button variant='ghost' className='rounded-full px-3 py-1'>
            <Sun className='h-5 w-5' />
          </Button>
          <Button
            variant='ghost'
            className='rounded-full bg-primary px-3 py-1 text-muted'
          >
            <Moon className='h-5 w-5' />
          </Button>
        </div>
      </div>
    </footer>
  );
}
