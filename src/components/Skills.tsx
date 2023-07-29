import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Skills: React.FC = () => {
  const skills = useSelector((state: RootState) => state.skills.selectedSkills);
  const hobbies = useSelector((state: RootState) => state.skills.selectedHobbies);
  const subjects = useSelector((state: RootState) => state.skills.selectedSubjects);


  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>      

      <h2>Subjects</h2>
      <ul>
        {subjects.map((sub, index) => (
          <li key={index}>{sub}</li>
        ))}
      </ul>        
    </div>
  );
};

export default Skills;
