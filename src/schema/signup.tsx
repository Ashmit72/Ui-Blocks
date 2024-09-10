import * as z from "zod"

export const SignUpSchema = z.object({
    fullName: z.string().min(1,{
        message: "Full name cannot be empty"
    }),
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    })
})