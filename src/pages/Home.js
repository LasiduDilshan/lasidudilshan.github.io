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
          <p className="intro">Final Year | University of Moratuwa</p>
          <div className="cta-buttons">
            <Link to="/experience" className="btn-primary">
              Experience
            </Link>
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
          <h2>Guiding Principles</h2>
          <p className="summary-intro">
            A few reminders I keep close while learning, building, and working with others.
          </p>
          <div className="stats">
            <div className="stat">
              <span className="pill">Curiosity-led</span>
              <p>Asking questions early, leaning on mentors, and sharing what I learn.</p>
            </div>
            <div className="stat">
              <span className="pill">Hands-on</span>
              <p>Building with supportive teams and shipping small, frequent improvements.</p>
            </div>
            <div className="stat">
              <span className="pill">Always learning</span>
              <p>Strengthening fundamentals with courses, feedback, and practice.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>About</h2>
          <p>
            Final year Electronic and Telecommunication Engineering student at
            University of Moratuwa, Sri Lanka. CGPA: 3.97/4.0
          </p>
          <p>
            Experienced in full-stack development, IoT solutions, signal
            processing, and telecommunications systems. Completed internship at
            OeilSat LLC working with React, Node.js, and Microsoft Azure.
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
