import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApplePay,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import "./styles/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-inner">
        {/* Brand */}
        <section className="footer-brand">
          <a className="footer-logo" href="/" aria-label="Go to homepage">
            {/* Replace with your logo image if you have one */}
            <span className="footer-logoMark" aria-hidden="true">
              K
            </span>
            <span className="footer-logoText">KIM</span>
          </a>

          <p className="footer-tagline">
            Everyday essentials, curated with style. Shop confidently—fast
            delivery, easy returns.
          </p>

          <div className="footer-social" aria-label="Social links">
            <a className="footer-socialBtn" href="#" aria-label="Facebook">
              <FaFacebookF size={18} />
            </a>
            <a className="footer-socialBtn" href="#" aria-label="X (Twitter)">
              <BsTwitterX size={18} />
            </a>
            <a className="footer-socialBtn" href="#" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
            <a className="footer-socialBtn" href="#" aria-label="TikTok">
              <FaTiktok size={18} />
            </a>
          </div>
        </section>

        {/* Links */}
        <section className="footer-links" aria-label="Footer navigation">
          <div className="footer-col">
            <h3 className="footer-title">Shop</h3>
            <ul className="footer-list">
              <li>
                <a href="/products">All Products</a>
              </li>
              <li>
                <a href="/products">New Arrivals</a>
              </li>
              <li>
                <a href="/products">Best Sellers</a>
              </li>
              <li>
                <a href="/products">Deals</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Help</h3>
            <ul className="footer-list">
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/contact">Shipping & Returns</a>
              </li>
              <li>
                <a href="/contact">Order Tracking</a>
              </li>
              <li>
                <a href="/contact">FAQs</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-list">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/about">Our Mission</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms</a>
              </li>
            </ul>
          </div>
        </section>

        {/* Newsletter */}
        <section className="footer-newsletter" aria-label="Newsletter signup">
          <h3 className="footer-title">Get 10% off your first order</h3>
          <p className="footer-note">
            Join our newsletter for drops, restocks, and exclusive offers.
          </p>

          <form
            className="footer-form"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter form"
          >
            <span className="footer-formIcon" aria-hidden="true">
              <HiOutlineMail size={18} />
            </span>
            <input
              className="footer-input"
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              required
            />
            <button className="footer-btn" type="submit">
              Subscribe
            </button>
          </form>

          <p className="footer-disclaimer">
            No spam. Unsubscribe anytime.
          </p>
        </section>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottomInner">
          <p className="footer-copy">
            © {year} KIM. All Rights Reserved.
          </p>

          <div className="footer-payments" aria-label="Payment methods">
            <FaCcVisa size={26} />
            <FaCcMastercard size={26} />
            <FaCcPaypal size={24} />
            <FaApplePay size={26} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;