import { NextResponse } from 'next/server';
import VerifyUser from './app/lib/verifyUser';
export async function middleware(req) {
  const cookie = req.cookies.get('token')?.value;

  if (req.nextUrl.pathname.includes('/admin')) {
    if (cookie === undefined) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    const user = await VerifyUser(cookie);
    if (user.message === 'Anauthorized') {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
  }

  if (req.nextUrl.pathname.includes('/login')) {
    const user = await VerifyUser(cookie);
    if (user.message === 'Anauthorized') {
    } else {
      return NextResponse.redirect(new URL('/admin', req.url));
    }

    return NextResponse.next();
  }
}
