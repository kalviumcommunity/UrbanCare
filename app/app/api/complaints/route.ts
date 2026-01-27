import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * GET /api/complaints
 * Fetch all complaints (pagination ready)
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

  return NextResponse.json({ page, limit, complaints });
}

/**
 * POST /api/complaints
 * Create a new complaint (transactional)
 */
export async function POST(req: Request) {
  try {
    const { title, description, category, citizenId, mediaUrls } =
      await req.json();

    if (!title || !description || !category || !citizenId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
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

    return NextResponse.json(
      { message: "Complaint created successfully", complaint },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to create complaint" },
      { status: 500 }
    );
  }
}
