export const siteConfig = {
  name: 'Onyx',
  url: 'http://localhost:3000',
  ogImage: '',
  description:
    'Onyx is a Job Application Tracker made for job seekers to help them manage their job applications.',
  links: {
    twitter: 'https://www.linkedin.com/in/aminety/',
    github: 'https://github.com/amine-tayani/onyx',
    linkedin: 'https://www.linkedin.com/in/aminety/',
  },
};

export type SiteConfig = typeof siteConfig;

export const menuConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'FAQ',
      href: '/faq',
    },
    {
      title: 'Privacy Policy',
      href: '/privacy',
    },
  ],

  sidebarNav: [
    {
      title: 'Dashboard',
      href: '/dashboard',
      items: [
        {
          title: 'Analytics',
          href: '/dashboard/analytics',
          items: [],
        },
        {
          title: 'FAQ',
          href: '/dashboard/faq',
          items: [],
        },
      ],
    },

    {
      title: 'Settings',
      href: '/settings',
      items: [
        {
          title: 'General',
          href: '/settings',
          items: [],
        },
        {
          title: 'Account',
          href: '/settings/account',
          items: [],
        },
        {
          title: 'Preferences',
          href: '/settings/preferences',
          items: [],
        },
        {
          title: 'Notifications',
          href: '/settings/notifications',
          items: [],
        },
        {
          title: 'Security',
          href: '/settings/security',
          items: [],
        },
      ],
    },
  ],
};

export type MenuConfig = typeof menuConfig;
