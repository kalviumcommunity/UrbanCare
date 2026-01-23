import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const ACCESS_SECRET = process.env.ACCESS_SECRET!;
const REFRESH_SECRET = process.env.REFRESH_SECRET!;

export async function POST(req: Request) {
  const refreshToken = req.cookies.get("refreshToken")?.value;

  if (!refreshToken) {
    return NextResponse.json({ message: "No refresh token" }, { status: 401 });
  }

  try {
    const decoded: any = jwt.verify(refreshToken, REFRESH_SECRET);

    const newAccessToken = jwt.sign(
      { email: decoded.email, role: decoded.role },
      ACCESS_SECRET,
      { expiresIn: "15m" }
    );

    return NextResponse.json({ accessToken: newAccessToken });

  } catch {
    return NextResponse.json({ message: "Invalid refresh token" }, { status: 403 });
  }
}
