import React from "react";
import Navbar from "./Navbar";

const About = () => {
    return (
        <div className="about text-center">
            <Navbar active='about' />
            <h2 className='mt-5 text-info'>Raheem Emad Amer</h2>
                <p className='font-weight-light mb-0'>
                    Junior Front End Web Developer with +1 years of experience 
                </p>
        </div>
    )
};

export default About;