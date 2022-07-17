import React from 'react';
import './Skill.css';



const Skill = () => {
    return(
        <div id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Education & Skills</h1>
                    </div>
                    <div className="col-lg-4 educationBox">
                        <div class="education">
                            <h6>2010-2012</h6>
                            <h2>Front-end Engineer</h2>
                            <h3>International Design Institute</h3>
                        </div>
                        <hr />
                        <div class="education">
                            <h6>2013-2014</h6>
                            <h2>Graphic Designer</h2>
                            <h3>HRK Design Institute</h3>
                        </div>
                        <hr />
                        <div class="education">
                            <h6>2013-2014</h6>
                            <h2>Graphic Designer</h2>
                            <h3>HRK Design Institute</h3>
                        </div>
                        <hr />
                        <div class="education">
                            <h6>2013-2014</h6>
                            <h2>Graphic Designer</h2>
                            <h3>HRK Design Institute</h3>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div class="skill-bar">
                            <div class="skill-box row">
                                <div class="col-1"><span>90%</span></div>
                                <div class="col">
                                <div class="bar">
                                    <div class="info"><span>HTML</span></div>
                                    <div class="progress-line html"><span></span></div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-box row">
                                <div class="col-1"><span>75%</span></div>
                                <div class="col">
                                <div class="bar">
                                    <div class="info"><span>Reactjs</span></div>
                                    <div class="progress-line react"><span></span></div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-box row">
                                <div class="col-1"><span>70%</span></div>
                                <div class="col">
                                <div class="bar">
                                    <div class="info"><span>Nodejs</span></div>
                                    <div class="progress-line node"><span></span></div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-box row">
                                <div class="col-1"><span>75%</span></div>
                                <div class="col">
                                <div class="bar">
                                    <div class="info"><span>Express js</span></div>
                                    <div class="progress-line express"><span></span></div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-box row">
                                <div class="col-1"><span>70%</span></div>
                                <div class="col">
                                <div class="bar">
                                    <div class="info"><span>Mongo DB</span></div>
                                    <div class="progress-line mongo"><span></span></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Skill;