import MaterialTable from 'material-table';
import { useState } from 'react'
import color from '../../color';

const OrdersTable = () => {
  const [tableData, setTableData] = useState<any>([]);

  const columns = [
    {
      cellStyle:{ background:color.bodyBlack },
      field:"name", 
      headerStyle:{ background:color.bodyBlack },
      title:"Nome do móvel"
    },
    {
      cellStyle:{ background:color.bodyBlack },
      field:"furniture",
      headerStyle:{ background:color.bodyBlack },
      title:"Cor"
    },
    {
      cellStyle:{ background:color.bodyBlack },
      field:"metric",
      headerStyle:{ background:color.bodyBlack },
      title:"Medidas"
    },
    {
      cellStyle:{ background:color.bodyBlack },
      field:"material",
      headerStyle:{ background:color.bodyBlack },
      title:"Material"
    },
    {
      cellStyle:{ background:color.bodyBlack },
      field:"image",
      headerStyle:{ background:color.bodyBlack },
      title:"Link da imagem"
    }
  ]

  return (
    <MaterialTable
      columns={columns}
      data={tableData}
      style={{ background:color.bodyBlack, boxShadow:"none" }} 
      title="Pedidos"
      options={{ 
        actionsColumnIndex:-1,
        addRowPosition:'first',
        filtering:true,
        headerStyle:{ background:color.bodyBlack, boxShadow:"none" }
      }}
    />
  )
}

export default OrdersTable;