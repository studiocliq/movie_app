import React from 'react';
import axios from 'axios';
import Movie from './Movie'

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { 
      data: {
        data: { movies }
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');

    this.setState(
      { 
        isLoading: false,
        movies: movies
      });
  }

  componentDidMount(){
    this.getMovies();
  }

  render() {
    const { movies, isLoading } = this.state;
    return(
      <div>
        { isLoading ? "Loading..." : movies.map(movie => {
          return <Movie key={movie.id} id={movie.id} title={movie.title} summary={movie.summary} year={movie.year} poster={movie.medium_cover_image}/>
        })}
      </div>
    )
  }
}

export default App;
