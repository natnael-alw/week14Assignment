import React, { useEffect, useState } from "react";
import { ReviewList } from "./reveiwlist";
import Show from "./showhide";


export default function(){
    const [user, setUser]=useState("")
    const [review, setReview] =useState("");
    const [reviewList, setList]= useState([])

    
//  [ reviewList, setList] = useState(()=>{
//         const local = localStorage.getItem("ITEM")
//         if(local==null) 
//         return []
//         return JSON.parse(local)
// })

//     useEffect(()=>{
//         localStorage.setItem('ITEMS', JSON.stringify(reviewList))
//     }, [reviewList])

   function handleChange(event){
setReview(event.target.value)
}
function handleUser(event){
    setUser(event.target.value)
}
function handleSubmit(event){
    event.preventDefault()
    setList(currentList=>{return[...currentList,
        {id: crypto.randomUUID(), content: review, user:user}]})
        setUser("")
        setReview("")
    }
    const [show, setShow]= useState(false)
    function clickMe(){
        setShow(!show)
    }
    // console.log(e.target.value)
    
return(
    <div>
    {/* <p className="reviewHeader">Review Center</p> */}
    
    

    <form onSubmit={handleSubmit}  
     className="form-control bg-secondary">
        <div className="form-row">
       {/* <Review reviews={allReview}/> */}
    <input placeholder="enter user name" onChange={handleUser}/>
    <textarea onChange={handleChange} type='text'
     placeholder="type review"/>
     <br/>
    </div>
    <button   className="btn btn-primary"  
    value="">Submit</button>
    </form>
    <ul>
        {reviewList.map(x=> {
            return (<li key={x.id}>
      <button className="btn" onClick={clickMe}> <p>{show? x.content :'...'} </p> </button>
       <br/>
     <p> User:{x.user}</p>
    </li>
    )
})}
        </ul>
       <ReviewList list={reviewList}/>
    </div> 
)
}