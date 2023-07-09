import { useState } from "react"

export default function Like (){
   const [likes, setLikes]= useState(0)
   const [dislikes, setDislikes]= useState(0)
   return(
<div>
    <button className="btn btn-success" onClick={()=>setLikes(likes=>likes+1)}>👍 {likes}</button>
    <button  className="btn btn-danger" onClick={()=>setDislikes(dislikes=>dislikes+1)}>👎 {dislikes}</button>

</div>


   )

}