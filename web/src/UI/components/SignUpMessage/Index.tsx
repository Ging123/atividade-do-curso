import color from '../../color';
import ClickableText from '../ClickableText/Index';
import { useNavigate } from 'react-router-dom';

const SignUpMessage = () => {
  const navigate = useNavigate();
  const goToSignUpPage = () => navigate('/signup');

  return (
    <div className='sign-up-message'>
      Não tem uma conta, cadastre-se 
      <ClickableText 
        content=' aqui' 
        color={ color.mainGreen }
        onClick={() => goToSignUpPage()}
      />
    </div>
  )
}

export default SignUpMessage