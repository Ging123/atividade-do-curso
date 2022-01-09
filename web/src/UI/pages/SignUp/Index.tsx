import LoginMessage from '../../components/LoginMessage/Index';
import PageContainer from '../../components/PageContainer/Index';
import SignUpForm from '../../components/SignUpForm/Index';
import SubTitle from '../../components/SubTitle/Index';
import Title from '../../components/Title/Index';

const SignUp = () => {
  document.title = 'Cadastrar-se';

  return (
    <PageContainer>
      <Title margin="10px 0px" text='cadastre-se'/>
      <SubTitle text='Cadastre-se para pode usar o site'/>
      <SignUpForm/>
      <LoginMessage/>
    </PageContainer>
  );
}

export default SignUp;