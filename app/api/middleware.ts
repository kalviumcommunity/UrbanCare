// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import jwt from {jsonwebtoken} ;

// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;

//   if (pathname.startsWith("/api/admin") || pathname.startsWith("/api/users")) {

//     const authHeader = req.headers.get("authorization");
//     const token = authHeader?.split(" ")[1];

//     if (!token) {
//       return NextResponse.json({ message: "Token missing" }, { status: 401 });
//     }

//     try {
//       const decoded: any = jwt.verify(token, JWT_SECRET);

//       // Admin only rule
//       if (pathname.startsWith("/api/admin") && decoded.role !== "admin") {
//         return NextResponse.json({ message: "Access denied" }, { status: 403 });
//       }

//       // Allow request to continue
//       return NextResponse.next();

//     } catch {
//       return NextResponse.json({ message: "Invalid token" }, { status: 403 });
//     }
//   }

//   return NextResponse.next();
// }
