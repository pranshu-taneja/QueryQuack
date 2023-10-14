import React, { useEffect, useState } from "react";
import "./styles/Navbar.css";
import { logo_URL, user_icon_URL } from "../helpers/Constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isDropDownOpen, setIsDropDownOpen] = useState(true);
  const [isMobileView, setisMobileView] = useState(false);

  useEffect(() => {
    function findMobileView() {
      if (window.innerWidth < 768) {
        setisMobileView(true);
        setIsDropDownOpen(false);
      } else {
        setisMobileView(false);
        setIsDropDownOpen(true);
      }
    }
    findMobileView();

    window.addEventListener("resize", findMobileView);

    return () => {
      window.removeEventListener("resize", findMobileView);
    };
  }, []);

  const handleDropDown = () => {
    if (window.innerWidth < 768) {
      setIsDropDownOpen(!isDropDownOpen);
    } else {
      navigate("/home");
    }
  };
  return (
    <div className="navComponent-container">
      <div className="navbar-container">
        <section
          onClick={() => {
            handleDropDown();
          }}
          className="primary-section"
        >
          <div className="logoIcon-Container">
            <img src={logo_URL} alt="logoIcon" className="logoIcon"></img>
            <p className="logoText">QueryQuack</p>
          </div>
          {!isMobileView ? null : <div className="Hamburger">&#9776;</div>}
        </section>

        <section
          style={{ display: isDropDownOpen ? "flex" : "none" }}
          className="secondary-section"
        >
          <Link to={"/home"}>HOME</Link>
          <Link to={"/editor"}>EDITOR</Link>
          <Link className="userIcon-container ">
            <img src={user_icon_URL} className="userIcon" alt="userIcon" />
            <div className="userName">USER NAME</div>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Navbar;
