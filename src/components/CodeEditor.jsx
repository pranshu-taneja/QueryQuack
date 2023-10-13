import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import "./styles/CodeEditor.css";
import sqlQueries from "../helpers/sqlQueries";

export default function CodeEditor({ handleExec }) {
  const [selectedOption, setSelectedOption] = useState(0);
  const [editorText, setEditorText] = useState(
    sqlQueries[selectedOption].query
  );

  const handleDropdownChange = (event) => {
    setSelectedOption(parseInt(event.target.value));
  };

  const handleRun = () => {
    handleExec(sqlQueries[selectedOption].tableURL);
  };
  useEffect(() => {
    setEditorText(() => {
      return sqlQueries[selectedOption].query;
    });
  }, [selectedOption]);

  const onChange = (editor, data, value) => {
    setEditorText(editor);
  };

  return (
    <div className="wrapperEditor">
      <div className="toolbox">
        <select
          value={selectedOption}
          onChange={handleDropdownChange}
          className="dropdown"
          style={{
            width: "10rem",
          }}
        >
          {sqlQueries.map((query, index) => (
            <option key={index} value={index}>
              Query {index + 1}
            </option>
          ))}
        </select>
        <button onClick={handleRun} className="runbtn">
          Run
        </button>
      </div>
      <CodeMirror
        style={{ textAlign: "start", fontSize: "1rem" }}
        value={editorText}
        height="78vh"
        width="40vw"
        theme="dark"
        extensions={[sql({ sql: true })]}
        onChange={onChange}
      />
    </div>
  );
}
