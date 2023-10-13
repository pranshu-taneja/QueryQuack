import React from "react";
import { bg_Image } from "../helpers/Constants";
import "./styles/Home.css";
function Home() {
  return (
    <div className="HomeWrapper">
      <img className="bg_image" src={bg_Image} alt="landing image" />
      <h1 className="landing_text">Query Quack</h1>
    </div>
  );
}

export default Home;
