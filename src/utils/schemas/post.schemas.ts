import { z } from "zod";

export const PostSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  group_id: z.string().uuid().optional(),
  title: z.string().min(3).max(30),
  text: z.string().min(3).max(200),
  picture: z.instanceof(Blob).optional(),
  attachment: z.string().min(3).max(200).optional(),
  created_at: z.date(),
  type: z.number(),
});

export const LikeSchema = z.object({
  id: z.string().uuid(),
  post_id: z.string().uuid(),
  user_id: z.string().uuid(),
  created_at: z.date(),
});

export const EventSchema = z.object({
  post_id: z.string().uuid(),
  date: z.date(),
  lat: z.number().max(90).multipleOf(0.000001),
  lon: z.number().max(180).multipleOf(0.000001),
});

export const CommentSchema = z.object({
  id: z.string().uuid(),
  post_id: z.string().uuid(),
  user_id: z.string().uuid(),
  text: z.string().min(3).max(50),
  created_at: z.date(),
  picture: z.instanceof(Blob).optional(),
  attachment: z.string().min(3).max(200).optional(),
});
