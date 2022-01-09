import MaterialTable from 'material-table';
import { useState } from 'react'
import color from '../../color';

const SalesTable = () => {
  const [tableData, setTableData] = useState<any>([]);

  const columns = [
    {
      cellStyle:{ background:color.bodyBlack },
      field:"name", 
      headerStyle:{ background:color.bodyBlack },
      title:"Nome"
    },
    {
      cellStyle:{ background:color.bodyBlack },
      field:"price",
      headerStyle:{ background:color.bodyBlack },
      title:"Preço"
    },
    {
      cellStyle:{ background:color.bodyBlack },
      field:"status",
      headerStyle:{ background:color.bodyBlack },
      title:"Status da venda"
    },
  ];

  return (
    <MaterialTable
      columns={columns}
      data={tableData}
      style={{ background:color.bodyBlack, boxShadow:"none" }} 
      title="Vendas"
      options={{ 
        actionsColumnIndex:-1,
        addRowPosition:'first',
        filtering:true,
        headerStyle:{ background:color.bodyBlack, boxShadow:"none" }
      }}
    />
  )
}

export default SalesTable;