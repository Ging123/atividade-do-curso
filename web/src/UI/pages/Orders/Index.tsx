import OrdersTable from '../../components/OrdersTable/Index';
import PageContainer from '../../components/PageContainer/Index';

const Orders = () => {
  document.title = 'Pedidos';

  return (
    <PageContainer>
      <OrdersTable/>
    </PageContainer>
  )
}

export default Orders;