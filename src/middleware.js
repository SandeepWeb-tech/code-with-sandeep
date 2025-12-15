import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const middleware = (req) => {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET || "abcdefghijklm");
    return NextResponse.next();
  } catch (err) {
    const response = NextResponse.redirect(new URL("/login", req.url));
    response.cookies.delete("token");
    return response;
  }
}

export const config = {
  matcher: ["/", "/dashboard/:path*"], // protect these routes
};

export default middleware;