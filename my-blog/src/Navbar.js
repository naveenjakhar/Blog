import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = ({handleLogout}) => {
    return (
        <>
            <nav>
            
            
            <h2 className="d-none d-md-block">welcome</h2>
        
       <Link to="/user"><button className="button1" >Profile</button></Link>
       <Link to="/">
        <button className="button1" >Post Blog</button>
        </Link>
        <button className="button1" onClick={handleLogout}>Logout</button>
        </nav>
 
        </>
    )
}

export default Navbar
