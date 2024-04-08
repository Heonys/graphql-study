import { CreateKeypad } from '@/api';

type Props = {
  createKeypad: CreateKeypad;
};

const Keypad = ({ createKeypad }: Props) => {
  console.log(createKeypad);

  return <div></div>;
};

export default Keypad;
