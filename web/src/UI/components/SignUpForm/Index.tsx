import { useState } from 'react';
import { FaEnvelope, FaLock, FaUserAlt } from 'react-icons/fa';
import DefaultForm from '../DefaultForm/Index';
import MainButton from '../MainButton/Index';
import MainInput from '../MainInput/Index';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  return (
    <DefaultForm>
      <MainInput
        icone={<FaEnvelope/>}
        margin='15px 0px 10px 0px'
        maxLength={100}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        type='email'
        required={true}
        value={email}
      />
      <MainInput
        icone={<FaUserAlt/>}
        maxLength={30}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Nome de usuário'
        required={true}
        type='text'
        value={username}
      />
      <MainInput
        icone={<FaLock/>}
        margin='10px 0px 15px 0px'
        maxLength={30}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Senha'
        required={true}
        type='password'
        value={password}
      />
      <MainButton
        content='Cadastrar-se'
        margin='0px 0px 15px 0px'
        type='submit'
      />
    </DefaultForm>
  )
}

export default SignUpForm;