import React, { useEffect, useState, Suspense } from "react";
import "./styles/Codeeditor.css";
import sqlQueries from "../helpers/sqlQueries";
import FallbackLoader from "./FallbackLoader";

const CodeMirror = React.lazy(() => import("@uiw/react-codemirror"));
import { sql } from "@codemirror/lang-sql";

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
      <Suspense fallback={<FallbackLoader height={"80vh"}/>}>
        <CodeMirror
          style={{ textAlign: "start", fontSize: "1rem" }}
          value={editorText}
          className="codeMirror"
          height="80vh"
          theme="dark"
          extensions={[sql({ sql: true })]}
          onChange={onChange}
        />
      </Suspense>
    </div>
  );
}
