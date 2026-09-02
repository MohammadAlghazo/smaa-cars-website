import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check for auth cookie
  const authCookie = request.cookies.get('smaa_admin_auth');
  const isAuth = authCookie?.value === 'authenticated';

  const isLoginPage = request.nextUrl.pathname.startsWith('/login');
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');

  // If user is accessing an admin route and is not authenticated, redirect to login
  if (isAdminRoute && !isAuth) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If user is accessing login page and is ALREADY authenticated, redirect to admin
  if (isLoginPage && isAuth) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};
