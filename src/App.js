import React from 'react';
import PropTypes from 'prop-types';

const favoriteFoods = [
  {
    id: 1,
    name: "kimchi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EhDEoNHa6MJ9YJKE9IN7rQHaDt%26pid%3DApi&f=1",
    rating: 5.0
  },
  {
    id: 2,
    name: "ramen",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.V4QOhRbzCD9PNYnbjpp3mAHaEK%26pid%3DApi&f=1",
    rating: 4.9
  },
  {
    id: 3,
    name: "apple",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vi98k7Pu8GemAoIRivf3yAHaDt%26pid%3DApi&f=1",
    rating: 4.8
  },
  {
    id: 4,
    name: "pizza",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XF7m9Bf6YeFD7qCiUk9_lgHaEK%26pid%3DApi&f=1",
    rating: 4.7
  }
]

function Food({ foodName, picture, rating }) {
  return (
  <div>
    <h3>I like { foodName }</h3>
    <img src = {picture} alt = {foodName} />
    <h3>Rating {rating} / 5.0</h3>
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  rating: PropTypes.number.isRequired
}

function renderFood(item) {
  return <Food foodName = {item.name} picture = {item.image} key={item.id} rating={item.rating}/>;
}

function App() {
  return (
    <div>
      {favoriteFoods.map(renderFood)}
    </div>
  );
}

export default App;
