import React from "react";
import './techstack.css';
import cplus_img from '../../webassets/appicons/c++-icon.png';
import html_img from '../../webassets/appicons/html-icon.png';
import css_img from '../../webassets/appicons/css-icon.png';
import js_img from '../../webassets/appicons/js-icon.png';
import python_img from '../../webassets/appicons/python-icon.png';
import react_img from '../../webassets/appicons/react-icon.png';
import vsc_img from '../../webassets/appicons/vscode.png';
import office_img from '../../webassets/appicons/office-icon.png';
import google_img from '../../webassets/appicons/google-icon.png';
import java_img from '../../webassets/appicons/java-icon.png';

const TechStack = () => {
    return (
        <section id="techSection">  
            <div className="TechContainer">
                    <h1 className="TechTitle">
                        Tech Stack
                    </h1>
                    <h2 className="TechTitle_2">
                        Tools
                    </h2>
                    <div className="TechBlockItem">
                        <div className="blockItem">
                            <img src={vsc_img} alt="vscode-img" className="TechImg"/>
                            <h1 className="blockText">
                                Visual Studio Code
                            </h1>
                        </div>
                        <div className="blockItem">
                            <img src={office_img} alt="office-img" className="TechImg"/>
                            <h1 className="blockText">
                                MS Office
                            </h1>
                        </div>
                        <div className="blockItem">
                            <img src={google_img} alt="google-img" className="TechImg"/>
                            <h1 className="blockText">
                                Google Workspace
                            </h1>
                        </div>
                    </div>
                    <h2 className="TechTitle_2">
                        Programming Languages
                    </h2>
                    <div className="TechBlockItem">
                        <div className="blockItem">
                            <img src={java_img} alt="java-img" className="TechImg"/>
                            <h1 className="blockText">
                                Java
                            </h1>
                        </div>
                        <div className="blockItem">
                            <img src={cplus_img} alt="c++-img" className="TechImg"/>
                            <h1 className="blockText">
                                C++
                            </h1>
                        </div>
                        <div className="blockItem">
                            <img src={html_img} alt="html-img" className="TechImg" />
                            <h1 className="blockText">
                                HTML
                            </h1>
                        </div>
                        <div className="blockItem">
                            <img src={css_img} alt="css-img" className="TechImg" />
                            <h1 className="blockText">
                                CSS
                            </h1>
                        </div>
                        <div className="blockItem">
                            <img src={js_img} alt="js-img" className="TechImg" />
                            <h1 className="blockText">
                                JavaScript
                            </h1>
                        </div>
                        <div className="blockItem">
                            <img src={python_img} alt="python-img" className="TechImg" />
                            <h1 className="blockText">
                                Python
                            </h1>
                        </div>
                    </div>
                    <h2 className="TechTitle_2">
                        Frameworks
                    </h2>
                    <div className="TechBlockItem">
                        <div className="blockItem">
                            <img src={react_img} alt="react-img" className="TechImg" />
                            <h1 className="blockText">
                                React
                            </h1>
                        </div>   
                    </div>
                </div>
        </section>  
    )
}

export default TechStack
/*  <span>HTML</span>  
                </div>

                <div className="TechBlockItem">
                    <img src="" alt="css-img" className="TechImg" />
                    <span>CCS</span>  
                </div>
                <div className="TechBlock">
                    <img src="" alt="js-img" className="TechImg" />
                    <span>JavaScript</span>   
                </div>
                <div className="TechBlock">
                    <img src="" alt="python-img" className="TechImg" />
                    <span>Python</span>   
                </div>
                <div className="TechBlock">
                    <img src="" alt="vsc-img" className="TechImg" />
                    <span>Visual Studio Code</span>   
                </div>
                <div className="TechBlock">
                    <img src="" alt="react-img" className="TechImg" />
                    <span>React</span>   
                </div>
                <div className="TechBlock">
                    <img src="" alt="git-img" className="TechImg" />
                    <span>Git</span>   
                </div>
                <div className="TechBlock">
                    <img src="" alt="github-img" className="TechImg" />
                    <span>GitHub</span>    */