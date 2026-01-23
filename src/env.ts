import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    ZAPIER_CONTACT_WEBHOOK_URL: z.string().url(),
    SANITY_API_READ_TOKEN: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1),
    NEXT_PUBLIC_SANITY_DATASET: z.string().min(1),
    NEXT_PUBLIC_SANITY_API_VERSION: z.string().default("2024-12-25"),
    NEXT_PUBLIC_SIGNIN_URL: z.string().url(),
  },
  runtimeEnv: {
    ZAPIER_CONTACT_WEBHOOK_URL: process.env.ZAPIER_CONTACT_WEBHOOK_URL,
    SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    NEXT_PUBLIC_SIGNIN_URL: process.env.NEXT_PUBLIC_SIGNIN_URL,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
