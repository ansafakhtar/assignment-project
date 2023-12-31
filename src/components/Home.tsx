import React from 'react';
import { Link } from 'react-router-dom';
import Bio from './Bio';
import Skills from './Skills';

const Home: React.FC = () => {
  return (
    <div>
      <h1>My Profile</h1>
      <Bio />
      <br></br>
      <Link to="/bio/edit"><button>Edit Bio</button></Link>
      <br></br>   
      <br></br>     
      <Skills />
      <br></br>
      <Link to="/skills/edit"><button>Edit Skills</button></Link>
    </div>
  );
};

export default Home;
