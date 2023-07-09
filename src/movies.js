import React, {useState} from "react"
import Star from './stars'
import Zorro from './lovebirds.JPG'
import ReviewForm from "./reviewForm"
import Show from "./showhide"
import  Like  from "./likes"


export const Movies =()=> {
  const [movieList]= useState([{
    id:1, title:'The Mask of zorro' , year:2023, director: 'Martin', photo: Zorro, likes:0, disLike:0}, {
      id:2, title:'The Mask of zorro' , year:2023, director: 'Martin', photo: Zorro, likes:0, disLike:0},{
        id:3, title:'The Mask of zorro' , year:2023, director: 'Martin', photo: Zorro, likes:0, disLike:0},{
          id:4, title:'The Mask of zorro' , year:2023, director: 'Martin', photo: Zorro, likes:0, disLike:0},{
            id:5, title:'The Mask of zorro' , year:2023, director: 'Martin', photo: Zorro, likes:0, disLike:0},{
              id:6, title:'The Mask of zorro' , year:2023, director: 'Martin', photo: Zorro, likes:0, disLike:0}
       ]
    )
  const [movie, setMovie]=useState([{likes:0}])

const handleClick= ()=> {
  // movie.id==event.currentTarget.id?

   setMovie(pre=>{return [...pre, {likes: +1, id:crypto.randomUUID() }]})
 
  }
return(<div className="container">
  {/* {movie.map(like=> */}
          {/* )} */}
  
  <div id='card' className="card justify-content-center row "> 

 {movieList.map((movies,id)=> 
  <div key={id} className="  bg-secondary align-items-center m-2 d-inline col-3 ">
      {movies.title}  
      
       <br/><img src={movies.photo}/>
        <br/>
        <Show/><br/>  <Star/> <br/> 
        <Like />
             
    
<br/>
      {movies.year}<br/> 
   Director BY :  {movies.director}

</div>
  )}
</div>
</div>
)

 
 }


  