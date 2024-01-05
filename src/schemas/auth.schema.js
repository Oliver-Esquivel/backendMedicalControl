import {  z } from "zod";

export const  registerSchema = z.object({
    username: z.string({
        required_error: "username is require"
    }), 
    email : z.string({
        message: "invalid email"
    }),
    password : z.string({
        required_error: "password is required"
    }).min(6, {
        message: "password must be at least 6 characters"
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required",
    }).email({
        message: "invalid email"
    }),
    password:  z.string({
        required_error: "password is required"
    }).min(6, {
        message: "password must be at least 6 characters"
    })
})