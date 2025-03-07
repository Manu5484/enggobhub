import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../static/Signup.css";

export default function Signup() {
    const navigate = useNavigate(); 

    return (
        <div className="Completediv">
        <form className="signupform">
            <p className="title">Register</p>
            <p className="message">Signup now and get full access to our app.</p>

            <div className="signupflex">
                <label>
                    <input required type="text" className="signupinput" />
                    <span>Firstname</span>
                </label>

                <label>
                    <input required type="text" className="signupinput" />
                    <span>Lastname</span>
                </label>
            </div>

            <label>
                <input required type="email" className="signupinput" />
                <span>Email</span>
            </label>

            <label>
                <input required type="password" className="signupinput" />
                <span>Password</span>
            </label>

            <label>
                <input required type="password" className="signupinput" />
                <span>Confirm password</span>
            </label>

            <button className="signupsubmit">Submit</button>

            <p className="signin">
                Already have an account?{" "}
                <span className="signupa" onClick={() => navigate("/login")}>
                    Sign in
                </span>
            </p>
        </form>
        </div>
    );
}
