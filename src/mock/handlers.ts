import { http, HttpResponse } from 'msw';
import { z } from 'zod';
import { CreateKeypadResponse, createKeypadResponse } from './data/svgData';

const keypadResponseMap = new Map<string, CreateKeypadResponse>();

export const KeypadInputResultSchema = z.object({
  uid: z.string(),
  coords: z.array(z.object({ x: z.number(), y: z.number() })),
});

export const handlers = [
  http.post('/api/keypad', async () => {
    const keypadResponse = createKeypadResponse();
    keypadResponseMap.set(keypadResponse.uid, keypadResponse);

    return HttpResponse.json(keypadResponse, { status: 200 });
  }),
  http.post('/api/password', async ({ request }) => {
    const data = await request.json();
    return HttpResponse.json(data, { status: 200 });
  }),
];
