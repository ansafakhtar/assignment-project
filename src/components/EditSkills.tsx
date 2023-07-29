import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setAvailableSkills, setSelectedSkills } from '../features/skillsSlice'; 
import { Link } from 'react-router-dom';

const URL = 'https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetProfessionalSkillsResponse.json'; 

const EditSkills: React.FC = () => {
  const dispatch = useDispatch();
  const availableSkills = useSelector((state: RootState) => state.skills.availableSkills);
  const selectedSkills = useSelector((state: RootState) => state.skills.selectedSkills);

  useEffect(() => {
    fetch(URL)
      .then((response) => { 

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {

        const extracted = data.result[0].skills;

        const allSkills: string[] = [];  
         extracted.forEach((obj: { [x: string]: string; } | null) => {
            if (typeof obj === 'object' && obj !== null) {
              const keys = Object.keys(obj);
              if (keys.length > 0) {
                allSkills.push(obj[keys[1]]);
              }
            }
          });
          
          console.log(allSkills);
          dispatch(setAvailableSkills(allSkills));
        })
      .catch((error) => {
        console.error('Error fetching available skills:', error);
      });



  }, [dispatch]);

  const handleSkillSelect = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      dispatch(setSelectedSkills([...selectedSkills, skill]));
    }
  };

  // const handleSaveSkills = () => {
  //   console.log('Selected skills:', selectedSkills);
  // };

  return (
    <div>
      <h2>Selected Skills</h2>
      <ul>
        {selectedSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <br></br>
      <Link to="/">Back</Link>
      <br></br>
      <h2>Available Skills</h2>
      <ul>
        {availableSkills.map((skill) => (
          <li
            key={skill}
            onClick={() => handleSkillSelect(skill)}
            style={{ cursor: "pointer" }}
          >
            {skill}
          </li>
        ))}
      </ul>
      {/* <button onClick={handleSaveSkills}>Save</button> */}
    </div>
  );
};

export default EditSkills;
