import React from 'react';
import "./Text.scss";

const Text = ({ title, description, projectOverview, technologies, features, keyLearnings, note }) => {
    return (
        <div className="project-text">
            <p className="project-description">{description}</p>

            <h2>Project Overview</h2>
            <p className='text__overview'>{projectOverview}</p>

            <h2 className='text__tech-title'>Technologies Used</h2>
            <ul className='text__tech-list'>
                {Array.isArray(technologies) && technologies.map((tech, index) => (
                    <li className='text__tech-listitem' key={index}>{tech}</li>
                ))}
            </ul>

            <h2 className='text__features-title'>Features</h2>
            <ul className='text__features-list'>
                {Array.isArray(features) && features.map((feature, index) => (
                    <li className='text__features-list-item' key={index}>{feature}</li>
                ))}
            </ul>

            <h2 className='text__learnings-title'>Key Learnings</h2>
            <ul className='text__learnings-list'>
                {Array.isArray(keyLearnings) && keyLearnings.map((learning, index) => (
                    <li className='text__learnings-list-item' key={index}>{learning}</li>
                ))}
            </ul>

            {note && (
                <div className="text__note">
                    <h2 className='text__note-heading'>Note</h2>
                    <p className='text__note-body' dangerouslySetInnerHTML={{ __html: note }} />
                </div>
            )}
        </div>
    );
};

export default Text;
