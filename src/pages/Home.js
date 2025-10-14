import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import profileImage from "../assets/images/profile/profile-main.jpg";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="title-line">Hello, I'm</span>
                <span className="title-name">Lasidu Dilshan</span>
              </h1>
              <h2 className="hero-subtitle">
                Electronic & Telecommunication Engineering Student
              </h2>
              <p className="hero-description">
                Passionate about{" "}
                <span className="highlight">Signal Processing</span>,
                <span className="highlight"> Software Development</span>, and
                <span className="highlight"> IoT Solutions</span>. Currently
                pursuing B.Sc. Engineering at University of Moratuwa with a CGPA
                of 3.97/4.0.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">3.97</span>
                  <span className="stat-label">CGPA</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">8+</span>
                  <span className="stat-label">Certifications</span>
                </div>
              </div>
              <div className="hero-buttons">
                <Link to="/software-projects" className="btn btn-primary">
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-image-container">
                <img
                  src={profileImage}
                  alt="Lasidu Dilshan - Electronics & Telecommunications Engineering Student"
                  className="profile-image"
                />
              </div>
              <div className="floating-elements">
                <div className="floating-card tech-card">
                  <span className="tech-icon">⚡</span>
                  <span>Electronics</span>
                </div>
                <div className="floating-card code-card">
                  <span className="tech-icon">💻</span>
                  <span>Software</span>
                </div>
                <div className="floating-card signal-card">
                  <span className="tech-icon">📡</span>
                  <span>Telecommunications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </section>

      <section className="highlights">
        <div className="container">
          <h2 className="section-title">Quick Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="card-icon education-icon">🎓</div>
              <h3>Academic Excellence</h3>
              <p>
                Top performer at University of Moratuwa with 3.97/4.0 CGPA.
                Dean's List for 6 consecutive semesters.
              </p>
              <Link to="/education" className="card-link">
                Learn More →
              </Link>
            </div>
            <div className="highlight-card">
              <div className="card-icon experience-icon">💼</div>
              <h3>Professional Experience</h3>
              <p>
                Software Engineering Intern at OeilSat LLC, working with
                full-stack development and cloud technologies.
              </p>
              <Link to="/experience" className="card-link">
                Learn More →
              </Link>
            </div>
            <div className="highlight-card">
              <div className="card-icon projects-icon">🚀</div>
              <h3>Innovative Projects</h3>
              <p>
                From SDR communication systems to IoT solutions, I build
                technology that makes a difference.
              </p>
              <Link to="/electronics-projects" className="card-link">
                View Projects →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="technologies">
        <div className="container">
          <h2 className="section-title">Technologies I Work With</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>Programming</h3>
              <div className="tech-tags">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">C++</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">MATLAB</span>
                <span className="tech-tag">Verilog</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Frameworks & Tools</h3>
              <div className="tech-tags">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">GNU Radio</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Engineering Tools</h3>
              <div className="tech-tags">
                <span className="tech-tag">Altium Designer</span>
                <span className="tech-tag">Quartus Prime</span>
                <span className="tech-tag">ModelSim</span>
                <span className="tech-tag">SolidWorks</span>
                <span className="tech-tag">Simulink</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
