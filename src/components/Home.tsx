import React from 'react';
import { Link } from 'react-router-dom';
import Bio from './Bio';
import Skills from './Skills';

const Home: React.FC = () => {
  return (
    <div>
      <h1>My Profile</h1>
      <Bio />
      <Link to="/bio/edit">Edit Bio</Link>
      <Skills />
      <Link to="/skills/edit">Edit Skills</Link>
    </div>
  );
};

export default Home;
