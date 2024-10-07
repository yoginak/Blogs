import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.scss";

const Home = () => {
 
  const projects = [
    {
      title: 'BrainFlix',
      image: '/images/BrainFlix.png', 
      link: '/project/brainflix',
    },
    {
      title: 'Bandsite',
      image: '/images/Bandsite.png', 
      link: '/project/Bandsite',
    },
    {
      title: 'Coffee Shop',
      image: '/images/coffeeshop.png', 
      link: '/project/coffeeshop',
    },
    {
      title: 'Instock',
      image: '/images/Instock.png',
      link: '/project/instock',
    },
  ];

  return (
    <div className="home">
      <h1 className="project-header">My Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-item" key={project.title}>
            <Link to={project.link}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h2 className="project-title">{project.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
