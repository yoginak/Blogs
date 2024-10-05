import React from 'react';
import { useParams } from 'react-router-dom';
import Video from './Video';
import Text from './Text';

const projectData = {
  reflectify: {
    title: 'Reflectify',
    description: 'A mood tracking and journaling app that helps users visualize their mood trends and gain insights using AI.',
    videoSrc: '/videos/reflectify-demo.mp4', // Place your video file URL here
  },
  'recipe-spark': {
    title: 'Recipe Spark',
    description: 'An application that provides users with recipe recommendations based on selected categories.',
    videoSrc: '/videos/recipe-spark-demo.mp4', // Place your video file URL here
  },
  // Add more projects here
};

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <div>
      <Text title={project.title} description={project.description} />
      <Video src={project.videoSrc} title={project.title} />
    </div>
  );
};

export default ProjectPage;
