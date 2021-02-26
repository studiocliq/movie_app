import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true
  };


  getMovies = async () => {
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');

    return movies;
  }

  componentDidMount(){
    console.log("MOVIES!");
    console.log(this.getMovies());
  }

  render() {
    const { isLoading } = this.state;
    return(
      <div>
        <h1>{isLoading ? "Loading..." : "We are ready!"}</h1>
      </div>
    )
  }
}

export default App;
