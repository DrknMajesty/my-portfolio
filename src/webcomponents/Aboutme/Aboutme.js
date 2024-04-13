import React from "react";
import './Aboutme.css';
import myImg from "../../webassets/aboutme_img/AboutMyself.png"

const About = () => {
    return (
        <section id="Aboutsection">
            <div className="AboutContainer">
                <h1 className="AboutTitle">Meet the Programmer</h1>
                <img src={myImg} alt="Myself_img" className="userImg"/>
                <p className="aboutPara">
                    I have fond memories of computers and electronics since childhood. I explored and played games whenever I had an opportunity to use one. My interest grew further when I reached Grade 10. 
                    I learned how to use basic HyperText Markup Language (HTML) from our computer subject, and then I decided to enroll in an ICT strand in senior high school. 
                    During the senior high days, they taught us basic ICT practices like cable management and router setup. In addition, I got to learn the JAVA programming language and managed to use it for activities and projects.
                    When college came, it wasn't easy to decide whether to continue what I started in my senior high or begin anew. Eventually, my father encouraged me to continue my ICT journey, so I enrolled in a Bachelor of Science, majoring in Information Technology.  
                    I learned a lot in the IT field, such as complex programming and algorithms. Until now, I have been studying to stay updated with the current trends. 
                    I hope for more opportunities and experiences to come to further enhance my knowledge as an IT professional.  
                </p>
                <div className="infoContainer">
                    <h2>Personal Information</h2>
                    <table className="infoTable">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td className="tableData">Noel Vincent M. Peligrino</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td className="tableData">Manganese, Basdio, Guindulman, Bohol</td>
                            </tr>
                            <tr>
                                <td>Birthday</td>
                                <td className="tableData">August 31, 2001</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td className="tableData">22</td>
                            </tr>
                        </tbody>
                    </table>
                    <h2>Educational Background</h2>
                    <table className="infoTable">
                        <tbody>
                            <tr>
                                <td>Elementray</td>
                                <td className="tableData">Guindulman Central Elementray School</td>
                            </tr>
                            <tr>
                                <td>Junior High School</td>
                                <td className="tableData">Saint Mary Academy</td>
                            </tr>
                            <tr>
                                <td>Senior High School</td>
                                <td className="tableData">Saint Mary Academy</td>
                            </tr>
                            <tr>
                                <td>College</td>
                                <td className="tableData">Holy Name University</td>
                            </tr>
                            <tr>
                                <td>Degree</td>
                                <td className="tableData">Bachelor of Science in Information Technology</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default About