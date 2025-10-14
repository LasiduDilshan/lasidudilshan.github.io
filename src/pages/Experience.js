import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-page">
      <div className="container">
        <section className="experience-hero">
          <h1 className="page-title">Professional Experience</h1>
          <p className="page-subtitle">Building Real-World Solutions</p>
        </section>

        <section className="main-experience">
          <div className="experience-card featured">
            <div className="experience-header">
              <div className="company-logo">
                <div className="logo-placeholder">
                  <span className="company-initial">O</span>
                </div>
              </div>
              <div className="role-info">
                <h2>Software Engineering Intern</h2>
                <h3>OeilSat LLC</h3>
                <p className="location">Remote, USA</p>
                <p className="duration">December 2024 - July 2025</p>
                <span className="status-badge">Current Position</span>
              </div>
            </div>

            <div className="experience-content">
              <div className="overview">
                <h4>Overview</h4>
                <p>
                  Working as a Software Engineering Intern at OeilSat LLC, a
                  leading company in remote sensing and agricultural technology.
                  Contributing to the development of cutting-edge web
                  applications that process and analyze large-scale remote
                  sensing datasets for agricultural applications.
                </p>
              </div>

              <div className="key-responsibilities">
                <h4>Key Responsibilities & Achievements</h4>
                <div className="responsibilities-grid">
                  <div className="responsibility-item">
                    <div className="responsibility-icon">🌐</div>
                    <div className="responsibility-content">
                      <h5>Full-Stack Web Development</h5>
                      <p>
                        Developed comprehensive web applications using React,
                        Node.js, Express.js, and MongoDB, creating seamless user
                        experiences for agricultural data visualization and
                        analysis.
                      </p>
                    </div>
                  </div>

                  <div className="responsibility-item">
                    <div className="responsibility-icon">⚙️</div>
                    <div className="responsibility-content">
                      <h5>DevOps Implementation</h5>
                      <p>
                        Implemented CI/CD pipelines using GitHub Actions,
                        automating deployment processes and ensuring efficient
                        software delivery workflows.
                      </p>
                    </div>
                  </div>

                  <div className="responsibility-item">
                    <div className="responsibility-icon">☁️</div>
                    <div className="responsibility-content">
                      <h5>Cloud Infrastructure Management</h5>
                      <p>
                        Deployed and managed cloud infrastructure on Microsoft
                        Azure, optimizing performance and scalability for
                        data-intensive applications.
                      </p>
                    </div>
                  </div>

                  <div className="responsibility-item">
                    <div className="responsibility-icon">📊</div>
                    <div className="responsibility-content">
                      <h5>Remote Sensing Data Processing</h5>
                      <p>
                        Processed and managed large-scale remote sensing
                        datasets, developing efficient algorithms for
                        agricultural data analysis and visualization.
                      </p>
                    </div>
                  </div>

                  <div className="responsibility-item">
                    <div className="responsibility-icon">🤝</div>
                    <div className="responsibility-content">
                      <h5>Agile Collaboration</h5>
                      <p>
                        Collaborated effectively in an agile development
                        environment with regular code reviews, sprint planning,
                        and continuous integration practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="technologies-used">
                <h4>Technologies & Tools</h4>
                <div className="tech-stack">
                  <div className="tech-category">
                    <h5>Frontend</h5>
                    <div className="tech-tags">
                      <span className="tech-tag">React.js</span>
                      <span className="tech-tag">HTML5</span>
                      <span className="tech-tag">CSS3</span>
                      <span className="tech-tag">JavaScript</span>
                    </div>
                  </div>
                  <div className="tech-category">
                    <h5>Backend</h5>
                    <div className="tech-tags">
                      <span className="tech-tag">Node.js</span>
                      <span className="tech-tag">Express.js</span>
                      <span className="tech-tag">MongoDB</span>
                      <span className="tech-tag">RESTful APIs</span>
                    </div>
                  </div>
                  <div className="tech-category">
                    <h5>DevOps & Cloud</h5>
                    <div className="tech-tags">
                      <span className="tech-tag">Microsoft Azure</span>
                      <span className="tech-tag">GitHub Actions</span>
                      <span className="tech-tag">CI/CD</span>
                      <span className="tech-tag">Docker</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="achievements-impact">
                <h4>Impact & Achievements</h4>
                <div className="impact-list">
                  <div className="impact-item">
                    <div className="impact-metric">
                      <span className="metric-number">25%</span>
                      <span className="metric-label">
                        Performance Improvement
                      </span>
                    </div>
                    <p>
                      Optimized data processing algorithms, resulting in 25%
                      faster analysis of remote sensing datasets.
                    </p>
                  </div>
                  <div className="impact-item">
                    <div className="impact-metric">
                      <span className="metric-number">100%</span>
                      <span className="metric-label">Automation</span>
                    </div>
                    <p>
                      Successfully automated deployment processes, reducing
                      manual deployment time from hours to minutes.
                    </p>
                  </div>
                  <div className="impact-item">
                    <div className="impact-metric">
                      <span className="metric-number">3+</span>
                      <span className="metric-label">
                        Applications Delivered
                      </span>
                    </div>
                    <p>
                      Delivered multiple full-stack applications serving
                      thousands of users in the agricultural sector.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-gained">
          <h2 className="section-title">Skills & Competencies Developed</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-icon">💻</div>
              <h3>Technical Skills</h3>
              <ul>
                <li>Full-stack web development with MERN stack</li>
                <li>Cloud computing and infrastructure management</li>
                <li>DevOps practices and CI/CD implementation</li>
                <li>Large-scale data processing and analysis</li>
                <li>API design and development</li>
                <li>Database design and optimization</li>
              </ul>
            </div>
            <div className="skill-category">
              <div className="skill-icon">🚀</div>
              <h3>Professional Skills</h3>
              <ul>
                <li>Agile software development methodologies</li>
                <li>Code review and quality assurance</li>
                <li>Project management and planning</li>
                <li>Remote collaboration and communication</li>
                <li>Problem-solving and debugging</li>
                <li>Documentation and technical writing</li>
              </ul>
            </div>
            <div className="skill-category">
              <div class="skill-icon">🌱</div>
              <h3>Industry Knowledge</h3>
              <ul>
                <li>Agricultural technology and applications</li>
                <li>Remote sensing data analysis</li>
                <li>Geospatial data processing</li>
                <li>Satellite imagery interpretation</li>
                <li>Environmental monitoring systems</li>
                <li>Precision agriculture technologies</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="volunteering">
          <h2 className="section-title">
            Leadership & Volunteering Experience
          </h2>
          <div className="volunteering-timeline">
            <div className="volunteer-card">
              <div className="volunteer-header">
                <div className="volunteer-role">
                  <h3>Sub-Editor</h3>
                  <h4>IEEE Communications Society (ComSoc)</h4>
                  <p>University of Moratuwa Student Branch</p>
                </div>
                <div class="volunteer-duration">
                  <span className="duration-badge current">
                    Sept 2024 - Present
                  </span>
                </div>
              </div>
              <div className="volunteer-description">
                <p>
                  Contributing to the editorial team of IEEE ComSoc, responsible
                  for creating technical content, managing publications, and
                  promoting communication engineering awareness among students.
                </p>
                <div className="volunteer-achievements">
                  <span className="achievement-tag">Technical Writing</span>
                  <span className="achievement-tag">Content Management</span>
                  <span className="achievement-tag">Community Engagement</span>
                </div>
              </div>
            </div>

            <div className="volunteer-card">
              <div className="volunteer-header">
                <div className="volunteer-role">
                  <h3>Organizing Committee Member</h3>
                  <h4>Electronic Club Projects</h4>
                  <p>University of Moratuwa</p>
                </div>
                <div className="volunteer-duration">
                  <span className="duration-badge">Jan 2024 - March 2024</span>
                </div>
              </div>
              <div className="volunteer-description">
                <p>
                  Actively participated in organizing major engineering events
                  including Sri Lanka Robotics Challenge (SLRC) 2024 as
                  Logistics Committee Member and ENTC Career Fair 2024.
                </p>
                <div className="volunteer-achievements">
                  <span className="achievement-tag">Event Management</span>
                  <span className="achievement-tag">
                    Logistics Coordination
                  </span>
                  <span className="achievement-tag">Team Leadership</span>
                </div>
              </div>
            </div>

            <div className="volunteer-card">
              <div className="volunteer-header">
                <div className="volunteer-role">
                  <h3>Analog Laboratory Demonstrator</h3>
                  <h4>EXMO 2023</h4>
                  <p>University of Moratuwa</p>
                </div>
                <div className="volunteer-duration">
                  <span className="duration-badge">July 2024</span>
                </div>
              </div>
              <div className="volunteer-description">
                <p>
                  Served as a laboratory demonstrator for analog electronics,
                  helping students understand complex circuit concepts and
                  providing hands-on guidance during practical sessions.
                </p>
                <div className="volunteer-achievements">
                  <span className="achievement-tag">Teaching & Mentoring</span>
                  <span className="achievement-tag">Technical Guidance</span>
                  <span className="achievement-tag">Knowledge Sharing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="career-goals">
          <h2 className="section-title">Career Objectives</h2>
          <div className="goals-content">
            <div className="goals-text">
              <p>
                My professional journey is driven by a passion for creating
                innovative solutions that bridge the gap between
                telecommunications engineering and software development. I aim
                to contribute to cutting-edge technologies in areas such as:
              </p>
              <div className="goals-list">
                <div className="goal-item">
                  <div className="goal-icon">📡</div>
                  <div className="goal-content">
                    <h4>5G & Beyond Communications</h4>
                    <p>
                      Developing next-generation wireless communication systems
                      and protocols
                    </p>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-icon">🤖</div>
                  <div className="goal-content">
                    <h4>AI-Driven Signal Processing</h4>
                    <p>
                      Integrating machine learning with digital signal
                      processing for intelligent systems
                    </p>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-icon">🌐</div>
                  <div className="goal-content">
                    <h4>IoT & Edge Computing</h4>
                    <p>
                      Creating scalable IoT solutions and edge computing
                      architectures
                    </p>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-icon">☁️</div>
                  <div className="goal-content">
                    <h4>Cloud-Native Applications</h4>
                    <p>
                      Building distributed systems and microservices
                      architectures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
