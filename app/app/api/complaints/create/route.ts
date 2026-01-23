import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { title, description, category, citizenId, mediaUrls } = body;

    if (!title || !description || !category || !citizenId) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = await prisma.$transaction(async (tx) => {
      // 1) Create complaint
      const complaint = await tx.complaint.create({
        data: {
          complaintId: `UC-${Date.now()}`, // simple unique ID
          title,
          description,
          category,
          citizenId,
          status: "SUBMITTED",
        },
      });

      // 2) Create initial status log
      await tx.complaintStatusLog.create({
        data: {
          complaintId: complaint.id,
          newStatus: "SUBMITTED",
          comment: "Complaint submitted by citizen",
          updatedById: citizenId,
        },
      });

      // 3) Insert media proof if any
      if (Array.isArray(mediaUrls) && mediaUrls.length > 0) {
        await tx.complaintMedia.createMany({
          data: mediaUrls.map((url: string) => ({
            complaintId: complaint.id,
            url,
            type: "IMAGE",
            uploadedBy: citizenId,
          })),
        });
      }

      return complaint;
    });

    return NextResponse.json(
      { message: "Complaint created successfully", complaint: result },
      { status: 201 }
    );
  }   catch (error: any) {
    console.error("❌ Transaction failed. Rolling back.", error);

    return NextResponse.json(
      {
        message: "Failed to create complaint",
        error: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }

}


