import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-page">
      <div className="container">
        <section className="education-hero">
          <h1 className="page-title">Education</h1>
          <p className="page-subtitle">Academic Journey & Achievements</p>
        </section>

        <section className="university-education">
          <div className="education-card main-education">
            <div className="education-header">
              <div className="institution-info">
                <h2>University of Moratuwa</h2>
                <p className="location">Moratuwa, Sri Lanka</p>
                <p className="duration">June 2022 - Present</p>
              </div>
              <div className="cgpa-badge">
                <span className="cgpa-number">3.97</span>
                <span className="cgpa-label">CGPA / 4.0</span>
              </div>
            </div>

            <div className="degree-info">
              <h3>
                B.Sc. Engineering (Hons.) in Electronic and Telecommunication
                Engineering
              </h3>
              <div className="degree-details">
                <a
                  href="https://drive.google.com/file/d/1c05N-vqj4xSVyrHSbT6CM9L3yEeC9hek/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transcript-link"
                >
                  View Official Transcript ↗
                </a>
              </div>
            </div>

            <div className="coursework">
              <h4>Relevant Coursework</h4>
              <div className="course-tags">
                <span className="course-tag">Wireless Communications</span>
                <span className="course-tag">Signal Processing</span>
                <span className="course-tag">Communication Systems Design</span>
                <span className="course-tag">
                  Communication Network Engineering
                </span>
                <span className="course-tag">Internet of Things (IoT)</span>
                <span className="course-tag">Linear Algebra</span>
                <span className="course-tag">Circuits and Systems</span>
                <span className="course-tag">
                  Data Structures and Algorithms
                </span>
                <span className="course-tag">
                  Embedded Systems and Applications
                </span>
              </div>
            </div>

            <div className="achievements">
              <h4>Academic Achievements</h4>
              <div className="achievement-list">
                <div className="achievement-item">
                  <div className="achievement-icon">🏆</div>
                  <div className="achievement-content">
                    <h5>Dean's List Recognition</h5>
                    <p>
                      Achieved Dean's List status for 6 consecutive semesters
                      (Semester 1-6)
                    </p>
                  </div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-icon">🥇</div>
                  <div className="achievement-content">
                    <h5>Top Academic Performance</h5>
                    <p>
                      Maintained 3.97/4.0 CGPA throughout undergraduate studies
                    </p>
                  </div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-icon">🎯</div>
                  <div className="achievement-content">
                    <h5>ComFix 2024 Techcom Ideathon Finalist</h5>
                    <p>
                      Selected as finalist in IEEE Communications Society
                      competition - May 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pre-university">
          <h2 className="section-title">Pre-University Education</h2>
          <div className="education-timeline">
            <div className="education-card">
              <div className="education-header">
                <div className="institution-info">
                  <h3>G.C.E. Advanced Level - Physical Science Stream</h3>
                  <p className="duration">2020</p>
                </div>
                <div className="grade-badge al-badge">
                  <span className="grade-number">+2.9116</span>
                  <span className="grade-label">Z-Score</span>
                </div>
              </div>

              <div className="education-details">
                <div className="result-highlight">
                  <span className="result-tag excellent">3 A's</span>
                  <span className="result-tag rank">Island Rank 4th</span>
                </div>

                <div className="subjects">
                  <h4>Subjects</h4>
                  <div className="subject-list">
                    <span className="subject-tag">Combined Mathematics</span>
                    <span className="subject-tag">Physics</span>
                    <span className="subject-tag">Chemistry</span>
                  </div>
                </div>

                <a
                  href="https://drive.google.com/file/d/1EODpqga-X_RQ3TOKe22hdUPM4bx69Xvb/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="result-link"
                >
                  View A/L Results ↗
                </a>
              </div>
            </div>

            <div className="education-card">
              <div className="education-header">
                <div className="institution-info">
                  <h3>G.C.E. Ordinary Level</h3>
                  <p className="duration">2017</p>
                </div>
                <div className="grade-badge ol-badge">
                  <span className="grade-number">8A's 1B</span>
                  <span className="grade-label">Results</span>
                </div>
              </div>

              <div className="education-details">
                <div className="result-highlight">
                  <span className="result-tag excellent">
                    Excellent Performance
                  </span>
                  <span className="result-tag foundation">
                    Strong Foundation
                  </span>
                </div>
                <p>
                  Built a solid foundation in mathematics and sciences,
                  preparing for advanced studies in engineering.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="academic-projects">
          <h2 className="section-title">Notable Academic Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Final Year Research Project</h3>
              <p className="project-status">In Progress - 2024/2025</p>
              <p>
                Advanced research in signal processing and wireless
                communications, focusing on innovative solutions for modern
                telecommunication challenges.
              </p>
            </div>
            <div className="project-card">
              <h3>Digital Signal Processing Laboratory</h3>
              <p className="project-status">Completed - 2023</p>
              <p>
                Implemented various DSP algorithms including FFT, digital
                filters, and signal analysis techniques using MATLAB and
                hardware platforms.
              </p>
            </div>
            <div className="project-card">
              <h3>Communication Systems Laboratory</h3>
              <p className="project-status">Completed - 2023</p>
              <p>
                Designed and analyzed various modulation schemes, channel coding
                techniques, and communication system performance metrics.
              </p>
            </div>
            <div className="project-card">
              <h3>Embedded Systems Projects</h3>
              <p className="project-status">Ongoing - 2023/2024</p>
              <p>
                Developed multiple embedded systems applications including IoT
                devices, sensor networks, and real-time control systems.
              </p>
            </div>
          </div>
        </section>

        <section className="skills-developed">
          <h2 className="section-title">Skills Developed Through Education</h2>
          <div className="skills-categories">
            <div className="skill-category">
              <h3>Technical Skills</h3>
              <ul>
                <li>Digital Signal Processing & Analysis</li>
                <li>Wireless Communication Systems</li>
                <li>Embedded Systems Programming</li>
                <li>Circuit Design & Analysis</li>
                <li>FPGA Programming (Verilog)</li>
                <li>MATLAB/Simulink Modeling</li>
                <li>Network Analysis & Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Research & Analysis</h3>
              <ul>
                <li>Research Methodology</li>
                <li>Data Analysis & Interpretation</li>
                <li>Technical Report Writing</li>
                <li>Literature Review</li>
                <li>Experimental Design</li>
                <li>Statistical Analysis</li>
                <li>Problem Solving</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <ul>
                <li>Project Management</li>
                <li>Team Collaboration</li>
                <li>Presentation Skills</li>
                <li>Critical Thinking</li>
                <li>Time Management</li>
                <li>Leadership</li>
                <li>Communication</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;
