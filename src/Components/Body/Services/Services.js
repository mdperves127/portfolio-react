import React from 'react';
import './Services.css';
import service1 from '../../../assets/service1.png';
import service2 from '../../../assets/service2.png';
import service3 from '../../../assets/service3.png';
import service4 from '../../../assets/service4.png';
import service5 from '../../../assets/service5.png';
import service6 from '../../../assets/service6.png';


const Services = () => {
    return(
        <div id="services">
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center'>My Services</h1>
                    <div className='col-lg-4'>
                        <div className='service'>
                            <img src={service1} alt={service2} />
                            <h4>Web Development</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='service'>
                            <img src={service2} alt={service2} />
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='service'>
                            <img src={service3} alt={service3} />
                            <h4>Graphic Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='service'>
                            <img src={service4} alt={service4} />
                            <h4>Mobile apps</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='service'>
                            <img src={service5} alt={service5} />
                            <h4>SEO Marketing</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='service'>
                            <img src={service6} alt={service6} />
                            <h4>Web Banner</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Services;