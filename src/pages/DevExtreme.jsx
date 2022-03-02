import React from "react";
import Button from "devextreme-react/button";
import { useState } from "react";
import "devextreme/dist/css/dx.light.css";
import DeDataGrid from "../components/DeDataGrid";

function DevExtreme() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="deContainer">
      <header className="App-header">
        <h1 style={{ color: "black", fontSize: "1.5rem" }}>Dev Extreme</h1>
        <Button
          text="Increment"
          onClick={incrementCount}
          style={{ marginBottom: "15px" }}
        />
        <input type="number" value={count} />
        <div style={{ height: 400, width: "100%", marginTop: "20px" }}>
          <DeDataGrid />
        </div>
      </header>
    </div>
  );
}

export default DevExtreme;
