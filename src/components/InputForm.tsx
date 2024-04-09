type Props = {
  label: string;

  type?: React.ComponentPropsWithoutRef<'input'>['type'];
};

const InputForm = ({ label, type }: Props) => {
  return (
    <label className="form-control w-full relative">
      <div className="label">
        <span className="label-text font-bold">{label}</span>
      </div>
      <input className="input input-md input-bordered w-full" type={type} required />
    </label>
  );
};

export default InputForm;
