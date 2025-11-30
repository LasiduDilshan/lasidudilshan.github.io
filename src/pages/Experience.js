import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-page">
      <div className="container">
        <h1 className="page-title">Experience</h1>

        <section className="experience-section">
          <div className="experience-card">
            <div className="exp-header">
              <div>
                <h2>Software Engineering Intern</h2>
                <h3>OeilSat LLC</h3>
              </div>
              <span className="duration">Dec 2024 - Jul 2025</span>
            </div>

            <div className="exp-content">
              <p>
                Full-stack web development for agricultural remote sensing
                applications.
              </p>

              <h4>Technologies</h4>
              <div className="tech-tags">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>Microsoft Azure</span>
                <span>GitHub Actions</span>
              </div>

              <h4>Responsibilities</h4>
              <ul>
                <li>Developed web applications using MERN stack</li>
                <li>Implemented CI/CD pipelines with GitHub Actions</li>
                <li>Deployed and managed cloud infrastructure on Azure</li>
                <li>Processed large-scale remote sensing datasets</li>
              </ul>
            </div>
          </div>

          <div className="experience-card">
            <div className="exp-header">
              <div>
                <h2>Sub-Editor</h2>
                <h3>IEEE Communications Society - University of Moratuwa</h3>
              </div>
              <span className="duration">Sep 2024 - Present</span>
            </div>
            <p>
              Technical content creation and editorial work for IEEE ComSoc.
            </p>
          </div>

          <div className="experience-card">
            <div className="exp-header">
              <div>
                <h2>Organizing Committee Member</h2>
                <h3>Electronic Club - University of Moratuwa</h3>
              </div>
              <span className="duration">Jan 2024 - Mar 2024</span>
            </div>
            <p>
              Organized SLRC 2024 (Logistics Committee) and ENTC Career Fair
              2024.
            </p>
          </div>

          <div className="experience-card">
            <div className="exp-header">
              <div>
                <h2>Analog Laboratory Demonstrator</h2>
                <h3>EXMO 2023 - University of Moratuwa</h3>
              </div>
              <span className="duration">Jul 2024</span>
            </div>
            <p>
              Assisted students with analog electronics laboratory sessions.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
