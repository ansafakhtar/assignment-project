import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Skills: React.FC = () => {
  const skills = useSelector((state: RootState) => state.skills.selectedSkills);

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      {/* <button>Edit</button> */}
    </div>
  );
};

export default Skills;
