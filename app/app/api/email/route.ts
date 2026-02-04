import { sendEmail } from "@/app/lib/email";
import { sendSuccess, sendError } from "@/lib/responseHandler";
import { ERROR_CODES } from "@/lib/errorCode";

export async function POST(req: Request) {
  try {
    const { to, subject, message } = await req.json();

    if (!to || !subject || !message) {
      return sendError(
        "Missing email fields",
        ERROR_CODES.VALIDATION_ERROR,
        400
      );
    }

    await sendEmail(to, subject, message);

    return sendSuccess(null, "Email sent successfully");
  } catch (error) {
    console.error(error);
    return sendError(
      "Failed to send email",
      ERROR_CODES.INTERNAL_ERROR,
      500,
      error
    );
  }
}
