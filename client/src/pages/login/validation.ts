import { z } from 'zod'

export const validationSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'Email is required.' })
        .email({
            message: `Invalid email address.`,
        }),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters long"),
})

export type ValidationSchema = z.infer<typeof validationSchema>