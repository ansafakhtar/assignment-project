import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./EditBio.css";

interface BioDetails {
  aboutMe: string;
  bloodGroup: string;
  resume?: File | null;
}

interface EditBioProps {
  bio: BioDetails;
  onSaveBio: (updatedBio: BioDetails) => void;
}

const EditBio: React.FC<EditBioProps> = ({ bio, onSaveBio }) => {
  const [editedBio, setEditedBio] = useState<BioDetails>(bio);

  const handleSaveClick = () => {
    onSaveBio(editedBio);
  };

  return (
    <div className="edit-container">
      <div>
        <ArrowBackIosIcon />
        <h2>My Bio</h2>
      </div>
      <p>Write something about yourself?</p>
      <textarea
        value={editedBio.aboutMe}
        onChange={(e) =>
          setEditedBio({ ...editedBio, aboutMe: e.target.value })
        }
        style={{ width: "90%", height: "200px" }}
      />

      <h2>Upload Resume</h2>
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => {
          const file = e.target.files && e.target.files[0];
          if (file && file.size <= 5000) {
            setEditedBio({ ...editedBio, resume: file });
          } else {
            setEditedBio({ ...editedBio, resume: null });
          }
        }}
      />

      <h2>Select Blood Group</h2>
      <select
        value={editedBio.aboutMe}
        onChange={(e) =>
          setEditedBio({ ...editedBio, bloodGroup: e.target.value })
        }
        style={{ width: "90%", height: "50px" }}
      >
        <option value="">Select Blood Group</option>
        <option value="A+">A+</option>
        <option value="B+">B+</option>
        <option value="O+">O+</option>
        <option value="AB+">AB+</option>
      </select>

      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
};

export default EditBio;
