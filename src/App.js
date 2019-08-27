import React from 'react';
import PropTypes from "prop-types";



const foodILike = [
  {
    id : 1,
    name : "kimchi",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg" ,
    rating: 5
  },
  {
    id : 2,
    name : "bibimpap",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/1200px-Dolsot-bibimbap.jpg" ,
    rating: 4.9
  },
  {
    id : 3,
    name : "samgyupsal",
    image: "http://sites.psu.edu/jiyoonpassionblog/wp-content/uploads/sites/21669/2015/02/20140603181421_7159.jpg" ,
    rating: 4.8
  },
  {
    id : 4,
    name : "kimbap",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Vegetable_gimbap.jpg/1200px-Vegetable_gimbap.jpg" ,
    rating: 4.7
  }
]

function Food({name, picture, rating}) {
  return <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
        {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name = {dish.name} 
          picture={dish.image} 
          rating={dish.rating}
          /> 
        ))}
      </div>
  );
}

export default App;
