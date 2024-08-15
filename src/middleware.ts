import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = await getToken({
    req,
  });

  if (
    !token &&
    pathname !== '/login' &&
    pathname !== '/signup' &&
    pathname !== '/'
  ) {
    return NextResponse.redirect(new URL('/login', req.url));
  } else if (token) {
    if (pathname === '/login' || pathname === '/register') {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
  }
}

export const config = {
  matcher: [
    '/user/:path*',
    '/settings/:path*',
    '/dashboard/:path',
    '/profile/:path',
  ],
};
