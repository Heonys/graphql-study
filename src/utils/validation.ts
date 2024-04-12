import { z } from 'zod';

export const KeypadInputResultSchema = z.object({
  uid: z.string(),
  coords: z.array(z.object({ x: z.number(), y: z.number() })),
});

const inputSchema = z.object({
  uid: z.string(),
  x: z.number(),
  y: z.number(),
});

export const formSchema = z.object({
  name: z.string().min(1, { message: '아이디를 입력해주세요' }),
  password: z.array(inputSchema).nonempty().min(6, { message: '6자리를 입력해주세요' }).max(6),
  confirmPassword: z
    .array(inputSchema)
    .nonempty()
    .min(6, { message: '6자리를 입력해주세요' })
    .max(6),
});
