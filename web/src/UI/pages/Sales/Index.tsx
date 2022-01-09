import PageContainer from '../../components/PageContainer/Index';
import SalesTable from '../../components/SalesTable/Index';

const Sales = () => {
  document.title = 'Vendas';

  return (
    <PageContainer>
      <SalesTable/>
    </PageContainer>
  )
}

export default Sales;