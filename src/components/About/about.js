import React from 'react';
import "./about.css";
import uiSkillImg from "../../assets/ui-design.png";
import webSkillImg from "../../assets/website-design.png";
import appSkillImg from "../../assets/app-design.png";

const About = () => {
  return (
    <section id="about">
        <h2 className="aboutTitle">What I love doing</h2>
        <p className="aboutDescription">
            I am a skilled UI/UX Designer & Web Developer. I love designing and always try to come up with new ideas. I also love to teach people what I know. I am a passionate developer, always working on some project or learning new things.
        </p>
        <ul className="aboutSkills">
            <li className="skillBar">
                <img src={uiSkillImg} alt="" className="skillBarImg" />
                <div className="skillBarContent">
                    <h3 className="skillBarHeader">UI/UX Designing</h3>
                    <p className="skillBarText">
                        This is a demo text, that can be changed while developing the production ready website.
                    </p>
                </div>
            </li>
            <li className="skillBar">
                <img src={webSkillImg} alt="" className="skillBarImg" />
                <div className="skillBarContent">
                    <h3 className="skillBarHeader">Web Designing</h3>
                    <p className="skillBarText">
                    This is a demo text, that can be changed while developing the production ready website.
                    </p>
                </div>
            </li>
            <li className="skillBar">
                <img src={appSkillImg} alt="" className="skillBarImg" />
                <div className="skillBarContent">
                    <h3 className="skillBarHeader">App Designing</h3>
                    <p className="skillBarText">
                    This is a demo text, that can be changed while developing the production ready website.
                    </p>
                </div>
            </li>    
        </ul>
    </section>
  )
}

export default About;
