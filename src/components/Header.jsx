import React from "react";
import "../static/Header.css"
import searchbutton from "../static/images/search_button.png"

export default function Header()
{
  const logo = "/engjobhu_icon.jpg";
  return(
    
    <nav className="headernav">
      <img src={logo} alt="logo" className="logoimage"></img>

      <div class="InputContainer">
        <input placeholder="Search.." id="input" class="input" name="text" type="text"/>
        <button className="search-btn"><img src={searchbutton} alt="search"></img></button>
      </div>
      
      <div className="btncontainer">
        <button class="btn">Home</button>
        <button class="btn">About</button>
        <button class="btn">Contact</button>
        <button class="btn">Blog</button>
        <button class="btn">Register</button>
      </div>
      
    </nav>
  )
}