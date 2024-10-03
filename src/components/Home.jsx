import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../components/Home.css";

function Home(){
  return (
    <div id="home" className="home-container">
      <p>
        Hi, I'm 
      </p>
      <h1>
        PARI SHARMA.
        <br />
        A Web Developer...
      </h1>
      <p className="intro">
      Web Developer | Proficiency in React.js, Node.js, Express.js & PostgreSQL 
      </p>
      <button className="btn-resume">
        <a href="./assets/RESUME PARI_ SHARMA.pdf" target="_blank">Get Resume</a></button>
      <button className="btn-home btn-projects">
        <AnchorLink className="btn-pro" href="#works" >
          Projects
        </AnchorLink></button>
    </div>
  );
}

export default Home;