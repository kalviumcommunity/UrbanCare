import jwt from "jsonwebtoken";
import { sendSuccess, sendError } from "@/lib/responseHandler";
import { ERROR_CODES } from "@/lib/errorCode";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return sendError("Token missing", ERROR_CODES.VALIDATION_ERROR, 401);
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    return sendSuccess(decoded, "Protected route accessed");
  } catch {
    return sendError("Invalid or expired token", ERROR_CODES.UNAUTHORIZED, 403);
  }
}

