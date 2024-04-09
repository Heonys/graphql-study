import useKeypad from '@/hooks/useKeypad';
import KeypadGrid from './KeypadGrid';
import { useEffect, useState } from 'react';
import { Coords } from './Keypad';

type Props = {
  label: string;
  id: number;
  type?: React.ComponentPropsWithoutRef<'input'>['type'];
};

const PasswordForm = ({ label, type, id }: Props) => {
  const { data, refetch } = useKeypad(id);
  const [coordsArray, setCoordsArray] = useState<Coords[]>([]);
  const [showKeypad, setShowKeypad] = useState(false);

  const displayAsterisk = () => '*'.repeat(coordsArray.length);

  const onCloseKeypad = () => {
    setShowKeypad(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setShowKeypad(true);
  };

  useEffect(() => {
    document.addEventListener('focusin', onCloseKeypad);
    document.addEventListener('click', onCloseKeypad);

    return () => {
      document.removeEventListener('focusin', onCloseKeypad);
      document.removeEventListener('click', onCloseKeypad);
    };
  }, []);

  return (
    <label className="form-control w-full relative">
      <div className="label">
        <span className="label-text font-bold">{label}</span>
      </div>
      <input
        type={type}
        value={displayAsterisk()}
        className="input input-md input-bordered w-full"
        readOnly
        required
        onClick={handleClick}
      />
      {data && showKeypad && (
        <KeypadGrid
          createKeypad={data}
          onChangeText={setCoordsArray}
          onCloseKeypad={onCloseKeypad}
          refetch={refetch}
        />
      )}
    </label>
  );
};

export default PasswordForm;
