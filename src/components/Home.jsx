import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>My Projects Blog</h1>
      <ul>
        <li>
          <Link to="/project/brainflix">BrainFlix</Link>
        </li>
        <li>
          <Link to="/project/Bandsite">Bandsite</Link>
        </li>
        <li>
          <Link to="/project/coffeeshop">Coffee Shop</Link>
        </li>
        <li>
          <Link to="/project/instock">Instock</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
