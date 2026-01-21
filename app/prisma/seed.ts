import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create Department
  const sanitation = await prisma.department.upsert({
    where: { name: "Sanitation" },
    update: {},
    create: { name: "Sanitation" },
  });

  // Create Citizen
  const citizen = await prisma.user.upsert({
    where: { email: "citizen@demo.com" },
    update: {},
    create: {
      name: "Citizen Demo",
      email: "citizen@demo.com",
      password: "hashed_password",
      role: "CITIZEN",
    },
  });

  // Create Official
  const official = await prisma.user.upsert({
    where: { email: "official@demo.com" },
    update: {},
    create: {
      name: "Official Demo",
      email: "official@demo.com",
      password: "hashed_password",
      role: "OFFICIAL",
      departmentId: sanitation.id,
    },
  });

  // Create Complaint
  const complaint = await prisma.complaint.upsert({
    where: { complaintId: "UC-2026-0001" },
    update: {},
    create: {
      complaintId: "UC-2026-0001",
      title: "Garbage not collected",
      description: "Garbage is overflowing near my street.",
      category: "Sanitation",
      citizenId: citizen.id,
      officialId: official.id,
      departmentId: sanitation.id,
      status: "ASSIGNED",
    },
  });

  // Create Status Log
  await prisma.complaintStatusLog.create({
    data: {
      complaintId: complaint.id,
      oldStatus: "SUBMITTED",
      newStatus: "ASSIGNED",
      comment: "Assigned to sanitation department",
      updatedById: official.id,
    },
  });

  // Create Feedback (optional)
  await prisma.feedback.upsert({
    where: { complaintId: complaint.id },
    update: {},
    create: {
      complaintId: complaint.id,
      citizenId: citizen.id,
      rating: 5,
      message: "Resolved quickly. Good service.",
    },
  });

  console.log("✅ Seed data inserted successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
