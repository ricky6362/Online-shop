import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartLight } from "react-icons/pi";
import { PiHeartLight } from "react-icons/pi";
import { PiUserLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import Products from "../pages/Products";
import "./styles/Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [query, setQuery] = useState("")

    return (
        <div className="header-container">
            <div className="logo">Logo</div>

            {/* Desktop / Tablet Links */}
            <div className="header-links">
                <Link to='/' >Home</Link>
                <Link to="/products" >Products</Link>
                <Link to='/about' >About</Link>
                <Link to='/contact' >Contact Us</Link>
            </div>

            {/* Mobile Hamburger */}
            <div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <RxHamburgerMenu />
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="mobile-menu">
                    <Link to='/' >Home</Link>
                    <Link to="/products" >Products</Link>
                    <Link to='/about' >About</Link>
                    <Link to='/contact' >Contact Us</Link>
                </div>
            )}

            <div className="search-icons">
                <div className="hero-icons">
                    <Link to='/'><IoSearchOutline size={29} className="hero-icon"/></Link>
                    <Link to='/wishlist'><PiHeartLight size={29} className="hero-icon" /></Link>
                    <Link to='/shopping-cart'><PiShoppingCartLight size={29} className="hero-icon" /></Link>
                    <Link to='/login'><PiUserLight size={29} className="hero-icon" /></Link>
                </div>
            </div>
        </div>
    );
}

export default Header;


