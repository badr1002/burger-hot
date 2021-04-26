import React from "react";

const NotFound=()=>{
    return(
       <React.Fragment>
           <div className='container text-center'>
                <div className="alert alert-danger m-3" role="alert">
            This page not found!
        </div>
           </div>
       </React.Fragment>
    )
}
export default NotFound;