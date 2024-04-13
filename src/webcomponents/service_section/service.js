import React from "react";
import './service.css';
import uiux from '../../webassets/service_Images/UIUX.png';
import web from '../../webassets/service_Images/WEB.png'
import mobile from '../../webassets/service_Images/PHONE.png';
import game from '../../webassets/service_Images/GAME.png';

const Service = () => {
    return (
        <section id="services">
            <div className="serviceContent">
                <span className="serviceTitle">
                    Services
                </span>
                <br/>
                <div className="serviceDescription">
                    <p>
                    The following are the current skills that I have develop on my IT journey.
                    </p>
                </div>
                <div className="serviceContainer"> 
                    <div className="serviceBox">
                        <img src={uiux} alt="UX/UI_img" className="serviceBoxImg"/>
                        <div className="serviceBoxText">
                            <h2 className="serviceText">UI/UX Design</h2>
                            <p className="serviceText">
                            UI/UX design involves creating visually appealing interfaces and seamless user experiences for digital products or services.
                        </p>
                        </div>
                    </div>
                    <div className="serviceBox">
                        <img src={web} alt="WebDesign_img" className="serviceBoxImg"/>
                        <div className="serviceBoxText">
                            <h2 className="serviceText">Web Development</h2>
                            <p className="serviceText">
                            Web development involves building and maintaining websites or web applications using programming languages such as HTML, CSS, and JavaScript.
                            </p>
                        </div>
                    </div>
                    <div className="serviceBox">
                        <img src={mobile} alt="MobileDev_img" className="serviceBoxImg"/>
                        <div className="serviceBoxText">
                            <h2 className="serviceText">Mobile Development</h2>
                            <p className="serviceText">
                            Mobile development involves creating software applications specifically designed to run on mobile devices such as smartphones and tablets, utilizing platforms like iOS or Android.
                            </p>
                        </div>
                    </div>
                    <div className="serviceBox">
                        <img src={game} alt="GameDev_img" className="serviceBoxImg"/>
                        <div className="serviceBoxText">
                            <h2 className="serviceText">Game Development</h2>
                            <p className="serviceText">
                            Game development involves the creation of interactive experiences, often using programming languages like C++ or game engines like Unity or Unreal Engine, to design and build video games for various platforms.    
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
