import React, { useEffect, useState } from "react";
import "./styles/Navbar.css";
import { logo_URL, user_icon_URL } from "../helpers/Constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isMobileView, setisMobileView] = useState(false);

  useEffect(() => {
    function findMobileView() {
      if (window.innerWidth < 768) {
        setisMobileView(true);
        console.log("Mobile View Active!!");
      } 
    }
    findMobileView();
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
          <div
            style={{ display: isMobileView ? "flex" : "none" }}
            className="Hamburger"
          >
            &#9776;
          </div>
        </section>

        <section
          style={{ display: isDropDownOpen ? "none" : "flex" }}
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

// import React, { useState, useEffect } from "react";
// import "./styles/Navbar.css";
// import { logo_URL, user_icon_URL } from "../helpers/Constants";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();
//   const [isDropDownOpen, setIsDropDownOpen] = useState(true);
//   const [isMobileView, setIsMobileView] = useState(false);

//   useEffect(() => {
//     // Update the isMobileView state based on window width
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth < 768); // Adjust the threshold as needed
//     };

//     // Initial check on component mount
//     handleResize();

//     // Listen for window resize events
//     window.addEventListener("resize", handleResize);

//     // Clean up the event listener when the component is unmounted
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="navComponent-container">
//       <div className="navbar-container">
//         <section
//           onClick={() => {
//             setIsDropDownOpen(!isDropDownOpen);
//           }}
//           className="primary-section"
//         >
//           <div className="logoIcon-Container">
//             <img src={logo_URL} alt="logoIcon" className="logoIcon"></img>
//             <p className="logoText">QueryQuack</p>
//           </div>
//           {!isMobileView ? null : <div className="Hamburger">&#9776;</div>}
//         </section>

//         <section
//           style={{ display: isMobileView && isDropDownOpen ? "none" : "flex" }}
//           className="secondary-section"
//         >
//           <Link to={"/home"}>HOME</Link>
//           <Link to={"/editor"}>EDITOR</Link>
//           <Link className="userIcon-container ">
//             <img src={user_icon_URL} className="userIcon" alt="userIcon" />
//             <div className="userName">USER NAME</div>
//           </Link>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
