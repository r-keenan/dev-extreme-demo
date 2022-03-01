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
      minWidth: 140,
    },
    {
      field: "firstName",
      headerName: "First Name",
      width: 175,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 175,
      editable: true,
    },
    {
      field: "issue",
      headerName: "Issue",
      width: 400,
      editable: true,
    },
    {
      field: "filedBy",
      headerName: "Filed By",
      width: 250,
      editable: true,
    },
    {
      field: "actionTaken",
      headerName: "Action Taken",
      sortable: true,
      width: 500,
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
