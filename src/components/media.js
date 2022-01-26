/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import Navbar from "./Navbar"

const Media = () => {
    return (
        <Fragment>
            <Navbar active='channel' />
            <div className="container mt-5 mb-5">
                <div className="row mt-5">
                    {/* <div className="col-md-6 mt-5 text-center ">
                        <img src={Batman} alt='Raheem' className='media-img'/>
                    </div> */}
                    <div className="col-md-6 mt-5">
                        <div className="channel text-center">
                            <h3 className='mb-5 title' >My Github Profile</h3>
                            You can find all my repositories on Github including this ProfilePage. <br/>
                            My Github username is <strong>Raheem</strong> <br />
                            <strong>
                                <a target='_blank' rel="#" href='#' className='github' >
                                    <i className="fab fa-github" />
                                </a>
                            </strong>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="channel text-center">
                            <h3 className='mb-5 title' >My Github Profile</h3>
                            You can find all my repositories on Github including this ProfilePage. <br/>
                            My Github username is <strong>Raheem</strong> <br />
                            <strong>
                                <a target='_blank' rel="#" href='#' className='github' >
                                    <i className="fab fa-github" />
                                </a>
                            </strong>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-3 mt-5 " />
                    <div className="col-md-6 mt-5">
                        <div className="channel text-center">
                            <h3 className='mb-5 title' >My Github Profile</h3>
                            You can find all my repositories on Github including this ProfilePage. <br/>
                            My Github username is <strong>Raheem</strong> <br />
                            <strong>
                                <a target='_blank' rel="#" href='#' className='wq' >
                                    <i className="fab fa-github" />
                                </a>
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Media;
