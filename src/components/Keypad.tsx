import { Button } from './Button';
import parse from 'html-react-parser';
export type Coords = { uid: string; x: number; y: number };

type Props = {
  value: string;
  onClick: (e: Coords) => void;
  coords: Coords;
  primary?: boolean;
};

const KeyPad = ({ value, onClick, coords, primary = false }: Props) => {
  const handleClick = (e: React.FocusEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick(coords);
  };

  return (
    <Button variant={primary ? 'primary' : 'secondary'} onFocus={handleClick}>
      <div className="text-sm whitespace-nowrap overflow-hidden overflow-ellipsis flex justify-center items-center">
        {parse(value)}
      </div>
    </Button>
  );
};

export default KeyPad;
