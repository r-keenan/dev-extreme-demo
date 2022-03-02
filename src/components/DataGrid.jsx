import { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import data from "./data/muiData.json";
//import { useDemoData } from "@mui/x-data-grid-generator";

export default function MuiDataGrid() {
  //const { data } = useDemoData({
  //  dataSet: "Commodity",
  //  rowLength: 100,
  //  maxColumns: 6,
  //});

  const [sortModel, setSortModel] = useState([
    {
      field: "empId",
      sort: "asc",
    },
  ]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data.rows}
        columns={data.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row.empId}
        sortModel={sortModel}
        onSortModelChange={(newSortModel) => setSortModel(newSortModel)}
        minWidth="fit-content"
      />
    </div>
  );
}
