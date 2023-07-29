import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Bio from './Bio';
import EditBio from './EditBio';
// import Skills from './Skills';
import EditSkills from './EditSkills';
import Home from './Home';

const MyRoutes: React.FC = () => {
  return (
    <>
    <Routes>
      <Route>
        <Route  path="/" Component={Home} />
        <Route  path="/bio" Component={Bio} />
        <Route  path="/bio/edit" Component={EditBio} />
        {/* <Route  path="/skills" Component={Skills} /> */}
        <Route  path="/skills/edit" Component={EditSkills} />
      </Route>
    </Routes>
    </>
  );
};

export default MyRoutes;
