import React from 'react';
import axios from 'axios';
import Movie from './Movie'
import './App.css';

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
    } = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json');

    var movieCopy = movies.slice();

    movieCopy.map( movie => {
      if(movie.genres === undefined) {
        movie.genres = ['UNKNOWN'];
      }
      return movie;
    })

    this.setState(
      { 
        isLoading: false,
        movies: movieCopy
      });
  }

  componentDidMount(){
    this.getMovies();
  }

  render() {
    const { movies, isLoading } = this.state;
    return(
      <div className="wrapper">
        { isLoading ? 
          <div className="loader">
            <span>Loading...</span>
          </div> :
          <div className="movies">
            {movies.map(movie => {
              return <Movie 
                key={movie.id}
                title={movie.title}
                summary={movie.summary}
                year={movie.year}
                poster={movie.medium_cover_image}
                genres={movie.genres}/>
            })}
          </div>
        }
      </div>
    )
  }
}

export default App;
