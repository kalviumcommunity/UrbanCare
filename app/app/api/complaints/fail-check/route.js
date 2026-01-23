import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description, category, citizenId } = body;

    const result = await prisma.$transaction(async (tx) => {
      const complaint = await tx.complaint.create({
        data: {
          complaintId: `UC-${Date.now()}`,
          title,
          description,
          category,
          citizenId,
          status: "SUBMITTED",
        },
      });

      // Force an error: create feedback with invalid complaintId
      // This will fail and rollback complaint creation
      await tx.feedback.create({
        data: {
          complaintId: "INVALID_ID",
          citizenId,
          rating: 5,
          message: "This will fail",
        },
      });

      return complaint;
    });

    return NextResponse.json({ complaint: result }, { status: 201 });
  } catch (error) {
    console.error("❌ Rollback confirmed. Transaction failed:", error);
    return NextResponse.json(
      { message: "Rollback success: no partial data inserted" },
      { status: 500 }
    );
  }
}
