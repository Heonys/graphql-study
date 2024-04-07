import axios from 'axios';

const Login = () => {
  const handleClick = async () => {
    await axios('/api/user');
  };

  return (
    <div>
      <button onClick={handleClick}>++</button>
    </div>
  );
};

export default Login;
