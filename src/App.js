import React from 'react';

const favoriteFoods = [
  {
    id: 1,
    name: "kimchi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EhDEoNHa6MJ9YJKE9IN7rQHaDt%26pid%3DApi&f=1"
  },
  {
    id: 2,
    name: "ramen",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.V4QOhRbzCD9PNYnbjpp3mAHaEK%26pid%3DApi&f=1"
  },
  {
    id: 3,
    name: "apple",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vi98k7Pu8GemAoIRivf3yAHaDt%26pid%3DApi&f=1"
  },
  {
    id: 4,
    name: "pizza",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XF7m9Bf6YeFD7qCiUk9_lgHaEK%26pid%3DApi&f=1"
  }
]

function Food({ foodName, picture }) {
  return (
  <div>
    <h3>I like { foodName }</h3>
    <img src = {picture} alt = {foodName} />
  </div>
  );
}

function renderFood(item) {
  return <Food foodName = {item.name} picture = {item.image} />;
}

function App() {
  return (
    <div>
      {favoriteFoods.map(renderFood)}
    </div>
  );
}

export default App;
