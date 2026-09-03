import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyAdminToken } from '@/lib/jwt';

export async function middleware(request: NextRequest) {
  const isLoginPage = request.nextUrl.pathname.startsWith('/login');
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');

  if (!isAdminRoute && !isLoginPage) {
    return NextResponse.next();
  }

  const token = request.cookies.get('smaa_admin_auth')?.value;

  let isAuthenticated = false;

  if (token) {
    try {
      await verifyAdminToken(token);
      isAuthenticated = true;
    } catch {
      // Token is invalid or expired - clear it below
      isAuthenticated = false;
    }
  }

  // Accessing admin without valid token → redirect to login and clear bad cookie
  if (isAdminRoute && !isAuthenticated) {
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('smaa_admin_auth');
    return response;
  }

  // Accessing login while already authenticated → redirect to admin
  if (isLoginPage && isAuthenticated) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};
