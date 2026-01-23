import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const ACCESS_SECRET = process.env.ACCESS_SECRET!;
const REFRESH_SECRET = process.env.REFRESH_SECRET!;

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // (Assume user validation is already done)

  const accessToken = jwt.sign(
    { email, role: "user" },
    ACCESS_SECRET,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { email },
    REFRESH_SECRET,
    { expiresIn: "7d" }
  );

  const res = NextResponse.json({ accessToken });

  // Store refresh token in HTTP-only cookie
  res.cookies.set("refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: true,
    path: "/",
  });

  return res;
}
