import { useForm } from 'react-hook-form';
import { submitPassword } from '@/api';
import InputForm from '@/components/InputForm';
import PasswordForm from '@/components/PasswordForm';
import type { FormType } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '@/utils/validation';

const SiginUp = () => {
  const { register, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const onHandleSubmit = async (value: FormType) => {
    try {
      await submitPassword(value);
    } catch (error) {
      return;
    }
  };

  return (
    <form
      className="flex flex-col gap-2 items-center mt-20 h-full"
      noValidate
      onSubmit={handleSubmit(onHandleSubmit)}
    >
      <InputForm label="이름" register={register('name')} />
      <PasswordForm id={1} label="비밀번호" type="password" register={register('password')} />
      <PasswordForm
        id={2}
        label="비밀번호 확인"
        type="password"
        register={register('confirmPassword')}
      />
      <button type="submit" className="btn btn-neutral w-full mt-2">
        회원가입
      </button>
    </form>
  );
};
export default SiginUp;
