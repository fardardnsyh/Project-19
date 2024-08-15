import './globals.css';

import type { Metadata } from 'next';

import { NextAuthProvider } from '@/components/auth/providers';
import { Toaster } from '@/components/toast/toaster';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/cn';
import { inter } from '@/lib/fonts/font';
// import '@uploadthing/react/styles.css';

export const metadata: Metadata = {
  title: 'Onyx - Manage your job applications',
  description: `${siteConfig.description}`,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={cn('antialiased', inter.className)}>
      <body>
        <Toaster />
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
