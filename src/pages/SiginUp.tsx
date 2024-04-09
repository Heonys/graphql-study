import { useForm } from 'react-hook-form';
import { submitPassword } from '@/api';
import InputForm from '@/components/InputForm';
import PasswordForm from '@/components/PasswordForm';
import { Coords } from '@/types';

export type FormType = {
  name: string;
  password: Coords[];
  passwordCheck: Coords[];
};

const SiginUp = () => {
  const { register, handleSubmit } = useForm<FormType>();

  const onHandleSubmit = async (value: FormType) => {
    const password = {
      uid: value.password[0].uid,
      coords: value.password.map(({ x, y }) => ({ x, y })),
    };
    const passwordConfirm = {
      uid: value.passwordCheck[0].uid,
      coords: value.passwordCheck.map(({ x, y }) => ({ x, y })),
    };
    try {
      await submitPassword(password, passwordConfirm);
    } catch (error) {
      return;
    }
  };

  return (
    <form
      className="flex flex-col gap-2 items-center mt-20 h-full"
      onSubmit={handleSubmit(onHandleSubmit)}
    >
      <InputForm label="이름" register={register('name')} />
      <PasswordForm id={1} label="패스워드" type="password" register={register('password')} />
      <PasswordForm
        id={2}
        label="패스워드 확인"
        type="password"
        register={register('passwordCheck')}
      />
      <button type="submit" className="btn btn-neutral w-full mt-2">
        회원가입
      </button>
    </form>
  );
};
export default SiginUp;
