import PageContainer from '../../components/PageContainer/Index';
import WorkersTable from '../../components/WorkersTable/Index';

const Workers = () => {
  document.title = 'Funcionários';

  return (
    <PageContainer>
      <WorkersTable/>
    </PageContainer>
  )
}

export default Workers;