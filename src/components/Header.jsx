import React from "react";
import "../static/Header.css"


export default function Header()
{
  // const logo = "/engjobhu_icon.jpg";
  return(
    
    <nav className="headernav">
      <img src={logo} alt="logo" className="logoimage"></img>

      <div class="InputContainer">
      <input placeholder="Search.." id="input" class="input" name="text" type="text"/>
      </div>

      <button class="btn">Home</button>
      <button class="btn">About</button>
      <button class="btn">Contact</button>
      <button class="btn">Blog</button>
      <button class="btn">Register</button>
      </nav>
  )
}