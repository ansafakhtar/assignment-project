import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  settingAboutMe,
  settingBloodGroup,
  settingResume,
} from "../features/bioSlice";
import { Link } from "react-router-dom";
import { AppDispatch } from "../store";

const EditBio: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [aboutMe, setAboutMe] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  const handleSave = () => {
    dispatch(settingAboutMe(aboutMe));
    dispatch(settingBloodGroup(bloodGroup));
    if (resume) {
      // Handle the file upload
      // For simplicity, I'm only storing the file name in the Redux store.
      dispatch(settingResume(resume.name));
    }
  };

  return (
    <div>
      <h2>Edit Bio</h2>
      <div>
        <label>About Me:</label>
        <textarea
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
          style={{ width: "90%", height: "200px" }}
        />
      </div>
      <div>
        <label>Blood Group:</label>
        <select
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
        >
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>
      <input
        type="file"
        onChange={(e) => setResume(e.target.files?.[0] || null)}
      />
      <button onClick={handleSave}>Save</button>
      <Link to="/">Back</Link>
    </div>
  );
};

export default EditBio;
