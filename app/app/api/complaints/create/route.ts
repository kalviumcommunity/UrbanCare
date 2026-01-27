// import { NextResponse } from "next/server";
// // import { sanitizeInput } from "@/src/utils/sanitize";
// // import prisma from "@/lib/prisma"; // or your DB connection

// export async function POST(req: Request) {
//   const body = await req.json();

//   // Sanitize user inputs
//   // const cleanTitle = sanitizeInput(body.title);
//   // const cleanDescription = sanitizeInput(body.description);

//   // // Save only clean data
//   // await prisma.complaint.create({
//   //   data: {
//   //     title: cleanTitle,
//   //     description: cleanDescription,
//   //   },
//   // });

//   return NextResponse.json({ message: "Complaint submitted safely!" });
// }
