import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import "./Home.scss";
import Hero from "./Hero";

const Home = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: "Reflectify",
      image: `${import.meta.env.BASE_URL}images/Reflectify.png`,
      link: "/project/reflectify",
    },
    {
      title: "Recipe Website",
      image: `${import.meta.env.BASE_URL}images/Recipe-project.png`,
      link: "/project/recipespark",
    },
    {
      title: "BrainFlix",
      image: `${import.meta.env.BASE_URL}images/BrainFlix.png`,
      link: "/project/brainflix",
    },
    {
      title: "Bandsite",
      image: `${import.meta.env.BASE_URL}images/Bandsite.png`,
      link: "/project/bandsite",
    },
    {
      title: "Coffee Shop",
      image: `${import.meta.env.BASE_URL}images/coffeeshop.png`,
      link: "/project/coffeeshop",
    },
    {
      title: "Instock",
      image: `${import.meta.env.BASE_URL}images/Instock.png`,
      link: "/project/instock",
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

  const handleImageClick = (link) => {
    navigate(link);
    window.scrollTo(0, 0);
  };

  return (
    <Box className="home">
      <p className="home__text">
        Explore my collection of personal projects that reflect my learning
        journey as a software developer. Each project showcases my commitment to
        continuous growth, innovative problem-solving, and mastery of diverse
        technologies. From user-friendly interfaces to robust back-end
        solutions, my work highlights both technical skills and creativity.
        Thank you for taking the time to visit! I hope these projects provide
        you insight into my journey as a developer.
      </p>
      <Hero />

      <Slider {...settings}>
        {projects.map((project) => (
          <Box className="project-item" key={project.title}>
            <div
              className="project-link"
              onClick={() => handleImageClick(project.link)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <Typography variant="h6" className="project-title">
                {project.title}
              </Typography>
            </div>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Home;
