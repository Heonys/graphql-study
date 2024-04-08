import React, { Dispatch, SetStateAction } from 'react';

import { CreateKeypad } from '@/api';
import KeyPad, { Coords } from './Keypad';

type Props = {
  createKeypad: CreateKeypad;
  onChangeText: Dispatch<SetStateAction<string>>;
};

const sideButton = [
  '<div data-testid="back">←<div>',
  '<div data-testid="delete">전체삭제</div>',
  '<div data-testid="check">확인<div>',
];

const KeypadGrid = ({ createKeypad, onChangeText }: Props) => {
  const onClickButton = (coords: Coords) => {
    console.log(coords);
    onChangeText((prev) => prev + '*');
  };

  return (
    <div className="border-2 p-4 shadow-lg z-50 bg-white absolute w-full left-[50%] -translate-x-[50%] top-[100%]">
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
                onClick={onClickButton}
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
