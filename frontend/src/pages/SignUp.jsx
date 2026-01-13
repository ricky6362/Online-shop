import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./styles/SignUp.css";

function SignUp() {
    return (
        <>
            <Header />

            <div className="signup-container">
                <div className="signup-img"></div>

                <div className="signup-data">
                    <p className="signup-heading">Create Account</p>
                    <p className="login-message">Register your account here</p>

                    <div className="name-row">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>

                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="tel" placeholder="Phone Number" />

                    <button className="signup-btn">Register</button>

                    <p className="login-link">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default SignUp;
