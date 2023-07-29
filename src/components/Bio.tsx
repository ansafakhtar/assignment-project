import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Link } from 'react-router-dom';

const Bio: React.FC = () => {
  const bio = useSelector((state: RootState) => state.bio);

  return (
    <div>
      <h2>About Me</h2>
      <p>{bio.aboutMe}</p>
      <p>Blood Group: {bio.bloodGroup}</p>
      {bio.resume && <a href={bio.resume}>Download Resume</a>}
      <Link to="/bio/edit">Edit</Link>
    </div>
  );
};

export default Bio;

