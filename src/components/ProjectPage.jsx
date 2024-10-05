import React from 'react';
import { useParams } from 'react-router-dom';
import Video from './Video';
import Text from './Text';

const projectData = {
    brainflix: {
        title: 'Behind the Scenes of BrainFlix: A Full-Stack Journey',
        description: 'In this blog post, I will take you behind the scenes of the development process for BrainFlix, a full-stack project that showcases my skills across various technologies, including React, React-Router, Node.js, Express, and APIs. I will share the technical details and standout features that make BrainFlix unique.',
        projectOverview: 'BrainFlix is a dynamic video-sharing application inspired by platforms like YouTube. Developed during my time at BrainStation, this project was completed over three one-week sprints, focusing on understanding the fundamentals of React, state management, React Router, component lifecycles, Node.js, and Express. Users can seamlessly browse through video pages using dynamic routing, upload videos, comment on them, and manage their comments. This interactive approach fosters user engagement and enhances the overall experience.',
        videoSrc: '/videos/Demo-Brainflix.mp4',
        technologies: ['React', 'Node.js', 'Express', 'APIs'],
        features: [
            'Fully Responsive Design: The application seamlessly adapts to various screen sizes, ensuring an optimal viewing experience on desktop, tablet, and mobile devices.',
            'Dynamic Video List: Users can easily browse and access the latest videos, keeping the content fresh and engaging.',
            'User-Friendly Video Upload Form: The application allows users to upload new videos directly, promoting interactivity and enhancing user engagement.',
            'Commenting System: Users can post and delete comments on videos and manage them easily, facilitating community interaction and feedback.'
        ],
        keyLearnings: [
            'Gained in-depth knowledge of React and its ecosystem, including state management and component lifecycles.',
            'Learned to implement dynamic routing with React Router, enhancing user experience through seamless navigation.',
            'Gained experience in developing RESTful APIs using Node.js and Express, enabling effective data management.',
            'Enhanced my skills in working with asynchronous operations and handling API requests for a smooth user experience.'
        ],
        note: "Due to intellectual property concerns, the repository for this project cannot be made public but can be provided for review upon request."
    },
        
    bandsite: {
        title: 'Behind the Scenes of Bandsite: A Comprehensive Band Website',
        description: 'In this blog post, I will take you through the development journey of Bandsite, a fully responsive front-end application designed for the fictional band "The Bees Knees." This project showcases my ability to create a dynamic and interactive multi-page website using HTML, vanilla JavaScript, and Sass for styling and visual responsiveness.',
        projectOverview: 'Bandsite is a fully functional website that presents concert dates and information about the band. Built with a focus on user experience, this project incorporates dynamic data fetched from an Express API hosted on Heroku, allowing users to post comments. Note that comments are refreshed every 24 hours, making this a demonstration project. Throughout the development process, I utilized BEM methodology for class naming and Flexbox for layout, ensuring a responsive design that adapts to various screen dimensions.',
        videoSrc: '/videos/Bandsite.mp4',
        technologies: ['HTML', 'CSS', 'Sass', 'JavaScript', 'Express', 'API'],
        features: [
            'Responsive Multi-Page Layout: The website adapts seamlessly to different screen sizes, ensuring optimal usability on both desktop and mobile devices.',
            'Dynamic Concert Information: Users can view concert dates and details, providing them with up-to-date information about the band.',
            'Interactive Commenting System: Users can post comments about the band and their concerts, fostering engagement and community interaction.',
            'Clean and Semantic Code: The application uses semantic HTML and adheres to BEM principles, resulting in clear and minimal markup.'
        ],
        keyLearnings: [
            'Proficient use of semantic HTML and BEM methodology for organized and maintainable markup.',
            'Enhanced skills in CSS layout techniques, specifically Flexbox and Sass, to create visually appealing designs.',
            'Gained experience in implementing responsive and mobile-first design principles.',
            'Utilized Axios for making API HTTP requests, enabling dynamic data interaction within the application.'
        ],
         note: "Due to intellectual property concerns, the repository for this project cannot be made public but can be provided for review upon request."
    },
    
    coffeeshop: {
        title: 'Nitro Coffee',
        description: 'A static, multi-page coffee shop website showcasing menu items, promotions, and contact information.',
        projectOverview: 'Coffeeshop, also known as Nitro Coffee, is my first web development project, built during my time at BrainStation using HTML and CSS. It features a clean layout to display menu items, current promotions, and contact details effectively.',
        videoSrc: '/videos/coffee-shop.mp4', 
        technologies: ['HTML', 'CSS'],
        features: [
            'Static Multi-Page Design: Users can easily navigate through different pages displaying the menu, promotions, and contact information.',
            'Animations: Incorporated various animations throughout the website to enhance user engagement and visual appeal.'
        ],
        keyLearnings: [
            'Developed responsive layouts and structured multi-page websites using HTML and CSS.',
            'Learned to create visually appealing designs that showcase menu items and promotions effectively.',
            'Gained experience in implementing animations to improve the user experience.'
        ],
         note: "Due to intellectual property concerns, the repository for this project cannot be made public but can be provided for review upon request."
    },
    

    instock: {
        title: 'Behind the Scenes of InStock: A Comprehensive Inventory Management System',
        description: 'In this blog post, I will share the journey of developing InStock, an inventory management system designed to emulate a real chain of warehouses. Our goal was to create an intuitive and powerful system that enables clients to efficiently manage their inventory across multiple locations.',
        projectOverview: 'InStock is a robust inventory management system built with a focus on the Model-View-Controller (MVC) architecture. Utilizing ReactJS for the front end and ExpressJS with Node.js for the back end, we developed a seamless application that interacts with a MySQL database via the Knex.js library. The system includes full CRUD functionality, empowering clients to create, read, update, and delete inventory items effortlessly.',
        videoSrc: '/videos/Bandsite.mp4',
        technologies: ['ReactJS', 'Node.js', 'ExpressJS', 'MySQL', 'Knex.js', 'SASS'],
        features: [
            'Full CRUD Functionality: Clients can easily manage inventory items, including adding, viewing, updating, and deleting records.',
            'Responsive User Interface: The application is designed to be user-friendly and adaptable to various screen sizes, ensuring a smooth experience on both desktop and mobile devices.',
            'Dynamic Dashboard: A real-time dashboard displays the total number of items in each warehouse, providing instant visibility into inventory levels.',
            'Intuitive Navigation: Users can navigate through different sections of the application with ease, making inventory management straightforward and efficient.'
        ],
        keyLearnings: [
            'Gained experience with the MVC design pattern, enhancing my understanding of application architecture.',
            'Strengthened my skills in using ReactJS for building dynamic user interfaces and improving user experience.',
            'Learned to implement full CRUD operations, providing a comprehensive understanding of data management in web applications.',
            'Gained proficiency in using Knex.js for database interactions, allowing seamless communication with the MySQL database.'
        ],
         note: "Due to intellectual property concerns, the repository for this project cannot be made public but can be provided for review upon request."
    },
};

const ProjectPage = () => {
    const { projectId } = useParams();
    const project = projectData[projectId.toLowerCase()]; 

    if (!project) {
        return <h2>Project Not Found</h2>;
    }

    return (
        <div className="project-page">
             {project.videoSrc ? (
                <Video src={project.videoSrc} title={project.title} />
            ) : (
                <p>Video not available for this project.</p>
            )}
            <Text 
                title={project.title} 
                description={project.description} 
                projectOverview={project.projectOverview} 
                technologies={project.technologies || []} 
                features={project.features || []}
                keyLearnings={project.keyLearnings || []}
                note={project.note}
            />           
        </div>
    );
};

export default ProjectPage;
