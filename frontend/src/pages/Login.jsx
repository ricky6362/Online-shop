import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './styles/Login.css'

function Login() {
    return (
        <>
            <Header />
            <div className="login-container">
                <div className="login-img"></div>
                <div className="login-data">
                    <div className="welcome-data">
                        <p className="welcome-heading">Welcome Back</p>
                        <p className="login-message">Please login to your account</p>

                        <input type="text" placeholder="Email address"/>
                        <input type="password" placeholder="Password"/>

                        <button type="submit" className="login-btn">Login</button>
                        <p className="signup-link">Don't have an account? <Link to='/sign-up' >Register Here</Link></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login