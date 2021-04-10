import React, { useState, useEffect } from 'react'

import db from './Firebase_config';
import './Userpro.css'
const User = () => {
    const [blog, setBlog] = useState([]);
    const gettodos = () => {
        db.collection("user").onSnapshot(function (querySnapshot) {
            setBlog(querySnapshot.docs.map((doc) => ({
                id: doc.id,
                Name: doc.data().Name,
                phno: doc.data().phno,
                email: doc.data().email,
                img: doc.data().img,



            })));
        })
    }
    useEffect(() => {
        gettodos();
    }, [])
    return (
        <>
         {blog.map((todo)=>(
            <div className="container">
           
           <div className="row ">
               <div className="col mt-2 justify-content-center text-center ">
                   <img id="img" src={"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"} alt="avtar"></img>
                   <div className="row mt-3  justify-content-center text-center">
                       <p id="name">Name : {todo.Name}</p>
                       


                   </div>
                   <div className="row mt-1  justify-content-center text-center">
                    
                       <p id="name">Email :  {todo.email}</p>


                   </div>
                   <div className="row mt-1  justify-content-center text-center">
                       
                       <p id="name">Phno :  {todo.phno}</p>


                   </div>
               </div>
               
           </div>
           

       </div>
   
           
        
        ))}
        
       </>
    )
}

export default User
