import React, {useState, useEffect} from "react"
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
  <div key={id} className="  bg-secondary  m-2 d-inline col-3 ">
      {movies.title}  
      
       <br/><img src={movies.photo}/>
       <div className="reviewSection ">
        <Show/>  
        <Star/>
        <Like name={movies.title} key={movies.id}/>
    </div>         
    

  <p id="p">    {movies.year}<br/> 
   Director  :  {movies.director}</p>

</div>
  )}
</div>
</div>
)

 
 }


  