import React from "react";
import "./About.css";
import profileAboutImage from "../assets/images/profile/profile-about.jpg";

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <section className="about-hero">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">
            Passionate Electronics & Telecommunication Engineer
          </p>
        </section>

        <section className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <h2>Hello! I'm Lasidu Dilshan</h2>
              <p>
                I'm a dedicated Electronic and Telecommunication Engineering
                student at the University of Moratuwa, Sri Lanka, with a
                remarkable CGPA of 3.97/4.0. My journey in engineering is driven
                by a deep passion for <strong>signal processing</strong>,{" "}
                <strong>wireless communications</strong>, and
                <strong>software development</strong>.
              </p>
              <p>
                What sets me apart is my ability to bridge the gap between
                hardware and software, creating innovative solutions that span
                from low-level embedded systems to full-stack web applications.
                I thrive on challenging projects that require both technical
                depth and creative problem-solving.
              </p>
              <p>
                Currently, I'm gaining invaluable industry experience as a
                Software Engineering Intern at
                <strong> OeilSat LLC</strong>, where I work with cutting-edge
                technologies including React, Node.js, and Microsoft Azure,
                while processing large-scale remote sensing datasets for
                agricultural applications.
              </p>
            </div>
            <div className="about-image">
              <div className="profile-image-container">
                <img
                  src={profileAboutImage}
                  alt="Lasidu Dilshan - Professional Portrait"
                  className="about-profile-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="interests">
          <h2 className="section-title">Areas of Interest</h2>
          <div className="interests-grid">
            <div className="interest-card">
              <div className="interest-icon">📡</div>
              <h3>Signal Processing</h3>
              <p>
                Specializing in digital signal processing, noise reduction
                algorithms, and Gaussian Mixture Models for signal enhancement.
              </p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">🌐</div>
              <h3>Wireless Communications</h3>
              <p>
                Experienced in SDR implementation, modulation techniques, and
                end-to-end communication system design using GNU Radio.
              </p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">💻</div>
              <h3>Full-Stack Development</h3>
              <p>
                Building modern web applications using MERN stack, implementing
                CI/CD pipelines, and cloud deployment on Azure.
              </p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">🔧</div>
              <h3>Embedded Systems</h3>
              <p>
                Developing IoT solutions, battery management systems, and FPGA
                programming using Verilog for digital circuit design.
              </p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">🤖</div>
              <h3>Machine Learning</h3>
              <p>
                Applying ML algorithms for signal processing, pursuing
                certifications in supervised and unsupervised learning from
                Stanford.
              </p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">☁️</div>
              <h3>Cloud Technologies</h3>
              <p>
                Experienced with Microsoft Azure, GitHub Actions for CI/CD, and
                managing cloud infrastructure for scalable applications.
              </p>
            </div>
          </div>
        </section>

        <section className="achievements">
          <h2 className="section-title">Key Achievements</h2>
          <div className="achievements-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Dean's List Recognition</h3>
                <span className="timeline-date">2022 - Present</span>
                <p>
                  Consistently maintained Dean's List status for 6 consecutive
                  semesters with exceptional academic performance.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>ComFix 2024 Techcom Ideathon - Finalist</h3>
                <span className="timeline-date">May 2024</span>
                <p>
                  Selected as finalist in the prestigious IEEE Communications
                  Society ideathon at University of Moratuwa.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>A/L Island Rank 4th</h3>
                <span className="timeline-date">2020</span>
                <p>
                  Achieved 4th position island-wide in G.C.E. Advanced Level
                  Physical Science stream with Z-Score +2.9116.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Multiple Technical Certifications</h3>
                <span className="timeline-date">2023 - 2024</span>
                <p>
                  Completed advanced courses from Stanford University,
                  DeepLearning.AI, and MathWorks in machine learning and signal
                  processing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="values">
          <h2 className="section-title">Core Values & Approach</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>
                I believe in pushing boundaries and finding creative solutions
                to complex engineering challenges.
              </p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <p>
                Commitment to delivering high-quality work with attention to
                detail and continuous improvement.
              </p>
            </div>
            <div className="value-card">
              <h3>Collaboration</h3>
              <p>
                Strong team player with experience in organizing committees and
                leading technical projects.
              </p>
            </div>
            <div className="value-card">
              <h3>Learning</h3>
              <p>
                Passionate about staying current with emerging technologies and
                expanding my skill set.
              </p>
            </div>
          </div>
        </section>

        <section className="personal">
          <h2 className="section-title">Beyond Engineering</h2>
          <div className="personal-content">
            <p>
              When I'm not immersed in code or circuit designs, I enjoy
              contributing to the engineering community. I serve as a Sub-Editor
              for the IEEE Communications Society at University of Moratuwa and
              have been actively involved in organizing major events like the
              Sri Lanka Robotics Challenge and ENTC Career Fair.
            </p>
            <p>
              I'm also passionate about mentoring fellow students and sharing
              knowledge through technical demonstrations and laboratory
              sessions. My experience as an Analog Laboratory Demonstrator at
              EXMO 2023 allowed me to help students understand complex analog
              electronics concepts.
            </p>
            <div className="personal-stats">
              <div className="stat">
                <span className="stat-number">6</span>
                <span className="stat-label">Semesters on Dean's List</span>
              </div>
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">IEEE Society Positions</span>
              </div>
              <div className="stat">
                <span className="stat-number">4+</span>
                <span className="stat-label">Major Event Organizations</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
