import React from 'react';
import "./navbar.css";
import logo from "../../assets/logo.png";
/* 
  react-scroll is a library that allows smooth scrolling 
  to a particular section of the page when a link is clicked.
  It had to be installed usig npm
*/
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='navLogo'/>
      <div className="navLinks">
        <Link to="home" className="navLink">Home</Link>
        <Link to="about" className="navLink">About</Link>
        <Link to="projects" className="navLink">Projects</Link>
        <Link to="contact" className="navLink">Internships</Link>
      </div>
      <button className="navContactBtn">
        <img src={contactImg} alt="Contact icon" className="contactImg" />
        <span>Contact me</span>
      </button>
    </nav>
  )
}

export default Navbar;
