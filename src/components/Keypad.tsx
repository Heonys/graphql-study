import { Coords } from '@/types';
import { Button } from './Button';
import parse from 'html-react-parser';

type Props = {
  value: string;
  onClick: (e: Coords) => void;
  coords: Coords;
  primary?: boolean;
};

const KeyPad = ({ value, onClick, coords, primary = false }: Props) => {
  return (
    <Button
      variant={primary ? 'primary' : 'secondary'}
      type="button"
      onClick={() => onClick(coords)}
    >
      <div className="text-sm whitespace-nowrap overflow-hidden overflow-ellipsis flex justify-center items-center">
        {parse(value)}
      </div>
    </Button>
  );
};

export default KeyPad;
