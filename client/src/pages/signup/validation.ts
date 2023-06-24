import { z } from 'zod'

export const validationSchema = z.object({
    firstname: z
        .string()
        .min(1, { message: "Firstname is required" }),
    lastname: z
        .string()
        .min(1, { message: "Lastname is required" }),
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