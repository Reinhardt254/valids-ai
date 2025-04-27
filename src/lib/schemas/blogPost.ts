import { z } from "zod";

export const blogPostSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title is too long"),
  content: z.string().min(1, "Content is required"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  image: z.string().optional(),
  // description: z
  //   .string()
  //   .min(1, "Description is required")
  //   .max(200, "Description is too long"),
});

export type BlogPostFormData = z.infer<typeof blogPostSchema>;
 