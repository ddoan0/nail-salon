import React from 'react';
import img from '../home-page-red.jpg';

const Home = () => {
  return (
    <div>
      <h1 className="ui center aligned header">Nail Salon</h1>
      <p className="ui center aligned header">Welcome to Nail Salon!</p>
      <img className="ui large image centered" src={img} alt="red nails" />
    </div>
  );
}

export default Home;