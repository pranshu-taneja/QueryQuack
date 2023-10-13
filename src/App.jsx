import React from "react";
import Home from "./Pages/Home.jsx";
import Editor from "./Pages/Editor.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/Home" exact element={<Home />}></Route>
        <Route path="/Editor" exact element={<Editor />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
