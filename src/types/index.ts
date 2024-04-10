export type Coords = { uid: string; x: number; y: number };

export type FormType = {
  name: string;
  password: Coords[];
  confirmPassword: Coords[];
};

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
