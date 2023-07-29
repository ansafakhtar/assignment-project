import React, { useState, useEffect } from "react";

interface EditSkillsProps {
    onSaveSkills: (selectedSkills: string[]) => void;
}

const EditSkills: React.FC<EditSkillsProps> = ({onSaveSkills}) => {
  const [fetchedSkills, setFetchedSkills] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const fetchSkill = async () => {
    try {
      const res = await fetch(
        "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetProfessionalSkillsResponse.json"
      );
      const data = await res.json();
      console.log(data);
      setFetchedSkills(data.skills.value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSkill();
  }, []);

  const handleSkillChange = (skill: string) => {
    setSelectedSkills((prev)=>
    prev.includes(skill) ?
    prev.filter((s) => s !== skill)
    :
    [...prev, skill]
    )
  }

  const handleSaveClick = () => {
    onSaveSkills(selectedSkills);
  }

  return (
    <div>
      <h2>Edit Skills</h2>
      {fetchedSkills.map((skill, index) => (
        <div key={index}>
          <label>
            <input typeof="checkbox" value={skill}
            checked={selectedSkills.includes(skill)}
            onChange={() => handleSkillChange(skill)}
            />
            {skill}
          </label>
        </div>
      ))}
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
};

export default EditSkills;
