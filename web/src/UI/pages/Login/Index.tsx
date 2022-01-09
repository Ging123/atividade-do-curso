import LoginForm from "../../components/LoginForm/Index";
import PageContainer from "../../components/PageContainer/Index";
import SignUpMessage from "../../components/SignUpMessage/Index";
import SubTitle from "../../components/SubTitle/Index";
import Title from "../../components/Title/Index";

const Login = () => {
  return (
    <PageContainer>
      <Title margin="10px 0px" text='bem vindo!'/>
      <SubTitle text='Coloque seus dados para você poder entrar :)'/>
      <LoginForm/>
      <SignUpMessage/>
    </PageContainer>
  );
}

export default Login;