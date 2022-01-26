/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import mern from '../Images/mern.png';
import sass from '../Images/sass.jpg';
import cpp from '../Images/cpp.png';
import Navbar from "./Navbar";

const Skills = () => {
    return (
        <div className="skills">
            <Navbar active='skills' />
            <div className="container mt-5">
                <div className="card-group">
                    <div className="card-flip">
                    <div className="card-content">
                        <div className="card-front">
                            <img src={mern} alt="html" className='card-img'/>
                            <h2 className="card-title blue">MERN Stack</h2>
                        </div>
                        <div className="card-back pt-5">
                            Recently I have started doing MERN Stack
                            <br/>
                            And now i am very much familiar with it.
                            <br/>
                            My biggest project of MERN Stack is MCU view it on projects
                        </div>
                    </div>
                </div>
                    <div className="card-flip">
                        <div className="card-content">
                            <div className="card-front">
                                <img src={sass} alt="html" className='card-img'/>
                                <h2 className="card-title blue">Sass</h2>
                            </div>
                            <div className="card-back pt-5">
                                Recently I have started doing Sass
                                <br/>
                                I also made a css library using it
                                <br/>
                                View it in projects.
                            </div>
                        </div>
                    </div>
                    <div className="card-flip">
                        <div className="card-content">
                            <div className="card-front">
                                <img src={cpp} alt="html" className='card-img'/>
                                <h2 className="card-title blue">C++</h2>
                            </div>
                            <div className="card-back pt-5">
                                C++ is the basic language of programming,
                                <br/>
                                you can see some of my C++ Projects on{' '}
                                <span>
                                    <a href="#" target='_blank' rel='noreferrer noopener' className='text-primary' >Cpp</a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="card-flip">
                        <div className="card-content">
                            <div className="card-front">
                                <img src={cpp} alt="html" className='card-img'/>
                                <h2 className="card-title blue">C++</h2>
                            </div>
                            <div className="card-back pt-5">
                                C++ is the basic language of programming,
                                <br/>
                                you can see some of my C++ Projects on{' '}
                                <span>
                                    <a href="#" target='_blank' rel='noreferrer noopener' className='text-primary' >Cpp</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-flip">
                        <div className="card-content">
                            <div className="card-front">
                                <img src={cpp} alt="html" className='card-img'/>
                                <h2 className="card-title blue">C++</h2>
                            </div>
                            <div className="card-back pt-5">
                                C++ is the basic language of programming,
                                <br/>
                                you can see some of my C++ Projects on{' '}
                                <span>
                                    <a href="#" target='_blank' rel='noreferrer noopener' className='text-primary' >Cpp</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="card-half"/> */}
                    <div className="card-flip">
                        <div className="card-content">
                            <div className="card-front">
                                <img src={cpp} alt="html" className='card-img'/>
                                <h2 className="card-title blue">C++</h2>
                            </div>
                            <div className="card-back pt-5">
                                C++ is the basic language of programming,
                                <br/>
                                you can see some of my C++ Projects on{' '}
                                <span>
                                    <a href="#" target='_blank' rel='noreferrer noopener' className='text-primary' >Cpp</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;