import React, { Dispatch, SetStateAction } from 'react';
import { Coords, CreateKeypad } from '@/types';
import KeyPad from './Keypad';

type Props = {
  createKeypad: CreateKeypad;
  onChangeText: Dispatch<SetStateAction<Coords[]>>;
  onCloseKeypad: () => void;
  refetch: () => void;
};

const sideButton = [
  '<div data-testid="back">←<div>',
  '<div data-testid="delete">전체삭제</div>',
  '<div data-testid="check">확인<div>',
];

const KeypadGrid = ({ createKeypad, onChangeText, onCloseKeypad, refetch }: Props) => {
  const [blank, shuffle] = createKeypad.keypad.functionKeys.map(({ rowIndex, columnIndex }) => {
    return { x: rowIndex, y: columnIndex };
  });

  const onClickButton = (coords: Coords) => {
    const { x, y } = coords;
    if (blank.x === x && blank.y === y) return;
    if (shuffle.x === x && shuffle.y === y) {
      onChangeText([]);
      return refetch();
    }

    onChangeText((prev) => {
      if (prev.length > 5) return prev;
      return [...prev, coords];
    });
  };

  const onClickSubButton = (coords: Coords) => {
    switch (coords.x) {
      case 0: // 삭제
        onChangeText((prev) => prev.slice(0, -1));
        break;
      case 1: // 전체삭제
        onChangeText([]);
        break;
      case 2: // 확인
        onCloseKeypad();
        break;
    }
  };

  return (
    <div
      className="border-2 p-4 shadow-lg z-50 bg-white absolute w-full left-[50%] -translate-x-[50%] top-[100%]"
      onClick={(e) => e.stopPropagation()}
      onFocusCapture={(e) => e.stopPropagation()}
    >
      <ul className="grid grid-cols-5 grid-rows-3 gap-3">
        {createKeypad.keypad.svgGrid.map((row, rowIndex) => {
          return (
            <React.Fragment key={rowIndex}>
              {row.map((svg, columnIndex) => (
                <KeyPad
                  key={columnIndex}
                  value={svg}
                  coords={{
                    uid: createKeypad.uid,
                    x: rowIndex,
                    y: columnIndex,
                  }}
                  onClick={onClickButton}
                />
              ))}
              <KeyPad
                value={sideButton[rowIndex]}
                coords={{
                  uid: createKeypad.uid,
                  x: rowIndex,
                  y: 4,
                }}
                primary={rowIndex === 2}
                onClick={onClickSubButton}
              />
            </React.Fragment>
          );
        })}
      </ul>
      <div className="mt-3 font-sans">
        <div>비밀번호를 입력해주세요</div>
        <div>6자리로 입력해주세요</div>
      </div>
    </div>
  );
};

export default KeypadGrid;
