import React from 'react';

const Skills = () => {
    const skills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Git'];

    return (
        <div>
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
