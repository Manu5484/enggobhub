import React, { useState } from "react";
import "../static/Header.css";
import searchbutton from "../static/images/search_button.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [showOpportunities, setShowOpportunities] = useState(false);
  const [showServices, setShowServices] = useState(false);

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

        {/* Opportunities Dropdown */}
        <div className="dropdown-container"
          onMouseEnter={() => setShowOpportunities(true)}
          onMouseLeave={() => setShowOpportunities(false)}>
          <button className="btnnav">Opportunities</button>
          {showOpportunities && (
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

        {/* Services Dropdown */}
        <div className="dropdown-container"
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}>
          <button className="btnnav">Services</button>
          {showServices && (
            <div className="dropdown-menu">
              <div className="dropdown-left">
                <Link to="/internships">Courses</Link>
                <hr />
                <Link to="/internships-bangalore">Free Courses</Link>
                <Link to="/internships-remote">Paid Courses</Link>
              </div>
              <div className="dropdown-right">
                <Link to="/jobs">Resume</Link>
                <hr />
                <Link to="/jobs-bangalore">AI Resume Builder</Link>
                <Link to="/jobs-remote">Resume Template</Link>
              </div>
            </div>
          )}
        </div>

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
