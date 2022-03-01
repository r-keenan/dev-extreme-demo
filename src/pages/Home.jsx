import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <div>
      <h1>MUI vs DevExtreme React Demo</h1>
      <nav>
        <div>
          <Link to="/mui">MUI Material UI</Link>
        </div>
        <div>
          <Link to="/DevExtreme">DevExpress</Link>
        </div>
      </nav>
    </div>
  );
}

export default Home;
