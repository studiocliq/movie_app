import React from 'react';

function Food({ favorite, second }) {
  return <div>I like { favorite } and  { second }</div>
}


function App() {
  return (
  <div>
    <h1>HELLO</h1>

    <Food favorite="kimchi" second = "sugar"/>
    <Food favorite="ramen" second = "salt"/>
    <Food favorite="apple" second = "ractose"/>
    <Food favorite="pizza" second = "cheese"/>
  </div>);
}

export default App;
