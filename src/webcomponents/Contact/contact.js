import React from "react";
import './contact.css';
import fb_icon from "../../webassets/conact_img/icons8-facebook-48.png"
import yt_icon from "../../webassets/conact_img/icons8-youtube-48.png"
import x_icon from "../../webassets/conact_img/icons8-twitter-48.png"

const Contact = () => {
    return (
        <section id="contactpage">
            <div className="contactform">
                <h1 className="contactTitle">
                        Contact Me
                </h1>
                <span className="contactDesc">
                        Please fill up the form and click submit.
                </span>
                <form className="contactForm"> 
                    <input type="text" className="name" placeholder="Your Name"/>
                    <input type="text" className="email" placeholder="Your Email"/>
                    <textarea name="message" className="messagebox" rows={10} placeholder="Your Message"></textarea>
                    <button type="submit" value='send' className="submitBtn">submit</button>
                </form>
                <div className="Links">
                    <img src={fb_icon} alt="Facebook" className="link"/>
                    <img src={yt_icon} alt="Twitter" className="link"/>
                    <img src={x_icon} alt="Youtube" className="link"/>
                </div>
            </div>
        </section>
    )
}

export default Contact
