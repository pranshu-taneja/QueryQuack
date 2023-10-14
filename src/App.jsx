import React from "react";
import Home from "./Pages/Home.jsx";
import Editor from "./Pages/Editor.jsx";
import Navbar from "./components/Navbar.jsx";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Editor" element={<Editor />} />
      </Routes>
    </Router>
  );
}

export default App;
