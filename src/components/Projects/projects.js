import React from 'react';
import "./projects.css";
import Project1 from "../../assets/portfolio-1.png"
import Project2 from "../../assets/portfolio-2.png"
import Project3 from "../../assets/portfolio-3.png"
import Project4 from "../../assets/portfolio-4.png"
import Project5 from "../../assets/portfolio-5.png"
import Project6 from "../../assets/portfolio-6.png"

const Projects = () => {
  return (
    <section id="projects">
        <h2 className="projectsTitle">My Portfolio</h2>
        <p className="projectsDescription">
            Here are some of my projects that I have worked on. 
            I have experience with React, JavaScript, HTML, CSS, and more
        </p>
        <div className="projectImgs">
            <img src={Project1} alt="" className="projectImg" />
            <img src={Project2} alt="" className="projectImg" />
            <img src={Project3} alt="" className="projectImg" />
            <img src={Project4} alt="" className="projectImg" />
            <img src={Project5} alt="" className="projectImg" />
            <img src={Project6} alt="" className="projectImg" />
        </div>
        <button className="projectsBtn">
            See more
        </button>
    </section>
  )
}

export default Projects;