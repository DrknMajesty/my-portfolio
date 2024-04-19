import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import "./scroll.css";

const ScrollToButton = () => {
    const scrollToSection = () => {
        scroll.scrollTo('contactPage', {
            duration: 800, // Scroll duration in milliseconds
            smooth: 'easeInOutQuart' // Smooth scrolling animation
        });
    };

    return (
        <div>
            <button className="button-hire" onClick={scrollToSection}>Scroll to Target Section</button>
        </div>
    );
};

export default ScrollToButton;