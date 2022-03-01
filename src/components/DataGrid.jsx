import { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

export default function MuiDataGrid() {
  //const { data } = useDemoData({
  //  dataSet: "Commodity",
  //  rowLength: 100,
  //  maxColumns: 6,
  //});

  const columns = [
    {
      field: "empId",
      headerName: "Employee Id",
      type: "number",
      flex: 1,
    },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 1,
      editable: true,
    },
    {
      field: "issue",
      headerName: "Issue",
      flex: 2,
      editable: true,
    },
    {
      field: "filedBy",
      headerName: "Filed By",
      flex: 1,
      editable: true,
    },
    {
      field: "actionTaken",
      headerName: "Action Taken",
      sortable: true,
      flex: 2,
    },
  ];

  const rows = [
    {
      empId: 666,
      lastName: "Case",
      firstName: "Krystal",
      issue: "Mean to new hire",
      filedBy: "Ross Keenan",
      actionTaken: "Moved her to another building",
    },
    {
      empId: 1,
      lastName: "Debbie",
      firstName: "Heller",
      issue: "Drinking on the job",
      filedBy: "Kyle Wickersham",
      actionTaken: "Mandatory AA meetings",
    },
    {
      empId: 2,
      lastName: "Tyrone",
      firstName: "Biggums",
      issue: "Under the influence of drugs while at work",
      filedBy: "Self",
      actionTaken: "Mandatory NA Meetings",
    },
  ];

  const [sortModel, setSortModel] = useState([
    {
      field: "empId",
      sort: "asc",
    },
  ]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
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
