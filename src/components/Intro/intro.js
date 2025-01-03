import React from 'react';
import "./intro.css";
import introImg from "../../assets/image.png";
import hireImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">

        <div className="introContent">
            <span className='introGreeting'>Namaste</span>
            <span className="introMainText">
                I'm <span className="introName">
                    Madhvendra Singh
                    </span>,<br />
                Frontend Web-developer. 
            </span>
            <p className="introPara">
                I have experience building responsive front-ends of websites which are intuitive<br /> and visually calm.
            </p>
            <Link>
                <button className="introHireBtn">
                    <img src={hireImg} alt="" className="hireImg" />
                    <span>Hire me</span>
                </button>
            </Link>
        </div>

        <img src={introImg} alt="Me" className="introImg" />
    
    </section>
  )
}

export default Intro;
