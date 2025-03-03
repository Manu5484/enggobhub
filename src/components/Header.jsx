import React from "react";
import "../static/Header.css"


export default function Header()
{
  const logo = "/engjobhu_icon.jpg";
  return(
    
    <nav>
      <img src={logo} alt="logo"></img>
    </nav>
  )
}