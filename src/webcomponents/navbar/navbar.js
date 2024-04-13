import React from "react";
import './navbar.css';
import callImg from "../../webassets/navbar_img/phone-outline.svg";
import userImg from "../../webassets/navbar_img/Profile Icon.jpg";

const Navbar = () => {
    return (
       <nav className="navbar">
            <img src={userImg} alt="User Logo" className="logo"/>
            <div className="navMenu">
                <a href="#intro" className="navMenuListItem">
                    Home
                </a>
                <a href="#Aboutsection" className="navMenuListItem">
                    About Me
                </a>
                <a href="#services" className="navMenuListItem">
                    Services
                </a>
            </div>
            <button className="navMenuButton">
                <img src={callImg} alt="call-logo" className="callLogo"/>
                Contact Me
            </button>
       </nav>
    )
}

export default Navbar