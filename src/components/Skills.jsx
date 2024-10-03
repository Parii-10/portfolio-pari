import React from "react";
import "../components/Skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <h2>Relevant Skills:</h2>
      <div className="skills-div">
        <ul>
          <li>HTML & CSS</li>
          <li>Javascript (ES6+)</li>
          <li>React.js</li>
        </ul>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;