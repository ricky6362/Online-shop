import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import "./styles/Footer.css"

function Footer() {
    return (
        <div className="footer-container">
            <div>Logo</div>
            <div>&copy; 2025. All Rights Reserved.</div>
            <div className="footer-icons">
                <FaFacebookF className="footer-icon" size={20}/>
                <BsTwitterX className="footer-icon" size={20}/>
                <FaInstagram className="footer-icon" size={20}/>
                <FaTiktok className="footer-icon" size={20}/>
            </div>
        </div>
    )
}

export default Footer