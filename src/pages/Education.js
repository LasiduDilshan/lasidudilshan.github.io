import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-page">
      <div className="container">
        <h1 className="page-title">Education</h1>

        <section className="education-section">
          <div className="education-card">
            <div className="edu-header">
              <h2>University of Moratuwa</h2>
              <span className="duration">Jun 2022 - Present</span>
            </div>
            <h3>
              B.Sc. Engineering (Hons.) - Electronic and Telecommunication
              Engineering
            </h3>
            <div className="cgpa">CGPA: 3.97/4.0</div>
            <a
              href="https://drive.google.com/file/d/1c05N-vqj4xSVyrHSbT6CM9L3yEeC9hek/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="transcript-link"
            >
              View Transcript →
            </a>

            <div className="achievements-list">
              <h4>Achievements</h4>
              <ul>
                <li>Dean's List - 6 consecutive semesters</li>
                <li>ComFix 2024 Techcom Ideathon - Finalist (May 2024)</li>
              </ul>
            </div>
          </div>

          <div className="education-card">
            <div className="edu-header">
              <h2>G.C.E. Advanced Level</h2>
              <span className="duration">2020</span>
            </div>
            <div className="results">
              <span className="grade">3 A's</span>
              <span className="rank">Island Rank 4th</span>
              <span className="zscore">Z-Score: +2.9116</span>
            </div>
            <p className="subjects">Combined Mathematics, Physics, Chemistry</p>
            <a
              href="https://drive.google.com/file/d/1EODpqga-X_RQ3TOKe22hdUPM4bx69Xvb/view"
              target="_blank"
              rel="noopener noreferrer"
              className="transcript-link"
            >
              View Results →
            </a>
          </div>

          <div className="education-card">
            <div className="edu-header">
              <h2>G.C.E. Ordinary Level</h2>
              <span className="duration">2017</span>
            </div>
            <div className="results">
              <span className="grade">8 A's, 1 B</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;
