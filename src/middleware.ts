import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = cookies().get("next-auth.session-token");
  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }
  NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
