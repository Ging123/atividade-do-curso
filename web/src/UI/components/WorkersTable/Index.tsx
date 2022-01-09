import MaterialTable from "material-table";
import { useState } from "react";
import color from "../../color";

const WorkersTable = () => {
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
      field:"furniture",
      headerStyle:{ background:color.bodyBlack },
      title:"Movel que está trabalhando"
    }
  ]

  return (
    <MaterialTable
      columns={columns}
      data={tableData}
      style={{ background:color.bodyBlack, boxShadow:"none" }} 
      title="Funcionários"
      options={{ 
        actionsColumnIndex:-1,
        addRowPosition:'first',
        filtering:true,
        headerStyle:{ background:color.bodyBlack, boxShadow:"none" }
      }}
    />
  )
}

export default WorkersTable;