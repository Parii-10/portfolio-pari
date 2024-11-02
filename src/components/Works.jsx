import React from "react";
import "../components/Works.css";

function Works(){
  const projects = [
    {
      imgSrc: "./assets/Keeper App.png",
      title: "Keeper App",
      description: "This app uses technologies like ReactJS, Node.js, and PostgreSQL. It's designed for users to keep important key points of their daily life, with features like updates and deletions."
    },
    {
      imgSrc: "./assets/World Tracker.png",
      title: "World Tracker",
      description: "This app utilizes PostgreSQL, Node.js, Express.js, and RESTful APIs. It allows users to track visited countries and compete with friends in a fun, multi-user environment."
    }
  ];
  return (
    <div id="works" className="works-container">
      <h1>Projects</h1>
      <p>___________________________________________________________________________________________________________________________</p>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <img src={project.imgSrc} alt={project.title} />
          <div className="project-detail">
            <p>{project.description}</p>
          </div>
        </div>
      ))}
      
    </div>
  );
}

export default Works;