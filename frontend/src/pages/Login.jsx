import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./styles/Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Header />

      <main className="login-page">
        <section className="login-shell" aria-label="Login">
          <div className="login-card">
            <div className="login-head">
              <p className="login-kicker">Welcome back</p>
              <h1 className="login-title">Sign in to your account</h1>
              <p className="login-subtitle">
                Enter your details to continue shopping.
              </p>
            </div>

            <form className="login-form">
              <div className="field">
                <label className="label" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="field">
                <div className="label-row">
                  <label className="label" htmlFor="password">
                    Password
                  </label>
                  <Link className="forgot-link" to="/forgot-password">
                    Forgot?
                  </Link>
                </div>

                <div className="password-wrap">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    className="pw-toggle"
                    onClick={() => setShowPassword((s) => !s)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="login-row">
                <label className="remember">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
              </div>

              <button type="submit" className="login-btn">
                Login
              </button>

              <p className="signup-link">
                Don&apos;t have an account?{" "}
                <Link to="/sign-up">Register here</Link>
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Login;