import React, { useState } from "react";
import EditBio from "./EditBio";
import "./Bio.css";

interface BioDetails {
  aboutMe: string;
  bloodGroup: string;
  resume?: File | null;
}

const Bio: React.FC = () => {
  const [bio, setBio] = useState<BioDetails>({
    aboutMe: "No about me added yet",
    bloodGroup: "",
    resume: null,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveBio = (updatedBio: BioDetails) => {
    setBio(updatedBio);
    setIsEditing(false);
  };

  if (isEditing) {
    return <EditBio bio={bio} onSaveBio={handleSaveBio} />;
  }

  return (

    <div className= "container">
      <h2>About Me</h2>
      <p>{bio.aboutMe}</p>
      <button onClick={handleEditClick}>Edit</button>
      <h2>Blood Group</h2>
      <p>{bio.bloodGroup}</p>
      {bio.resume && (
        <>
          <h2>Resume</h2>
          <p>Filename: {bio.resume.name}</p>
        </>
      )}
    </div>
  );
};

export default Bio;
