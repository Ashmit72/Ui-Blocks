import * as z from "zod"

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    }),
    confirmPassword: z.string().min(6, {
        message: "Passwor must be at least 6 characters long"
    })
}).superRefine(({password, confirmPassword}, ctx) => {
    if(confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
            path: ['confirmPassword']
        })
    }
})