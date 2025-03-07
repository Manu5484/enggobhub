import React from "react";
import "../static/Header.css"
import searchbutton from "../static/images/search_button.png"
import {Link} from 'react-router-dom'

export default function Header()
{
  const logo = "/engjobhu_icon.jpg";
  return(
    
    <nav className="headernav">
      <img src={logo} alt="logo" className="logoimage"></img>
      <span className="logoname">ENGJOBHUB</span>
      <div class="InputContainer">
        <input placeholder="Search.." id="input" class="input" name="text" type="text"/>
        <button className="search-btn"><img src={searchbutton} alt="search"></img></button>
      </div>
      
      <div className="btncontainer">
        <Link to={'/'}>
          <button class="btnnav">Home</button>
        </Link>
        <Link to="#">
          <button class="btnnav">About</button>
        </Link>
        <Link to={"#"}>
          <button class="btnnav">Contact</button>
        </Link>
        <Link to={"/blog"}>
          <button class="btnnav">Blog</button>
        </Link>
        <Link to={"/login"}>
          <button class="btnnav">Register</button>
        </Link>
      </div>
      
    </nav>
  )
}