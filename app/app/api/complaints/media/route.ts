import { PrismaClient } from "@prisma/client";
import { sendSuccess, sendError } from "@/lib/responseHandler";
import { ERROR_CODES } from "@/lib/errorCode";

const prisma = new PrismaClient();

/**
 * POST /api/complaints/media
 */
export async function POST(req: Request) {
  try {
    const { complaintId, fileURL, uploadedBy } = await req.json();

    if (!complaintId || !fileURL) {
      return sendError(
        "Missing required fields",
        ERROR_CODES.VALIDATION_ERROR,
        400
      );
    }

    const media = await prisma.complaintMedia.create({
      data: {
        complaintId,
        url: fileURL,
        type: "IMAGE",
        uploadedBy,
      },
    });

    return sendSuccess(media, "Media attached to complaint", 201);
  } catch (error) {
    return sendError(
      "Failed to save complaint media",
      ERROR_CODES.DATABASE_ERROR,
      500,
      error
    );
  }
}
