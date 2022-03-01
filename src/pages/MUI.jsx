import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DataGrid from "../components/DataGrid";

function Mui() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="muiContainer">
      <header className="App-header">
        <Button
          variant="contained"
          text="Increment Counter"
          onClick={incrementCount}
          style={{ marginBottom: "15px" }}
        >
          Increment
        </Button>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Count"
            variant="filled"
            type="number"
            value={count}
          />
        </Box>
        <div style={{ marginTop: "20px", width: "100%" }}>
          <DataGrid />
        </div>
      </header>
    </div>
  );
}

export default Mui;
