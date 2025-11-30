import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="profile-image">
            <img
              src={require("../assets/images/profile/profile.jpg")}
              alt="Lasidu Dilshan"
            />
          </div>
          <h1>Lasidu Dilshan</h1>
          <h2>Electronic & Telecommunication Engineering Student</h2>
          <p className="intro">
            University of Moratuwa | Software Engineering Intern at OeilSat LLC
          </p>
          <div className="cta-buttons">
            <Link to="/projects" className="btn-primary">
              Projects
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="summary">
        <div className="container">
          <div className="stats">
            <div className="stat">
              <span className="number">3.97</span>
              <span className="label">CGPA</span>
            </div>
            <div className="stat">
              <span className="number">12+</span>
              <span className="label">Projects</span>
            </div>
            <div className="stat">
              <span className="number">8+</span>
              <span className="label">Certifications</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>About</h2>
          <p>
            Electronic and Telecommunication Engineering student at University
            of Moratuwa, Sri Lanka. CGPA: 3.97/4.0
          </p>
          <p>
            Currently working as Software Engineering Intern at OeilSat LLC,
            focusing on full-stack development with React, Node.js, and
            Microsoft Azure.
          </p>

          <h3>Technical Focus</h3>
          <div className="focus-grid">
            <div className="focus-item">
              <h4>Software Development</h4>
              <p>
                Full-stack web applications using MERN stack, cloud deployment.
              </p>
            </div>
            <div className="focus-item">
              <h4>Electronics</h4>
              <p>
                Analog/Digital circuit design, PCB design, FPGA development.
              </p>
            </div>
            <div className="focus-item">
              <h4>IoT</h4>
              <p>IoT solutions, embedded systems, sensor integration.</p>
            </div>
            <div className="focus-item">
              <h4>Telecommunications</h4>
              <p>
                Communication systems, software-defined radio, wireless systems.
              </p>
            </div>
            <div className="focus-item">
              <h4>Signal Processing</h4>
              <p>
                Digital signal processing, noise reduction algorithms, data
                analysis.
              </p>
            </div>
            <div className="focus-item">
              <h4>Machine Learning</h4>
              <p>Deep learning, generative AI, predictive modeling.</p>
            </div>
          </div>

          <h3>Key Achievements</h3>
          <ul>
            <li>Dean's List - 6 consecutive semesters</li>
            <li>ComFix 2024 Techcom Ideathon - Finalist</li>
            <li>A/L Island Rank 4th (Z-Score +2.9116)</li>
          </ul>
        </div>
      </section>

      <section className="education">
        <div className="container">
          <h2>Education</h2>

          <div className="edu-card">
            <div className="edu-header">
              <h3>University of Moratuwa</h3>
              <span className="duration">Jun 2022 - Present</span>
            </div>
            <p>
              B.Sc. Engineering (Hons.) - Electronic and Telecommunication
              Engineering
            </p>
            <div className="cgpa">CGPA: 3.97/4.0</div>
            <a
              href="https://drive.google.com/file/d/1c05N-vqj4xSVyrHSbT6CM9L3yEeC9hek/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="transcript-link"
            >
              View Transcript →
            </a>
          </div>

          <div className="edu-card">
            <div className="edu-header">
              <h3>G.C.E. Advanced Level</h3>
              <span className="duration">2020</span>
            </div>
            <div className="results">
              <span className="grade">3 A's</span>
              <span className="rank">Island Rank 4th</span>
              <span className="zscore">Z-Score: +2.9116</span>
            </div>
            <p>Combined Mathematics, Physics, Chemistry</p>
            <a
              href="https://drive.google.com/file/d/1EODpqga-X_RQ3TOKe22hdUPM4bx69Xvb/view"
              target="_blank"
              rel="noopener noreferrer"
              className="transcript-link"
            >
              View Results →
            </a>
          </div>

          <div className="edu-card">
            <div className="edu-header">
              <h3>G.C.E. Ordinary Level</h3>
              <span className="duration">2017</span>
            </div>
            <div className="results">
              <span className="grade">8 A's, 1 B</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
