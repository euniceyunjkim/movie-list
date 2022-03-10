import React from 'react';

var MovieList = (props) => (
  <div className ="movie-list">
   <div className= "movie-list-title">
     {props.movie.title}
   </div>
  </div>
);

export default MovieList;