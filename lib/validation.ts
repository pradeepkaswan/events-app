import * as z from 'zod'

export const eventFormSchema = z.object({
  title: z.string().min(3, { message: 'Title must be at least 3 characters' }),
  description: z
    .string()
    .min(3, { message: 'Description must be at least 3 characters' })
    .max(400, { message: 'Description must be at most 400 characters' }),
  venue: z
    .string()
    .min(3, { message: 'Venue must be at least 3 characters' })
    .max(400, { message: 'Venue must be at most 400 characters' }),
  imageUrl: z.string().url({ message: 'Image URL must be a valid URL' }),
  startDate: z.date(),
  endDate: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url({ message: 'URL must be a valid URL' }),
})
