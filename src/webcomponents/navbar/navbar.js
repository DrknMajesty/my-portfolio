import React from "react";
import './navbar.css';
import userImg from "../../webassets/navbar_img/Profile Icon.jpg";
import PhoneCallButton from "../buttons/call";
import { Link } from "react-scroll";

const Navbar = () => {
    const phoneNumber = '1234567890';

    return (
       <nav className="navbar">
            <img src={userImg} alt="User Logo" className="logo"/>
            <div className="navMenu">
                <Link to="intro" className="navMenuListItem" smooth={true} duration={800}>
                    Home
                </Link>
                <Link to="Aboutsection" className="navMenuListItem" smooth={true} duration={800}>
                    About
                </Link>
                <Link to="services" className="navMenuListItem" smooth={true} duration={800}>
                    Services
                </Link>
                <Link to="techSection" className="navMenuListItem" smooth={true} duration={800}>
                    Tech Stack
                </Link>
            </div>
            <PhoneCallButton phoneNumber={phoneNumber}/>
       </nav>
    )
}

export default Navbar