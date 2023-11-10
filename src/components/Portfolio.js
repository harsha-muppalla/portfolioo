import React from "react";
import "./style.css";
import { useRef } from "react";

const scrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};

const Home = () => {
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  return (
    <div className="portfolio-container">
      <nav className="hero">
        <ul>
          <li onClick={() => scrollToSection(home)} className="nav-link">Home</li>
          <li onClick={() => scrollToSection(about)} className="nav-link">About</li>
          <li onClick={() => scrollToSection(skills)} className="nav-link">Skills</li>
          <li onClick={() => scrollToSection(projects)} className="nav-link">Projects</li>
          <li onClick={() => scrollToSection(contact)} className="nav-link">Contact</li>
        </ul>
      </nav>

      <section ref={home} className="home">
        <h1 className="main-title">Welcome to My Portfolio</h1>
        <p className="sub-title">Hi, I'm Kusumita, a passionate developer.</p>
      </section>

      <section ref={about} className="about">
        <h2>About Me</h2>
        <p>
        Explore my portfolio to discover the journey of a passionate
         third-year B.Tech student at VIT Chennai, specializing in 
         Computer Science. With a focus on Information Security
          and Cybersecurity, I bring a unique blend of academic 
          prowess and practical experience.<br/><br/>
        Currently serving as the Vice President of the HR Club, I am dedicated to fostering 
        collaboration and growth. I am a detail-oriented graduate with a strong coding foundation, 
        driven by a keen interest in artificial intelligence and machine learning. My adaptability to emerging technologies
         and collaborative spirit 
        make me an asset in dynamic team environments.
        <br/><br/>Browse through my portfolio to delve into my skills, projects,
        and experiences. For inquiries or opportunities, feel free to reach out. 
        </p>
      </section>

      <section ref={skills} className="skills">
        <h2>My Skills</h2>
        <ul>
          <li className="popup-info" onClick={() => alert("MS Office [Power Point, Excel, Word]")}>
            MS Office [Power Point, Excel, Word]
          </li>
          <li className="popup-info" onClick={() => alert("Programming languages: Java")}>
            Programming languages: Java
          </li>
          <li className="popup-info" onClick={() => alert("Web technologies: HTML, CSS, JavaScript, PHP")}>
            Web technologies: HTML, CSS, JavaScript, PHP
          </li>
          <li className="popup-info" onClick={() => alert("Artificial intelligence, machine learning, cloud computing")}>
            Artificial intelligence, machine learning, cloud computing
          </li>
          <li className="popup-info" onClick={() => alert("Database: Oracle")}>
            Database: Oracle
          </li>
          <li className="popup-info" onClick={() => alert("google cyber security professional")}>
          google cyber security professional
          </li>
        </ul>
      </section>

      <section ref={projects} className="projects">
        <h2>Projects</h2>
        <ul>
          <li className="popup-info" onClick={() => alert("Voice control car using Arduino Uno")}>
            Voice control car using Arduino Uno
          </li>
          <li className="popup-info" onClick={() => alert("intrusion detection using snort")}>
            Intrusion detection using snort
          </li>
          <li className="popup-info" onClick={() => alert("Object detection using Arduino")}>
            Object detection using Arduino
          </li>
        </ul>
      </section>

      <section ref={contact} className="contact">
        <h2>Contact Details</h2>
        <p>Email me at harshamuppalla4@gmail.com</p>
        <p>Contact Number:6303090905</p>
        <p>
          My GitHub link <a href="https://github.com/harsha-muppalla">here</a>
        </p>
      </section>

      <section className="thanks-section">
        <p className="thanks-message">Thanks for visiting!</p>
      </section>
    </div>
  );
};

export default Home;
     
