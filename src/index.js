import React from "react";
import ReactDOM from "react-dom";
import data from "./data";
import Table from "./DataTable";

import "./styles.css";

function App() {
  const clickhandler = name => console.log("delete", name);

  return (
    <div className="App">
      <Table data={data} click={clickhandler} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
