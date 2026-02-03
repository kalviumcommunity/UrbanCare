import { NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3 from "@/lib/s3";
import { sendSuccess, sendError } from "@/lib/responseHandler";
import { ERROR_CODES } from "@/lib/errorCode";

export async function POST(req: Request) {
  try {
    const { fileName, fileType } = await req.json();

    // 🔒 Validation
    if (!fileType.startsWith("image/")) {
      return sendError(
        "Only image uploads are allowed",
        ERROR_CODES.VALIDATION_ERROR,
        400
      );
    }

    const key = `complaints/${Date.now()}-${fileName}`;

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: key,
      ContentType: fileType,
    });

    const uploadURL = await getSignedUrl(s3, command, {
      expiresIn: 60, // 1 minute
    });

    return sendSuccess(
      {
        uploadURL,
        fileURL: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`,
      },
      "Pre-signed URL generated"
    );
  } catch (error) {
    return sendError(
      "Failed to generate upload URL",
      ERROR_CODES.INTERNAL_ERROR,
      500,
      error
    );
  }
}
