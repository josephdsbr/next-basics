// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest, NextFetchEvent } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest, ev: NextFetchEvent) {
  if ( request.nextUrl.pathname.startsWith('/blog')) {
      return NextResponse.redirect(new URL('http://localhost:3000/'), request.url)
  }
  
  return NextResponse.next();
}