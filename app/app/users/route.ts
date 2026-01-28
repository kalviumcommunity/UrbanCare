import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const res = NextResponse.json({ message: "CORS Configured Securely" });

  res.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  return res;
}
