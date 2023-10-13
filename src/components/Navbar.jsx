import React, { useState } from "react";
import "./styles/navbar.css";
import { logo_URL, user_icon_URL } from "../helpers/Constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navComponent-container">
      <div className="navbar-container">
        <section
          onClick={() => {navigate("/home")}}
          className="logoIcon-container primary-section"
        >
          <img src={logo_URL} className="logoIcon"></img>
          <p className="logoText">QueryQuack</p>
        </section>

        <section className="secondary-section">
          <Link to={"/home"}>HOME</Link>
          <Link to={"/editor"}>EDITOR</Link>
          <div className="userIcon-container ">
            <img src={user_icon_URL} className="userIcon" alt="" />
            <p className="userName">UserName</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Navbar;
