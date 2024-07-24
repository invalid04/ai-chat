import { createEnv } from "@t3-oss/env-nextjs";
import { z } from 'zod'

export const env = createEnv({
    server: {
        GOOGLE_GEMINI_KEY: z.string().min(1),
    },
    client: {
        NEXT_PUBLIC_EXAMPLE: z.string()
    },
    runtimeEnv: {
        GOOGLE_GEMINI_KEY: process.env.GOOGLE_GEMINI_KEY,
        NEXT_PUBLIC_EXAMPLE: process.env.EXAMPLE,
    },
})