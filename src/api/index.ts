import type { CreateKeypad, FormType } from '@/types';
import { http } from '@/utils/http';

export async function createKeypad() {
  return http.post<CreateKeypad>('/api/keypad');
}

export function submitPassword(value: FormType) {
  const password = {
    uid: value.password[0].uid,
    coords: value.password.map(({ x, y }) => ({ x, y })),
  };
  const confirmPassword = {
    uid: value.confirmPassword[0].uid,
    coords: value.confirmPassword.map(({ x, y }) => ({ x, y })),
  };

  return http.post('/api/password', { password, confirmPassword });
}
