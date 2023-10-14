import React, { useEffect, useState } from "react";
import MaterialRender from "../components/MaterialRender";
import { v4 as uuidv4 } from "uuid";
import "./styles/Editor.css";
import CodeEditor from "../components/CodeEditor";

function Editor() {
  const [curCsvURL, setCurCsvURL] = useState([
    "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/customers.csv",
    "https://raw.githubusercontent.com/codeforamerica/ohana-api/master/data/sample-csv/addresses.csv",
  ]);

  const handleExec = (data) => {
    setCurCsvURL(() => {
      return data;
    });
  };

  return (
    <div className="mainWrapper">
      <div className="codeEditorContainer">
        <CodeEditor handleExec={handleExec}></CodeEditor>
      </div>
      <div className="vl"></div>
      <div className="multiTableContainer">
        {curCsvURL.map((urlVal) => {
          return (
            <div key={uuidv4()} className="singleTableContainer">
              <MaterialRender tableURL={urlVal}></MaterialRender>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Editor;
