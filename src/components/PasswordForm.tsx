import { useEffect, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import useKeypad from '@/hooks/useKeypad';
import KeypadGrid from './KeypadGrid';
import { FormType } from '@/pages/SiginUp';
import { Coords } from '@/types';

type Props = {
  label: string;
  id: number;
  register: UseFormRegisterReturn<keyof FormType>;
  type?: React.ComponentPropsWithoutRef<'input'>['type'];
};

const PasswordForm = ({ label, type, id, register }: Props) => {
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
    register.onChange({ target: { value: coordsArray, name: register.name } });
  }, [coordsArray, register]);

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
        readOnly
        className="input input-md input-bordered w-full"
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
