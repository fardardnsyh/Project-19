'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/cn';

export function NavLink({ href, slug }: { href: string; slug: string }) {
  const pathname = usePathname();
  return (
    <Link href={href}>
      <div
        className={cn(
          'text-muted-foreground transition-colors hover:text-foreground',
          {
            '!text-foreground': pathname === href,
          }
        )}
      >
        {slug}
      </div>
    </Link>
  );
}
