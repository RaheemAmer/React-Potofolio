import React from "react";
import { Link } from 'react-router-dom';

const Navbar = ( active ) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light rounded text-center ">
            {
                active.active === 'home' ? <Link to='/' className="btn btn-outline-primary m-2" >Home</Link> : <Link to='/' className="btn btn-light m-2" >Home</Link>
            }
            {
                active.active === 'about' ? <Link to='/About' className="btn btn-outline-primary m-2" >About</Link> : <Link to='/About' className="btn btn-light m-2" >About</Link>
            }
            {
                active.active === 'skills' ? <Link to='/Skills' className="btn btn-outline-primary m-2" >Skills</Link> : <Link to='/Skills' className="btn btn-light m-2" >Skills</Link>
            }
            {
                active.active === 'channel' ? <Link to='/Social' className='btn btn-outline-primary m-2' >Social Media</Link> : <Link to='/Social' className='btn btn-light m-2' >Social Media</Link>
            }
            {
                active.active === 'project' ? <Link to='/Projects' className="btn btn-primary m-2" >Projects</Link> : <Link to='/Projects' className="btn btn-light m-2" >Projects</Link>
            }
            {
                active.active === 'Login' ? <Link to='/Login' className="btn btn-primary m-2" >Login</Link> : <Link to='/Login' className="btn btn-light m-2" >Login</Link>
            }
            {
                active.active === 'SignUp' ? <Link to='/SignUp' className="btn btn-primary m-2" >SignUp</Link> : <Link to='/SignUp' className="btn btn-light m-2" >SignUp</Link>
            }            
            {
                active.active === 'Register' ? <Link to='/Register' className="btn btn-primary m-2" >SignUp</Link> : <Link to='/Register' className="btn btn-light m-2" >Register</Link>
            }  
        </nav>
        
    )
};

export default Navbar;
