import React from "react";
import { useNavigate } from "react-router-dom";
import "../static/Login.css"
import attherate from "../static/images/attherate.png"
import lock from "../static/images/lock.png"
import google from "../static/images/google.png"
import apple from "../static/images/apple1.png"

export default function Login(){
  const navigate = useNavigate();
    return(
<div className="complete-container">       
<form className="formlogin">
    <div className="flex-column">
      <label>Email </label></div>
      <div className="inputForm">
        <img src={attherate} alt="@" className="icons"></img>
        <input type="text" className="logininput" placeholder="Enter your Email"></input>
      </div>
    
    <div className="flex-column">
      <label>Password </label></div>
      <div className="inputForm">
        <img src={lock} alt="lock" className="icons"></img>
        <input type="password" className="logininput" placeholder="Enter your Password"></input>
        <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>
      </div>
    
    <div className="flex-row">
      <div>
      <input type="checkbox"></input>
      <label>Remember me </label>
      </div>
      <span className="span">Forgot password?</span>
    </div>
    <button className="button-submit">Sign In</button>
    <p className="p">Don't have an account? <span className="span"  onClick={() => navigate("/signup")} style={{ cursor: "pointer", color: "blue" }}>
      Sign Up</span>

    </p><p className="p line">Or With</p>

    <div className="flex-row">
      <button className="btn google">
        <img src={google} className="icons" alt="google"></img>
   
        Google 
        
      </button><button className="btn apple">
        <img src={apple} alt="apple" className="icons"></img>
        Apple 
        
</button></div></form>
</div> 
    )
}