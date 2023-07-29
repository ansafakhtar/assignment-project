import React from "react";
import {Link} from "react-router-dom";

interface SkillsProps {
    skills: string[];
}

const Skills: React.FC<SkillsProps> = ({skills}) => {


    return (
    <div>
        <h2>Skills</h2>
        <ul>
            {skills.map((skill,index)=>(
                <li key={index}> {skill}</li>
            ))}
        </ul>
        <Link to="/editskills">Edit</Link>
    </div>
    )
}

export default Skills;