import { NextResponse } from "next/server";
import { logger } from "./logger";

export function handleError(error: any, context: string) {
  const isProd = process.env.NODE_ENV === "production";

  // Log full error internally
  logger.error(`Error in ${context}`, {
    message: error.message,
    stack: isProd ? "REDACTED" : error.stack,
  });

  // Send safe response to user
  return NextResponse.json(
    {
      success: false,
      message: isProd
        ? "Something went wrong. Please try again later."
        : error.message,
      ...(isProd ? {} : { stack: error.stack }),
    },
    { status: 500 }
  );
}
