import { z } from "zod";

export const ContactSchema = z.object({
  id: z.string().uuid(),
  converation_id: z.string().uuid(),
});

export const ConversationSchema = z.object({
  id: z.string().uuid(),
  is_group: z.boolean(),
  name: z.string().min(3).max(20).optional(),
});

export const InvitationSchema = z.object({
  id: z.string().uuid(),
  from_user_id: z.string().uuid(),
  to_user_id: z.string().uuid(),
});

export const MessageSchema = z.object({
  id: z.string().uuid(),
  conversaiton_id: z.string().uuid(),
  text: z.string().max(100),
  created_at: z.date(),
  send_by: z.string().uuid(),
  is_delivered: z.boolean(),
  picture: z.instanceof(Blob).optional(),
  attachment: z.string().min(3).max(200).optional(),
});
