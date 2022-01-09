import { useNavigate } from 'react-router-dom'
import DefaultForm from '../../components/DefaultForm/Index'
import MainButton from '../../components/MainButton/Index'
import PageContainer from '../../components/PageContainer/Index'
import SubTitle from '../../components/SubTitle/Index'
import Title from '../../components/Title/Index'

const Admin = () => {
  document.title = 'Administrar';
  const navigate = useNavigate();
  const goToWorkersPage = () => navigate('/workers');
  const goToSalesPage = () => navigate('/sales');
  const goToOrdersPage = () => navigate('/orders');

  return (
    <PageContainer>
      <Title text='Bem vindo admin ^^' margin='15px 0px'/>
      <SubTitle text='O que vamos fazer hoje ?'/>
      <DefaultForm>
        <MainButton
          content="Ver pedidos"
          type='button'
          onClick={() => goToOrdersPage()}
          margin='15px 0px 0px 0px'
        />
        <MainButton
          content="Gerenciar Funcionários"
          type='button'
          onClick={() => goToWorkersPage()}
          margin='15px 0px'
        />
        <MainButton
          content="Gerenciar Vendas"
          onClick={() => goToSalesPage()}
          type='button'
        />
      </DefaultForm>
    </PageContainer>
  )
}

export default Admin
