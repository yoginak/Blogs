import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from '@mui/material'; // Import Material-UI components
import './Home.scss';
import Hero from './Hero';

const Home = () => {
  const projects = [
    {
      title: 'Reflectify',
      image: '/images/Reflectify.png',
      link: '/project/reflectify',
    },
    {
      title: 'Recipe Website',
      image: '/images/Recipe-project.png',
      link: '/project/recipespark',
    },
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box className="home">
      <Typography variant="h4" className="project-header">Discover My Projects</Typography>
      
        <p className='home__text'>I invite you to explore my curated collection of personal projects, each a reflection of my growth and dedication as a software developer. Throughout my learning journey, I have embraced challenges and sought innovative solutions, resulting in a diverse range of projects that showcase my technical skills and creativity. Thank you for taking the time to visit! I hope these projects provide you insight into my journey as a developer.</p>
      <Hero/>
      
      <Slider {...settings}>
        {projects.map((project) => (
          <Box className="project-item" key={project.title}>
            <Link className="project-link" to={project.link}>
              <img src={project.image} alt={project.title} className="project-image" />
              <Typography variant="h6" className="project-title">
                {project.title}
              </Typography>
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Home;
