import React from 'react';
import "./intro.css";
import introImg from "../../assets/image.png";
import hireImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">

        <div className="introContent">
            <span className='introGreeting'>Hello</span>
            <span className="introMainText">
                I'm <span className="introName">
                    Madhvendra Singh
                    </span>,<br />
                Frontend Web-developer. 
            </span>
            <p className="introPara">
                I have experience building responsive front-ends of websites which are intuitive and visually calm.
            </p>
            <button className="introHireBtn">
                <img src={hireImg} alt="" className="hireImg" />
                <span>Hire me</span>
            </button>
        </div>

        <img src={introImg} alt="My photo" className="introImg" />
    
    </section>
  )
}

export default Intro;
