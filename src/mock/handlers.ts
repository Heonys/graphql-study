import { http, HttpResponse } from 'msw';
import { z } from 'zod';
import { CreateKeypadResponse, createKeypadResponse } from './data/svgData';
import { KeypadInputResultSchema } from '@/utils/validation';

const keypadResponseMap = new Map<string, CreateKeypadResponse>();

export const handlers = [
  http.post('/api/keypad', async () => {
    const keypadResponse = createKeypadResponse();
    keypadResponseMap.set(keypadResponse.uid, keypadResponse);

    return HttpResponse.json(keypadResponse, { status: 200 });
  }),
  http.post('/api/password', async ({ request }) => {
    const data = await request.json();

    const { password, confirmPassword } = z
      .object({ password: KeypadInputResultSchema, confirmPassword: KeypadInputResultSchema })
      .parse(data);

    if (password.uid === confirmPassword.uid) {
      return HttpResponse.json('You must use two different keypads', { status: 400 });
    }

    const passwordKeypad = keypadResponseMap.get(password.uid);
    const confirmPasswordKeypad = keypadResponseMap.get(confirmPassword.uid);

    if (passwordKeypad == null || confirmPasswordKeypad == null) {
      return HttpResponse.json('Keypad not found', { status: 404 });
    }

    try {
      if (password.coords.length !== 6 || confirmPassword.coords.length !== 6) {
        return HttpResponse.json('Password must be entered as 6 characters', { status: 400 });
      }

      const passwordKeys = password.coords.map(({ x, y }) =>
        extractTestIdFromSVG(passwordKeypad.keypad.svgGrid[x][y]),
      );
      const confirmPasswordKeys = confirmPassword.coords.map(({ x, y }) =>
        extractTestIdFromSVG(confirmPasswordKeypad.keypad.svgGrid[x][y]),
      );

      if (passwordKeys.includes('blank') || confirmPasswordKeys.includes('blank')) {
        return HttpResponse.json("You can't enter a blank", { status: 400 });
      }

      if (passwordKeys.join('') !== confirmPasswordKeys.join('')) {
        return HttpResponse.json('Passwords do not match', { status: 400 });
      }

      return HttpResponse.json(passwordKeys.join(''), { status: 200 });
    } catch {
      return HttpResponse.json('input decryption failed', { status: 400 });
    }
  }),
];

function extractTestIdFromSVG(svgElement: string): string {
  const regex = /data-testid="([^"]+)"/;
  const matches = svgElement.match(regex);
  if (matches && matches.length > 1) {
    return matches[1];
  }
  return '';
}
