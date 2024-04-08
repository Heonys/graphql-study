import useKeypad from '@/hooks/useKeypad';
import KeypadGrid from './KeypadGrid';
import { useEffect, useState } from 'react';

type Props = {
  label: string;
  id: number;
  type?: React.ComponentPropsWithoutRef<'input'>['type'];
};

const InputForm = ({ label, type, id }: Props) => {
  const { data } = useKeypad(id);
  const [text, setText] = useState('');
  const [showKeypad, setShowKeypad] = useState(false);

  const onChangeText = setText;

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
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input input-md input-bordered w-full"
        readOnly
        required
        onClick={handleClick}
      />
      {data && showKeypad && <KeypadGrid createKeypad={data} onChangeText={onChangeText} />}
    </label>
  );
};

export default InputForm;
