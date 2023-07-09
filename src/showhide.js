import { useState } from "react";
import ReviewForm from "./reviewForm";

function Show (){
    const  [show, setShow]= useState(false)
    const click =(e)=>{
        setShow(!show)
        e.preventDefault()
    }


    return(
        <div>
            <br/>
            {show? <ReviewForm />: null}
            <button className="btn btn-warning mt-0" onClick={click}>Leave Review</button>
        </div>
    )
}
export default Show