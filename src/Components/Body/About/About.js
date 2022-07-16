import React from "react";
import './About.css';
import aboutPhoto from '../../../assets/About.png';
import CV from '../../../assets/Resume Of Perves.pdf';


const About = () => {
    return(
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="about_me">
                                <img src={aboutPhoto} alt={aboutPhoto} />
                            <h6>Md. Perves Hossen</h6>
                            <p>Full Stack Developer</p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about_detail">
                            <h1>About Us</h1>
                            <p>It is a long established fact that a reader will be distracted by the eadable content of a page when looking at its layout. The point of using Lorem Ipsum th that it has a ore-or-less normal distributi.</p>
                            <p>content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident</p>
                            <p>content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident</p>
                            <div className="row">
                                    <h6>Personal Info</h6>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><span>Name : </span>Md. Perves Hossen</li>
                                        <li><span>Age : </span>23 Years</li>
                                        <li><span>Nationality : </span>Bangladeshi</li>
                                        <li><span>Freelance : </span>Available</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><span>Address  : </span>Dhaka, Bangladesh.</li>
                                        <li><span>Phone : </span>+8801997015981</li>
                                        <li><span>Linkedin : </span>mdperves127</li>
                                        <li><span>Email : </span>mdperves127@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                            <a href={CV} download>Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default About;