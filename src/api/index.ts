import { http } from '@/utils/http';

export async function createKeypad() {
  return http.post<CreateKeypad>('/api/keypad');
}

type KeypadInputResult = {
  uid: string;
  coords: Array<{ x: number; y: number }>;
};

export function submitPassword(password: KeypadInputResult, confirmPassword: KeypadInputResult) {
  return http.post('/api/password', { password, confirmPassword });
}

export interface CreateKeypad {
  uid: string;
  keypad: {
    functionKeys: Array<{
      symbol: string;
      rowIndex: number;
      columnIndex: number;
    }>;
    size: {
      rows: number;
      columns: number;
    };
    svgGrid: string[][];
  };
}
