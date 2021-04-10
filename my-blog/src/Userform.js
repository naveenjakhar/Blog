import React,{useState, useEffect} from 'react'
import db from './Firebase_config';


const Userform = () => {
   
    const [blog, setBlog]=useState([]);
    
    const [name, setName]=useState('');
    const [email, setEmail] = useState('');
    const [phno, setPhno] = useState('');
    const [img, setImg] = useState('');

    
    console.log(name);
    const updateitem = () => {
        db.collection("user").doc('5ceQaUUH8GFVlFuVG9bt').update(
            {
                Name : name,
                email: email,
                phno : phno,
                img : img,
            }
            

        );
        setName("");
        setEmail("");
        setPhno("");
        setImg("");


    }
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
        <div className="container">
        <div className="justify-content-center text-center"><p id="upd">Update Your Detail</p></div>
        <form class="row g-3 mt-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Name</label>
    <input onChange={(e)=> {setName (e.target.value)}} value={name} type="text" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Email</label>
    <input onChange={(e)=> {setEmail (e.target.value)}} type="email" value={email} class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Phno</label>
    <input onChange={(e)=> {setPhno (e.target.value)}} type="number" value={phno} class="form-control" id="inputAddress" placeholder="Phone No."/>
  </div>
  <div class="col-md-6">
  <label for="formFile" class="form-label">Profile pic</label>
  <input value={img} onChange={(e)=> {setImg (e.target.value)}} class="form-control" type="file" id="formFile" />
  </div>
  
  
 
  
  <div class="col-12 justify-content-center text-center mt-4 ">
    <button type="button" class="btn btn-warning" onClick={updateitem}>Update</button>
  </div>
  
</form>
            
        </div>
        
        </>
    )
}

export default Userform
