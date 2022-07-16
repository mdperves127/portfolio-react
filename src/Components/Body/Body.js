import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Experience from "./Experience/Experience";
import Services from "./Services/Services";



const Body = () => {

    return (
        <div>
            <Banner />
            <About />
            <Services />
            <Experience />
        </div>
    )

}


export default Body;