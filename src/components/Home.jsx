import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>My Projects Blog</h1>
      <ul>
        <li>
          <Link to="/project/reflectify">Reflectify Project</Link>
        </li>
        <li>
          <Link to="/project/recipe-spark">Recipe Spark Project</Link>
        </li>
        {/* Add more links to projects here */}
      </ul>
    </div>
  );
};

export default Home;
