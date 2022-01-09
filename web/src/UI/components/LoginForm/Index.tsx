import { useState } from "react";
import DefaultForm from "../DefaultForm/Index";
import MainInput from "../MainInput/Index";
import { FaUserAlt, FaLock } from 'react-icons/fa';
import MainButton from "../MainButton/Index";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <DefaultForm>
      <MainInput
        icone={<FaUserAlt/>}
        margin="30px 0px 10px 0px"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Email"
        type="email"
        value={username}
      />
      <MainInput
        icone={<FaLock/>}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        type="password"
        value={password}
      />
      <MainButton
        content="Entrar"
        margin="15px 0px"
        type="submit"
      />
    </DefaultForm>
  )
}

export default LoginForm;