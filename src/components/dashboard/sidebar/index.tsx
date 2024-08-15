'use client';

import {
  LayoutDashboard,
  LineChart,
  MessageCircle,
  Settings,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { buttonVariants } from '@/components/ui/button';
import { SearchMenu } from '@/components/ui/search-menu';
import { cn } from '@/lib/cn';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {}

export function DashboardSidebar({ className, ...props }: SidebarNavProps) {
  const pathname = usePathname();
  const { data: session } = useSession();

  const items = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Analytics',
      href: '/dashboard/analytics',
      icon: LineChart,
    },
    {
      title: 'Profile',
      href: session && session.user ? `/profile/${session.user.name}` : '#',
      icon: User,
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: Settings,
    },

    {
      title: 'FAQ',
      href: '/dashboard/faq',
      icon: MessageCircle,
    },
  ];

  return (
    <aside className='hidden border-r border-muted px-2 lg:block'>
      <SearchMenu />
      <nav
        className={cn(
          'mt-8 flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2',
          className
        )}
        {...props}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({ variant: 'sidenav' }),
              pathname === item.href
                ? 'bg-muted text-primary hover:bg-muted hover:text-primary'
                : 'hover:bg-muted hover:text-primary',
              'group justify-start gap-x-2'
            )}
          >
            <item.icon
              strokeWidth={1.5}
              className={cn(
                pathname === item.href
                  ? 'text-primary group-hover:text-primary'
                  : 'text-muted-foreground/80 group-hover:text-primary',
                'h-5 w-5 transition-all duration-300 ease-in-out'
              )}
            />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
