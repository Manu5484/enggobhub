import React, { useState } from "react";
import "../static/Header.css";
import searchbutton from "../static/images/search_button.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const logo = "/engjobhu_icon.jpg";

  return (
    <nav className="headernav">
      <img src={logo} alt="logo" className="logoimage" />
      <span className="logoname">ENGJOBHUB</span>
      <div className="InputContainer">
        <input placeholder="Search.." id="input" className="input" name="text" type="text" />
        <button className="search-btn">
          <img src={searchbutton} alt="search" />
        </button>
      </div>
      <div className="btncontainer">
        <Link to={'/'}>
          <button className="btnnav">Home</button>
        </Link>
        <div className="dropdown-container"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}>
          <button className="btnnav">Opportunities</button>
          {showDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-left">
                <Link to="/internships">Internships</Link>
                <hr />
                <Link to="/internships-bangalore">Interns In Bangalore</Link>
                <Link to="/internships-remote">Work From Home</Link>
              </div>
              <div className="dropdown-right">
                <Link to="/jobs">Jobs</Link>
                <hr />
                <Link to="/jobs-bangalore">Jobs In Bangalore</Link>
                <Link to="/jobs-remote">Work From Home</Link>
              </div>
            </div>
          )}
        </div>
        <Link to={"/contact"}>
          <button className="btnnav">Services</button>
        </Link>
        <Link to={"/blog"}>
          <button className="btnnav">Blog</button>
        </Link>
        <Link to={"/login"}>
          <button className="btnnav">Register</button>
        </Link>
      </div>
    </nav>
  );
}
