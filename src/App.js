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
      <section class="container">
        { isLoading ? 
          <div class="loader">
            <span>Loading...</span>
          </div> :
          <div class="movies">
            {movies.map(movie => {
              return <Movie key={movie.id} title={movie.title} summary={movie.summary} year={movie.year} poster={movie.medium_cover_image}/>
            })}
          </div>
        }
      </section>
    )
  }
}

export default App;
