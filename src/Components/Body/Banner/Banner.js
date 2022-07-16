import React from "react";
import './Banner.css';

const Banner = () => {
    return(
        <div id="banner">
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <div className="content">
                    <h4>Full Stack Developer</h4>
                    <h1>Md. Perves Hossen</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
                    tempor incididunt ut dolor the sit amet consectetur adipisicing
                    elit sed do consectetur labore et dolo...</p>
                    <a href="#about">View More</a>
                    </div>
                </div>
                <div className="col-lg-6"></div>
                </div>
            </div>
        </div>
    );
}

export default Banner;