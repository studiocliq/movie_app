import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0
  };

  plus = () => {
    this.setState(current => ({ count: current.count += 1 }));
  }

  minus = () => {
    this.setState(current => ({ count: current.count -= 1}));
  }

  componentDidMount(){
    console.log("I just mounted");
  }

  componentDidUpdate() {
    console.log("I just updated");
  }

  render() {
    console.log("I'm rendering");
    return(
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.plus}>PLUS</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    )
  }
}

export default App;
