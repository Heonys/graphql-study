import InputForm from '@/components/InputForm';
import { useForm } from 'react-hook-form';

type FormType = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormType>();
  const onHandleSubmit = async () => {};
  return (
    <form className="flex flex-col gap-2 items-center" onSubmit={handleSubmit(onHandleSubmit)}>
      <InputForm label="이메일" type="email" placeholder="" error="" register={register('email')} />
      <InputForm
        type="password"
        label="패스워드"
        placeholder=""
        error=""
        register={register('password')}
      />
      <button className="btn btn-primary">회원가입</button>
    </form>
  );
};

export default Login;
