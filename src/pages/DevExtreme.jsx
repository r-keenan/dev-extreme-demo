import React from "react";
import Button from "devextreme-react/button";
import { Form, SimpleItem } from "devextreme-react/form";
import { useState } from "react";
import "devextreme/dist/css/dx.light.css";

function DevExtreme() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="deContainer">
      <header className="App-header">
        <Button
          text="Increment"
          onClick={incrementCount}
          style={{ marginBottom: "15px" }}
        />
        <input type="number" value={count} />
      </header>
    </div>
  );
}

export default DevExtreme;