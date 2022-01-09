import { useNavigate } from 'react-router-dom';
import color from '../../color';
import ClickableText from '../ClickableText/Index';

const LoginMessage = () => {
  const navigate = useNavigate();
  const goToLoginPage = () => navigate('/');

  return (
    <div>
      Já tem uma conta ? Entre 
      <ClickableText 
        content=' aqui' 
        color={ color.mainGreen }
        onClick={() => goToLoginPage()}
      />
    </div>
  )
}

export default LoginMessage;