import { FormType } from '@/types';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  label: string;
  register: UseFormRegisterReturn<keyof FormType>;
  type?: React.ComponentPropsWithoutRef<'input'>['type'];
};

const InputForm = ({ label, type, register }: Props) => {
  return (
    <label className="form-control w-full relative">
      <div className="label">
        <span className="label-text font-bold">{label}</span>
      </div>
      <input className="input input-md input-bordered w-full" type={type} required {...register} />
    </label>
  );
};

export default InputForm;
