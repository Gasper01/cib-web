import { NextResponse } from "next/server";
import { VerifyUser } from "./lib/VerifyUser";

export async function middleware(req) {
  const cookie = req.cookies.get("token")?.value;
  const token = await VerifyUser(cookie);

  if (req.nextUrl && req.nextUrl.pathname.includes("/admin")) {
    if (
      token.message === "No token provided" ||
      token.message === "Anauthorized" ||
      token.message === "User not verified"
    ) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  }
  if (req.nextUrl && req.nextUrl.pathname.includes("/login")) {
    if (
      token.message === "No token provided" ||
      token.message === "Anauthorized" ||
      token.message === "User not verified"
    ) {
    } else {
      return NextResponse.redirect(new URL("/admin", req.url));
    }

    return NextResponse.next();
  }
}
