// import InputForm from '@/components/InputForm';

const Login = () => {
  const onHandleSubmit = async () => {};
  return (
    <form
      className="flex flex-col gap-2 items-center justify-center h-full"
      onSubmit={onHandleSubmit}
    >
      {/* <InputForm label="이메일" type="email" /> */}
      {/* <InputForm type="password" label="패스워드" /> */}
      <button className="btn btn-primary">회원가입</button>
    </form>
  );
};

export default Login;
