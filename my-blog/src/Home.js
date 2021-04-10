import React,{useState, useEffect} from 'react'
import db from './Firebase_config';
import {Route, Switch,BrowserRouter} from 'react-router-dom';
import './App.css';
import Mydata from './Mydata';
import Profile from './Profile';
import Navbar from './Navbar';

const Home=({handleLogout})=> {
    const [blog, setBlog]=useState([]);
    const gettodos=()=>{
        db.collection("user").onSnapshot(function (querySnapshot) {
            setBlog(querySnapshot.docs.map((doc)=>({
                id:doc.id,
                Name : doc.data().Name,
            })));
        })
    }
    useEffect(() => {
        gettodos();
      }, [])
    return (
        <>
            <section className="hero">
           
            <BrowserRouter>
            <Navbar  handleLogout={handleLogout} ></Navbar>
     <Switch>
     
        <Route exact path="/user" component={Profile}/>
        <Route exact path="/" component={Mydata}/>
        

        
        
      </Switch>
    
      </BrowserRouter>
                
            </section>
        </>
    )
}

export default Home
