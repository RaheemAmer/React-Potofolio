/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "./Navbar";

const Projects = () => {
    return (
        <div className="about">
            <Navbar active='project' />
            <br />
            <div>
            <p className="text-center "> Here are some of my Projects:</p>
            </div>

            <div className="container mt-5">
                <div className="card-group">
                <div className="card-flip">
                        <div className="card-content">
                            <div className="card-front">
                                <h2 className="card-title blue">Todo List</h2>
                                <p className='card-desc' >
                                    A simple todo list application made with MERN Stack
                                </p>
                            </div>
                            <div className="card-back pt-5 container-fluid">
                            <span>
                                <a href="#" target='_blank' rel='noreferrer noopener' className='btn btn-light' >Link To Code</a>
                                <span className='alert alert-warning' >Site Under Progress</span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-flip">
                        <div className="card-content">
                            <div className="card-front">
                                <h2 className="card-title blue">Todo List</h2>
                                <p className='card-desc' >
                                    A simple todo list application made with MERN Stack
                                </p>
                            </div>
                            <div className="card-back pt-5 container-fluid">
                            <span>
                                <a href="" target='_blank' rel='noreferrer noopener' className='btn btn-light' >Link To Code</a>
                                <span className='alert alert-warning' >Site Under Progress</span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-flip">
                        <div className="card-content">
                            <div className="card-front">
                                <h2 className="card-title blue">Todo List</h2>
                                <p className='card-desc' >
                                    A simple todo list application made with MERN Stack
                                </p>
                            </div>
                            <div className="card-back pt-5 container-fluid">
                            <span>
                                <a href="#" target='_blank' rel='noreferrer noopener' className='btn btn-light' >Link To Code</a>
                                <span className='alert alert-warning' >Site Under Progress</span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-flip">
                        <div className="card-content">
                            <div className="card-front">
                                <h2 className="card-title blue">Todo List</h2>
                                <p className='card-desc' >
                                    A simple todo list application made with MERN Stack
                                </p>
                            </div>
                            <div className="card-back pt-5 container-fluid">
                            <span>
                                <a href="#" target='_blank' rel='noreferrer noopener' className='btn btn-light' >Link To Code</a>
                                <span className='alert alert-warning' >Site Under Progress</span>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;