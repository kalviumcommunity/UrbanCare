import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { sendSuccess, sendError } from "@/lib/responseHandler";
import { ERROR_CODES } from "@/lib/errorCode";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Validate fields
    if (!name || !email || !password) {
      return sendError(
        "All fields are required",
        ERROR_CODES.VALIDATION_ERROR,
        400
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return sendError(
        "User already exists",
        ERROR_CODES.VALIDATION_ERROR,
        400
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return sendSuccess(
      { id: user.id, email: user.email },
      "Signup successful",
      201
    );
  } catch (error) {
    console.error("Signup error:", error);
    return sendError(
      "Signup failed",
      ERROR_CODES.INTERNAL_ERROR,
      500,
      error
    );
  }
}
