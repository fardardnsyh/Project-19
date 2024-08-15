import * as z from 'zod';

export const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: 'name must be at least 2 characters.',
  }),
  email: z
    .string({
      required_error: 'Please type an email.',
    })
    .email(),
  bio: z
    .string()
    .max(160, {
      message: 'Bio is too long, 160 characters max.',
    })
    .optional(),
  experience: z.coerce.number().int().positive().min(0).max(30).optional(),
  location: z.string().optional(),
  skills: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
    })
  ),
  links: z
    .array(
      z.object({
        url: z.string().url().or(z.literal('')),
      })
    )
    .optional(),
  avatar: z.any().optional(),
  banner: z.any().optional(),
});

export type ProfileFormSchema = z.infer<typeof profileFormSchema>;
