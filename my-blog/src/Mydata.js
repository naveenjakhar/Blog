import React,{useState, useEffect} from 'react'
import db from './Firebase_config';
import './Appbody.css';
import { MyList } from './MyList';

function Mydata() {
    
    const [todos, setTodos]=useState([]);
    const [todo, setTodo] = useState('');
    

    useEffect(() => {
       gettodos();
    }, []);
   
    const addTodo=(e)=>{
        e.preventDefault();
        db.collection("todos").add({
            todo: todo,
        });
        setTodo("");
        

    }
   
    const resetinput=()=>{
        setTodo("");
    }
    const gettodos=()=>{
        db.collection("todos").onSnapshot(function (querySnapshot) {
            setTodos(querySnapshot.docs.map((doc)=>({
                id:doc.id,
                todo : doc.data().todo,
            })));
        })
    }
    
    return (
        <div className="container mt-5">
       
            <form >
            <div className="row">
            <div className="col-8 col-md-11 ">
            <textarea  autocomplete="off" id="inp" type="text" value={todo} onChange={(e)=> {setTodo (e.target.value)}}></textarea></div>
            <div className="col-4 col-md-1 ">
            <button type="submit" className="btn btn-primary w-80 " onClick={addTodo}>Post</button>  <br></br>
            <button onClick={resetinput} type="button"  className="btn btn-danger w-80 mt-3" >Clear</button> </div>
              
        </div>
            </form>
           
            <div className="row">
        {todos.map((todo)=>(
            
               <MyList todo={todo.todo} id={todo.id} />
            
            ))}
            </div>
           
        </div>
        
    )
}

export default Mydata
