import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendSuccess, sendError } from "@/lib/responseHandler";
import { ERROR_CODES } from "@/lib/errorCode";

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return sendError(
        "Email and password are required",
        ERROR_CODES.VALIDATION_ERROR,
        400
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return sendError(
        "User not found",
        ERROR_CODES.NOT_FOUND,
        404
      );
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return sendError(
        "Invalid credentials",
        ERROR_CODES.AUTH_ERROR,
        401
      );
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return sendSuccess(
      { token },
      "Login successful",
      200
    );
  } catch (error) {
    console.error("Login error:", error);
    return sendError(
      "Login failed",
      ERROR_CODES.INTERNAL_ERROR,
      500,
      error
    );
  }
}
