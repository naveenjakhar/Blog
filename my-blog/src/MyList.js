import React from 'react'
import db from './Firebase_config';
export const MyList = ({ todo, id }) => {
    const deleteitem = () => {
        db.collection("todos").doc(id).delete();
        console.log("button toggle");
    }
   
    return (
        <>
            <div id="Datafieldb" className="col-11 col-md-12  mt-3 ml-md-3 ml-3 shadow-lg">
                <div className="row">
                <div className="col-12 ot pt-3">
                <div className="justify-content-center text-center"><h5> New Post</h5></div>
                    <div className="row">
                        <div  id="Datafieldw" className="col-12">
                        <div class="overlay1 ml-n3"></div>
                        <div class="button mt-2"   onClick={deleteitem}><a class="mr-2" href="#"> <i class="fas fa-trash-alt fa-1x my-auto"></i> </a></div>

                        <div id="dda">{todo }</div>
                        
                        </div>
                       
                    </div>
                    
                </div>
               
                    {/* <div id="Datafieldw" className="col-11 col-md-10 mb-4 justify-content-center text-center"><p>{todo}</p>

                    </div>
                    <div className="col-1 col-md-2 mb-4" id="Datafield1">
                        <div id="delete" onClick={deleteitem} className=" justify-content-center mt-5 shadow-lg ">
                            <i class="fas fa-trash-alt fa-1x my-auto"></i></div></div> */}

                </div>

            </div>
        </>
    )
}
