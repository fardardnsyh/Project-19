import { z } from 'zod';

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const ApplicationSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  company: z.string(),
  location: z.string(),
  status: z.string(),
  datePosted: z.date(),
});

export type Application = z.infer<typeof ApplicationSchema>;
