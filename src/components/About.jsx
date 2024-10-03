import React from "react";
import Skills from "./Skills";
import "../components/About.css";

function About(){
  return (
    <div id="about" className="about-container">
      <h1>
        About Me
      </h1>
      <p>___________________________________________________________________________________________________________________________</p>
      <div className="about-para-img">
        <div>
          <p>
            I am a passionate web developer with hands-on experience in building dynamic and responsive web applications. Proficient in React.js, Node.js, Express.js, and PostgreSQL, I enjoy bringing ideas to life through clean and efficient code. With a strong foundation in both front-end and back-end development, I specialize in creating full-stack solutions that are scalable and user-friendly.
            <br /> <br />
            I am adept at solving complex problems and thrive in environments where teamwork and collaboration are key. While I am confident in my technical skills, I believe in the importance of continuous learning and growth. I approach every project with a focus on clear communication and adaptability, and I’m always open to guidance to ensure the best possible outcomes.
          </p>
          <Skills />
        </div>
        <div className="photo">
          <img src="./assets/image.jpeg" alt="PARI SHARMA" />
        </div>
      </div>
      
    </div>
  );
}

export default About;