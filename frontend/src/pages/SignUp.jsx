import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./styles/SignUp.css";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Header />

      <main className="signup-page">
        <section className="signup-shell" aria-label="Create account">
          <div className="signup-card">
            <div className="signup-head">
              <p className="signup-kicker">Create account</p>
              <h1 className="signup-title">Join us and start shopping</h1>
              <p className="signup-subtitle">
                It only takes a minute. Please fill in your details below.
              </p>
            </div>

            <form className="signup-form">
              <div className="name-row">
                <div className="field">
                  <label className="label" htmlFor="firstName">
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Jane"
                    autoComplete="given-name"
                    required
                  />
                </div>

                <div className="field">
                  <label className="label" htmlFor="lastName">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    autoComplete="family-name"
                    required
                  />
                </div>
              </div>

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
                <label className="label" htmlFor="password">
                  Password
                </label>

                <div className="password-wrap">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a secure password"
                    autoComplete="new-password"
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

                <p className="hint">
                  Use 8+ characters with a mix of letters and numbers.
                </p>
              </div>

              <div className="field">
                <label className="label" htmlFor="phone">
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="e.g. +254 712 345 678"
                  autoComplete="tel"
                />
              </div>

              <label className="terms">
                <input type="checkbox" required />
                <span>
                  I agree to the{" "}
                  <Link to="/terms" className="inline-link">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="inline-link">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              <button className="signup-btn" type="submit">
                Register
              </button>

              <p className="login-link">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default SignUp;