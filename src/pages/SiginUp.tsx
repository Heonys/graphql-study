import InputForm from '@/components/InputForm';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export type FormType = {
  email: string;
  nickname: string;
  pw: string;
  pwConfirm: string;
};

const SiginUp = () => {
  const { register, handleSubmit } = useForm<FormType>();
  const onHandleSubmit = (value: FormType) => {
    console.log(value);
    axios.post(`${process.env.REACT_APP_API_URL}/api/users`, {
      email: '',
      nickname: '',
      password: '',
    });
  };

  return (
    <form className="flex flex-col gap-2 items-center" onSubmit={handleSubmit(onHandleSubmit)}>
      <InputForm label="이메일" type="email" placeholder="" error="" register={register('email')} />
      <InputForm label="닉네임" placeholder="" error="" register={register('nickname')} />
      <InputForm
        type="password"
        label="패스워드"
        placeholder=""
        error=""
        register={register('pw')}
      />
      <InputForm
        label="패스워드 확인"
        type="password"
        placeholder=""
        error=""
        register={register('pwConfirm')}
      />
      <button className="btn btn-primary">회원가입</button>
    </form>
  );
};
export default SiginUp;
