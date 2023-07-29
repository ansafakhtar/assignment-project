import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import {
  setAvailableSkills,
  setSelectedSkills,
  setAvailableHobbies,
  setSelectedHobbies,
  setAvailableSubjects,
  setSelectedSubjects,
} from "../features/skillsSlice";
import { Link } from "react-router-dom";

const URL = "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetProfessionalSkillsResponse.json";
const URL_HOBBIES = "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetHobbiesResponse.json";
const URL_SUBJECTS = "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetSubjectsResponse.json";

const EditSkills: React.FC = () => {

  const dispatch = useDispatch();

  const availableSkills = useSelector(
    (state: RootState) => state.skills.availableSkills
  );
  const selectedSkills = useSelector(
    (state: RootState) => state.skills.selectedSkills
  );

  const availableHobbies = useSelector(
    (state: RootState) => state.skills.availableHobbies
  );  
  const selectedHobbies = useSelector(
    (state: RootState) => state.skills.selectedHobbies
  );

  const availableSubjects = useSelector(
    (state: RootState) => state.skills.availableSubjects
  );
  const selectedSubjects = useSelector(
    (state: RootState) => state.skills.selectedSubjects
  );  

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const extracted = data.result[0].skills;

        const allSkills: string[] = [];
        extracted.forEach((obj: { [x: string]: string } | null) => {
          if (typeof obj === "object" && obj !== null) {
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
        console.error("Error fetching available skills:", error);
      });
  }, [dispatch]);

  useEffect(() => {
    fetch(URL_HOBBIES)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const extracted = data.result[0].hobbies;

        const allHobbies: string[] = [];
        extracted.forEach((obj: { [x: string]: string } | null) => {
          if (typeof obj === "object" && obj !== null) {
            const keys = Object.keys(obj);
            if (keys.length > 0) {
              allHobbies.push(obj[keys[1]]);
            }
          }
        });

        console.log(allHobbies);
        dispatch(setAvailableHobbies(allHobbies));
      })
      .catch((error) => {
        console.error("Error fetching available skills:", error);
      });
  }, [dispatch]);

  useEffect(() => {
    fetch(URL_SUBJECTS)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const extracted = data.result[0].subjects;

        const allSubjects: string[] = [];
        extracted.forEach((obj: { [x: string]: string } | null) => {
          if (typeof obj === "object" && obj !== null) {
            const keys = Object.keys(obj);
            if (keys.length > 0) {
              allSubjects.push(obj[keys[1]]);
            }
          }
        });

        console.log(allSubjects);
        dispatch(setAvailableSubjects(allSubjects));
      })
      .catch((error) => {
        console.error("Error fetching available skills:", error);
      });
  }, [dispatch]);

  const handleSkillSelect = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      dispatch(setSelectedSkills([...selectedSkills, skill]));
    }
  };

  const handleHobbiesSelect = (hobby: string) => {
    if (!selectedHobbies.includes(hobby)) {
      dispatch(setSelectedHobbies([...selectedHobbies, hobby]));
    }
  };

  const handleSubjectsSelect = (subject: string) => {
    if (!selectedSubjects.includes(subject)) {
      dispatch(setSelectedSubjects([...selectedSubjects, subject]));
    }
  };  

  // const handleSaveSkills = () => {
  //   console.log('Selected skills:', selectedSkills);
  // };

  return (
    <div>
      <h3>Selected Skills</h3>
      <ul>
        {selectedSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <h3>Selected Hobbies</h3>
      <ul>
        {selectedHobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
      <h3>Selected Subjects</h3>
      <ul>
        {selectedSubjects.map((sub) => (
          <li key={sub}>{sub}</li>
        ))}
      </ul>



      <h3>Available Skills</h3>

      <select id="skills" name="skills" multiple size={6}>
        {availableSkills.map((skill) => (
          <option
            key={skill}
            onClick={() => handleSkillSelect(skill)}
            style={{ cursor: "pointer" }}
          >
            {skill}
          </option>
        ))}
      </select>

      <h3>Available Hobbies</h3>

      <select id="hobbies" name="hobbies" multiple size={6}>
        {availableHobbies.map((hobby) => (
          <option
            key={hobby}
            onClick={() => handleHobbiesSelect(hobby)}
            style={{ cursor: "pointer" }}
          >
            {hobby}
          </option>
        ))}
      </select>

      <h3>Available Subjects</h3>

      <select id="subjects" name="subjects" multiple size={6}>
        {availableSubjects.map((sub) => (
          <option
            key={sub}
            onClick={() => handleSubjectsSelect(sub)}
            style={{ cursor: "pointer" }}
          >
            {sub}
          </option>
        ))}
      </select>      
      {/* <button onClick={handleSaveSkills}>Save</button> */}

      <br></br>
      <br></br>  
      <Link to="/"><button>Back</button></Link>
    </div>
  );
};

export default EditSkills;
