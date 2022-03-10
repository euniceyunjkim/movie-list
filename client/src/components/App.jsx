import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMoviesBar from './AddMoviesBar.jsx';
import movies from './movies.jsx';

class App extends React.Component {
 constructor (props)  {
   super (props);

   this.state = {
     movies: movies,
     value: '',
     add: '',
   }
 }

filterMovieList(search) {
  this.findMovie(search, (movies) =>
    this.setState({
      movies: movies
    })
  );
  }

addMoviesList (input) {
  this.addedMovies(input, (movies) =>
   this.setState({
     movies: movies
   })
  )
}

findMovie (search, callback) {

  if(callback) {

    let input = search.toLowerCase();
    let result = [];

    for (var i = 0; i < movies.length; i++) {
      let current = movies[i];
      let title = current.title.toLowerCase();
      if (title.includes(input)) {
        result.push(current);
      }
    }

    if (result.length === 0) {
      result.push({title: 'no movie by that name found'})
    }

    callback(result);
  }
 }

addedMovies (input, callback) {
  if (callback) {
    movies.push({title: input});
    callback(movies);
  }
}

render () {
  return (
    <div>
      <h1>Movie List</h1>
      <div className= "add">
        <AddMoviesBar addInput= {this.addMoviesList.bind(this)}/>
      </div>
      <div className= "search">
        <SearchBar searchInput= {this.filterMovieList.bind(this)}/>
      </div>
      <div className= "movielist">
      {this.state.movies.map((movie) => <MovieList movie= {movie}/>)}
      </div>
    </div>
  );
}

}

export default App;