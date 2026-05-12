import { NextResponse } from "next/server";

import type { NextRequest } from "next/server"; // <--- Ensure this says 'next/server'

export function middleware(request: NextRequest) {
  // 1. Get the session (Supabase usually stores it in a cookie)

  // Check your cookie name, often it starts with 'sb-'

  //   const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");

  //   const isLogin = request.nextUrl.pathname === "/admin/login";

  //   if (!isAdminRoute || isLogin) {
  //     return NextResponse.next();
  //   }

  //   const session =
  //     request.cookies.get("sb-access-token") ||
  //     request.cookies.get("sb-refresh-token");

  //   const { pathname } = request.nextUrl;

  // 2. The Logic

  //   if (!session) {
  //     // If the user is trying to access ANY admin page but NOT the login page

  //     // if (pathname.startsWith("/admin") && pathname !== "/admin/login") {

  //     const loginUrl = new URL("/admin/login", request.url);

  //     return NextResponse.redirect(loginUrl);

  //     // }
  //   }

  return NextResponse.next();
}

// 3. The Matcher (Crucial to prevent 'Invalid URL' on static files)

// export const config = {
//   matcher: ["/admin/:path*"], // Only runs middleware on admin routes
// };
