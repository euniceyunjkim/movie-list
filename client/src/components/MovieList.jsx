import React from 'react';

var MovieList = (props) => (
  <div className ="movie-list">
   <div className= "movie-list-title">
     {props.movie.title}
     <button className = "watch-status" onClick={() => props.update(props.movie)}>{props.movie.status}</button>
   </div>
  </div>

);



export default MovieList;