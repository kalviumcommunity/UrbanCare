import { z } from "zod";

export const createComplaintSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(3, "Category is required"),
  citizenId: z.string().uuid("Invalid citizenId"),
  mediaUrls: z.array(z.string().url()).optional(),
});

export type CreateComplaintInput = z.infer<typeof createComplaintSchema>;
