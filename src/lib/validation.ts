import { z } from 'zod'

export const updateProduct = z.object({
    name: z.string()
        .min(0, { message: "The name must be 0 characters or more" })
        .max(30, { message: "The name must be 30 characters or less" }),
    description: z.string()
        .max(200)
        .optional(),
    price: z.coerce.number().gte(0, 'Must be 0 and above')
})