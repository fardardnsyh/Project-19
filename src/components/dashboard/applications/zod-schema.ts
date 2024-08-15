import * as z from 'zod';

export const createOrUpdateApplicationSchema = z.object({
  title: z.string({ required_error: 'Please type a title.' }),
  company: z.string({ required_error: 'Please type a company name.' }),
  description: z
    .string({ required_error: 'Please type the job description.' })
    .min(200, { message: 'Must be longer than 200 characters' })
    .max(2000, {
      message: 'Must be shorter than 2000 characters',
    }),
  status: z
    .enum(['APPLIED', 'INTERVIEW', 'REJECTED', 'OFFER', 'CLOSED'], {
      required_error: 'choose a status',
    })
    .default('APPLIED'),
  location: z.string({ required_error: 'Please enter the location' }),
  Url: z
    .string({ required_error: 'Please enter URL.' })
    .url({ message: 'Please enter a valid URL' }),
  datePosted: z.date({
    required_error: 'Date field is required.',
  }),
});

export type CreateOrUpdateApplicationSchema = z.infer<
  typeof createOrUpdateApplicationSchema
>;
