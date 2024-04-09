import { z } from 'zod';

export const KeypadInputResultSchema = z.object({
  uid: z.string(),
  coords: z.array(z.object({ x: z.number(), y: z.number() })),
});
