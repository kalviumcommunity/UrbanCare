import { sendSuccess } from "@/lib/responseHandler";

export async function GET() {
  return sendSuccess(
    { status: "UP" },
    "Service is healthy"
  );
}
