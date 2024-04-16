import React from "react";
import './intro.css';
import bg from "../../webassets/intro_img/background_image-01.png";
import hireImg from "../../webassets/intro_img/email-outline.svg";
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Wel</span><br/> IT Professional</span>
                <p className="introParagraph">I am looking for experiences for the development of my IT career.</p>
                <Link to="contactpage" smooth={true} duration={800}>
                <button className="btn">
                    <img src={hireImg} alt="email-pic" className="button_image"/>
                    Hire Me
                </button>
                </Link>
            </div>
            <img src={bg} alt="my-full-body-pic" className="bg"></img>            
        </section>
    )
}

export default Intro