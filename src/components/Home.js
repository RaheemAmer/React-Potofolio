import React from "react";
import Navbar from "./Navbar";
import avatar from '../Images/avatar.png';
import Typed from 'react-typed';

const Home = () => {

return (
<div>
    <Navbar active='home' />
        <div className="home container text-center">
            <header class="masthead bg-primary text-white text-center">
                <div class="container d-flex align-items-center flex-column">
                    <img class="masthead-avatar mb-5" src={avatar} alt="..." />
                        <h1 class="masthead-heading text-uppercase mb-0">Hello,  
                        <span className="text-warning">
                            <Typed className="masthead-subheading font-weight-light mb-0" 
                                strings={['Raheem']}typeSpeed={40}/>
                                </span>
                                is here
                            </h1>
                            <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                            <br />
                            <div>
                                <h3 className="text-warning font-weight-light mb-0">
                                    I'm a 
                                    <Typed className="text-typed text-info font-weight-light" strings={[
                                    ' Graphic Artist',
                                    ' Web Developer',
                                    ' Gamer',
                                    ' Cat Dad',]} 
                                    typeSpeed={80} backSpeed={80} attr="placeholder" loop >
                                    <input className="text-typed text-info font-weight-light" type="text"/>
                                    </Typed>
                                </h3>
                            </div>
                        </div>
                    </div>
                </header> 
            </div> 
        <div>
    </div>
</div>
    )
};

export default Home;