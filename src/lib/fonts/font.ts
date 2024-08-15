import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const satoshi = localFont({
  src: '../fonts/Satoshi-Variable.woff2',
  variable: '--font-satoshi',
  weight: '300 900',
  display: 'swap',
  style: 'normal',
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
