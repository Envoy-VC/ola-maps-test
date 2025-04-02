import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
  },
  client: {
    NEXT_PUBLIC_OLA_MAPS_API_KEY: z.string(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_OLA_MAPS_API_KEY: process.env.NEXT_PUBLIC_OLA_MAPS_API_KEY,
  },
  skipValidation: Boolean(process.env.SKIP_ENV_VALIDATION),
  emptyStringAsUndefined: true,
});
