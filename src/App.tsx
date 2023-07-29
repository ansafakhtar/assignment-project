import { useState } from "react";
import "./App.css";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import EditSkills from "./components/EditSkills";
import { Route, Routes } from "react-router-dom";

function App() {

  const [skills,setSkills] = useState<string[]>([]);

  const handleSave = (selectedSkills: string[]) => {
    setSkills(selectedSkills);
  }

  return (
  <>
    <div className="app-container">
      <div className="page-container">
        <Bio />
        {/* <Skills skills={skills}/>
        <EditSkills onSaveSkills={handleSave}/> */}
        {/* <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="/skills" element={<Skills skills={skills}/>} />
          <Route path="/editskills" element={<EditSkills onSaveSkills={handleSave}/>} />
        </Routes> */}
      </div>
    </div>
    </>
  );
}

export default App;
