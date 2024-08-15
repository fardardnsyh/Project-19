'use client';

import { SessionProvider } from 'next-auth/react';

interface Props {
  children: React.ReactNode;
}

export function NextAuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
