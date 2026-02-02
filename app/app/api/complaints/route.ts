import { prisma } from "@/lib/prisma";
import redis from "@/lib/redis";
import { sendSuccess, sendError } from "@/lib/responseHandler";
import { ERROR_CODES } from "@/lib/errorCode";

/**
 * GET /api/complaints (Cached)
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    const cacheKey = `complaints:list:page=${page}:limit=${limit}`;

    // 1️⃣ Check Redis
    const cached = await redis.get(cacheKey);
    if (cached) {
      console.log("⚡ Cache HIT:", cacheKey);
      return sendSuccess(
        JSON.parse(cached),
        "Complaints fetched from cache"
      );
    }

    console.log("🐢 Cache MISS - Fetching from DB");

    // 2️⃣ Fetch from DB
    const complaints = await prisma.complaint.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: "desc" },
    });

    const response = { page, limit, complaints };

    // 3️⃣ Store in cache (TTL 60s)
    await redis.set(cacheKey, JSON.stringify(response), "EX", 60);

    return sendSuccess(response, "Complaints fetched successfully");
  } catch (error) {
    console.error("❌ GET /api/complaints error:", error);

    return sendError(
      "Failed to fetch complaints",
      ERROR_CODES.INTERNAL_ERROR,
      500,
      error instanceof Error ? error.message : error
    );
  }
}
