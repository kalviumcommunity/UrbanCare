import { PrismaClient } from "@prisma/client";
import { sendSuccess, sendError } from "@/lib/responseHandler";
import { ERROR_CODES } from "@/lib/errorCode";

const prisma = new PrismaClient();

/**
 * GET /api/complaints
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  const complaints = await prisma.complaint.findMany({
    skip: (page - 1) * limit,
    take: limit,
    orderBy: { createdAt: "desc" },
  });

  return sendSuccess(
    { page, limit, complaints },
    "Complaints fetched successfully"
  );
}

/**
 * POST /api/complaints
 */
export async function POST(req: Request) {
  try {
    const { title, description, category, citizenId, mediaUrls } =
      await req.json();

    if (!title || !description || !category || !citizenId) {
      return sendError(
        "Missing required fields",
        ERROR_CODES.VALIDATION_ERROR,
        400
      );
    }

    const complaint = await prisma.$transaction(async (tx) => {
      const created = await tx.complaint.create({
        data: {
          complaintId: `UC-${Date.now()}`,
          title,
          description,
          category,
          citizenId,
          status: "SUBMITTED",
        },
      });

      await tx.complaintStatusLog.create({
        data: {
          complaintId: created.id,
          newStatus: "SUBMITTED",
          updatedById: citizenId,
          comment: "Complaint submitted",
        },
      });

      if (Array.isArray(mediaUrls) && mediaUrls.length > 0) {
        await tx.complaintMedia.createMany({
          data: mediaUrls.map((url: string) => ({
            complaintId: created.id,
            url,
            uploadedBy: citizenId,
          })),
        });
      }

      return created;
    });

    return sendSuccess(
      complaint,
      "Complaint created successfully",
      201
    );
  } catch (err) {
    return sendError(
      "Failed to create complaint",
      ERROR_CODES.DATABASE_ERROR,
      500,
      err
    );
  }
}
