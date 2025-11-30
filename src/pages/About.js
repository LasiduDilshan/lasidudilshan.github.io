import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1 className="page-title">About</h1>

        <section className="about-content">
          <p>
            Electronic and Telecommunication Engineering student at University
            of Moratuwa, Sri Lanka. CGPA: 3.97/4.0
          </p>
          <p>
            Currently working as Software Engineering Intern at OeilSat LLC,
            focusing on full-stack development with React, Node.js, and
            Microsoft Azure.
          </p>
        </section>

        <section className="interests-section">
          <h2>Technical Focus</h2>
          <div className="interests-grid">
            <div className="interest-item">
              <h3>Signal Processing</h3>
              <p>
                Digital signal processing, noise reduction algorithms,
                communication systems.
              </p>
            </div>
            <div className="interest-item">
              <h3>Software Development</h3>
              <p>
                Full-stack web applications using MERN stack, cloud deployment.
              </p>
            </div>
            <div className="interest-item">
              <h3>Embedded Systems</h3>
              <p>
                IoT solutions, microcontroller programming, FPGA development.
              </p>
            </div>
          </div>
        </section>

        <section className="achievements-section">
          <h2>Key Achievements</h2>
          <ul>
            <li>Dean's List - 6 consecutive semesters</li>
            <li>ComFix 2024 Techcom Ideathon - Finalist</li>
            <li>A/L Island Rank 4th (Z-Score +2.9116)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
