import { NextResponse } from "next/server";
// import bcrypt from "bcrypt";
// import { prisma } from "@/app/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "All fields required" },
        { status: 400 }
      );
    }

    // const existingUser = await prisma.user.findUnique({
    //   where: { email },
    // });

    // if (existingUser) {
    //   return NextResponse.json(
    //     { success: false, message: "User already exists" },
    //     { status: 400 }
    //   );
    // }

    // const hashedPassword = await bcrypt.hash(password, 10);

    // await prisma.user.create({
    //   data: { name, email, password: hashedPassword },
    // });

    return NextResponse.json({
      success: true,
      message: "Signup successful",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Signup failed" },
      { status: 500 }
    );
  }
}
