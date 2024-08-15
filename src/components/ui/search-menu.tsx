'use client';

import { DialogProps } from '@radix-ui/react-alert-dialog';
import { CircleIcon, FileIcon, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { menuConfig } from '@/config/site';
import { cn } from '@/lib/cn';

export function SearchMenu({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        className={cn(
          'group/search relative h-10 w-full justify-start rounded-lg border-[0.12rem] border-muted-foreground/10 bg-transparent text-sm font-normal text-muted-foreground shadow-none hover:bg-muted sm:pr-12 md:w-40 lg:w-52'
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <div className='pointer-events-none absolute left-3 top-[0.55rem] hidden h-5 select-none items-center opacity-100 sm:flex'>
          <Search className='h-4 w-4' />
        </div>
        <span className='ml-6 hidden lg:inline-flex'>Search</span>
        <span className='inline-flex lg:hidden'>Search</span>
        <kbd className='pointer-events-none absolute right-8 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 group-hover/search:bg-muted-foreground/20 sm:flex'>
          ⌘
        </kbd>
        <kbd className='pointer-events-none absolute right-[0.3rem] top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 group-hover/search:bg-muted-foreground/20 sm:flex'>
          K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Links'>
            {menuConfig.mainNav.map((navItem) => (
              <CommandItem
                key={navItem.href}
                value={navItem.title}
                onSelect={() => {
                  runCommand(() => router.push(navItem.href as string));
                }}
              >
                <FileIcon className='mr-2 h-4 w-4' />
                {navItem.title}
              </CommandItem>
            ))}
          </CommandGroup>
          {menuConfig.sidebarNav.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((navItem) => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => router.push(navItem.href as string));
                  }}
                >
                  <div className='mr-2 flex h-4 w-4 items-center justify-center'>
                    <CircleIcon className='h-3 w-3' />
                  </div>
                  {navItem.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
}
