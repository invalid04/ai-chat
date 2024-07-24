import { createEnv } from "@t3-oss/env-nextjs";
import { z } from 'zod'

export const env = createEnv({
    server: {
        GOOGLE_GEMINI_KEY: z.string().min(1),
    },
    client: {
        EXAMPLE: z.string()
    },
    runtimeEnv: {
        GOOGLE_GEMINI_KEY: process.env.GOOGLE_GEMINI_KEY,
        EXAMPLE: process.env.EXAMPLE,
    },
})