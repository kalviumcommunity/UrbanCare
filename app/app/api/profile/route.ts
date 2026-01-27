// import jwt from "jsonwebtoken";
// import { NextResponse } from "next/server";

// const ACCESS_SECRET = process.env.ACCESS_SECRET!;

// export async function GET(req: Request) {
//   const authHeader = req.headers.get("authorization");
//   const token = authHeader?.split(" ")[1];

//   if (!token) return NextResponse.json({ message: "No token" }, { status: 401 });

//   try {
//     jwt.verify(token, ACCESS_SECRET);
//     return NextResponse.json({ message: "Profile data success" });
//   } catch {
//     return NextResponse.json({ message: "Access token expired" }, { status: 401 });
//   }
// }
