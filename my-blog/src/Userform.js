import React,{useState, useEffect} from 'react'
import db from './Firebase_config';
import { storage } from "./fire";
import { render } from "react-dom";
const Userform = () => {
  

    const [blog, setBlog]=useState([]);
    
    const [name, setName]=useState('');
    const [email, setEmail] = useState('');
    const [phno, setPhno] = useState('');
    const [img, setImg] = useState('');
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
  
    
    console.log(name);
    const updateitem = () => {
        db.collection("user").doc('5ceQaUUH8GFVlFuVG9bt').update(
            {
                Name : name,
                email: email,
                phno : phno,
                img : url,
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
      const handleChange = e => {
        if (e.target.files[0]) {
          setImage(e.target.files[0]);
        }
      };
    
      const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                setUrl(url);
              });
          }
        );
      };
    
      console.log("image: ", image);
    return (
        <>
        <div className="container">
        <div className="justify-content-center text-center"><p id="upd">Update Your Detail</p></div>
        <form class="row g-3 mt-3" >
  <div class="col-md-6">
    <label for="inputName4" class="form-label">Name</label>
    <input onChange={(e)=> {setName (e.target.value)}} value={name} type="text" class="form-control" id="inputName4" required  />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Email</label>
    <input onChange={(e)=> {setEmail (e.target.value)}} type="email" value={email} class="form-control" id="inputPassword4" required />
  </div>
  <div class="col-md-6">
    <label for="inputPhone4" class="form-label">Phno</label>
    <input onChange={(e)=> {setPhno (e.target.value)}} type="number" value={phno} class="form-control" id="inputPhone4" placeholder="Phone No." required/>
  </div>
  <div class="col-md-6">
  <label for="formFile" class="form-label">Profile pic</label>
  <input value={img} onChange={handleChange} class="form-control" type="file" id="formFile" required />
  </div>
  
  <div class="col-12 justify-content-center text-center mt-4 ">
 
         <div className="row ">
         <progress value={progress} max="100" />
         </div>
      
    <button type="button" class="btn btn-danger mr-2"  onClick={handleUpload} required>Upload</button>
  
    <button type="submit" class="btn btn-warning" onClick={updateitem} >Update</button>
     

  </div>
 
  
  
  
</form>
            
    
           
        </div>
        
        </>
    )
}

export default Userform
