import React from 'react'
import './App.css';
import Mydata from './Mydata';
const Home=({handleLogout})=> {
    return (
        <>
            <section className="hero">
            <nav>
            <h2>Welcome</h2>
            <button className="button1" onClick={handleLogout}>Logout</button>
            </nav>
             <Mydata />   
                
            </section>
        </>
    )
}

export default Home
