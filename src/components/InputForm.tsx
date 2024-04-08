import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  label: string;
  placeholder: string;
  error: string;
  register: UseFormRegisterReturn<any>;
  type?: React.ComponentPropsWithoutRef<'input'>['type'];
};

const InputForm = ({ label, placeholder, error, register, type }: Props) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text font-bold text-lg">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
        required
        {...register}
      />
      <div className="label">
        <span className="label-text-alt text-red-400 font-semibold">{error}</span>
      </div>
    </label>
  );
};

export default InputForm;
