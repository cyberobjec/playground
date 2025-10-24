import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(), // ← 确保这里是 z.date()
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { posts };
