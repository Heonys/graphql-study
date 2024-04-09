import InputForm from '@/components/InputForm';
import { Coords } from '@/components/Keypad';
import PasswordForm from '@/components/PasswordForm';

export type FormType = {
  name: string;
  password: Coords[];
  passwordCheck: Coords[];
};

const SiginUp = () => {
  // const { register, handleSubmit } = useForm<FormType>();

  const onHandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(value);
  };

  return (
    <form className="flex flex-col gap-2 items-center mt-20 h-full" onSubmit={onHandleSubmit}>
      <InputForm label="이름" />
      <PasswordForm id={1} label="패스워드" type="password" />
      <PasswordForm id={2} label="패스워드 확인" type="password" />
      <button type="submit" className="btn btn-neutral w-full">
        회원가입
      </button>
    </form>
  );
};
export default SiginUp;
