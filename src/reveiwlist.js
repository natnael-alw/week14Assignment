import React, {useState} from "react";

export function ReviewList(list){
    const [reviewList, setList]= useState([])

    return(
        <ul>
        {reviewList.map(x=> {
            
   return (<li key={x.id}>
      user:{x.user}  <br/>{x.title} 
    </li>
    )
})}
        </ul>
)
}