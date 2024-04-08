import InputForm from '@/components/InputForm';

export type FormType = {
  name: string;
  password: string;
  passwordCheck: string;
};

const SiginUp = () => {
  const onHandleSubmit = async () => {};

  return (
    <form className="flex flex-col gap-2 items-center mt-20 h-full" onSubmit={onHandleSubmit}>
      {/* <InputForm label="이름"/> */}
      <InputForm id={1} label="패스워드" type="password" />
      <InputForm id={2} label="패스워드 확인" type="password" />
      <button type="submit" className="btn btn-neutral w-full">
        회원가입
      </button>
    </form>
  );
};
export default SiginUp;
