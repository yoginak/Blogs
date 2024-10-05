import React from 'react';

const Text = ({ title, description, projectOverview, technologies, features, keyLearnings, note }) => {
    return (
        <div className="project-text">
            {/* <h1>{title}</h1> */}
            <p>{description}</p>
            <h2>Project Overview</h2>
            <p>{projectOverview}</p>
            <h2>Technologies Used</h2>
            <ul>
                {Array.isArray(technologies) && technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <h2>Features</h2>
            <ul>
                {Array.isArray(features) && features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <h2>Key Learnings</h2>
            <ul>
                {Array.isArray(keyLearnings) && keyLearnings.map((learning, index) => (
                    <li key={index}>{learning}</li>
                ))}
            </ul>
            {note && (
                <div className="note">
                    <h2>Note</h2>
                    <p>{note}</p>
                </div>
            )}
        </div>
    );
};

export default Text;
