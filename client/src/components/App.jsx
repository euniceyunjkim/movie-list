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
     watched: [],
     toWatch: []
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
      result.push({title: 'no movie by that name found', status: 'return'})
    }

    callback(result);
  }
 }

addedMovies (input, callback) {
  if (callback) {
    movies.push({title: input, status: "to watch"});
    callback(movies);
  }
}

change (movie) {
  let current = movie;

  if (current.status === "to watch") {
    current.status = "watched";
    this.filter("watched");
  } else {
    current.status = "to watch";
    // this.state.toWatch.push(current);
    this.filter("to watch");
  }
}

filter (clicked) {
  let result = [];

  for (var i = 0; i < movies.length; i++) {
    let current = movies[i];
    let status = current.status;
    if (status === clicked) {
      result.push(current);
    }
  }

  this.setState({
    movies: result
  })

}

render () {
  return (
    <div>
      <h1>Movie List</h1>
      <div className= "add">
        <AddMoviesBar addInput= {this.addMoviesList.bind(this)}/>
      </div>
      <button className= "watched" onClick={() => this.filter("watched")}>Watched</button>
      <button className= "to-watch" onClick={() => this.filter("to watch")}>To Watch</button>
      <div className= "search">
        <SearchBar searchInput= {this.filterMovieList.bind(this)}/>
      </div>
      <div className= "movielist">
      {this.state.movies.map((movie) => <MovieList movie= {movie} update= {this.change.bind(this)}/>)}
      </div>
    </div>
  );

}
}

export default App;