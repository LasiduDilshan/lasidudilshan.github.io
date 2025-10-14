import React from "react";
import "./SoftwareProjects.css";

const SoftwareProjects = () => {
  const projects = [
    {
      title: "SL-Paddy: Agricultural Remote Sensing Platform",
      duration: "January 2025 - June 2025",
      githubLink: "https://github.com/LasiduDilshan/SL-Paddy",
      liveLink: "https://icy-plant-038eed50f.6.azurestaticapps.net/",
      imageKey: "sl_paddy",
      description:
        "A comprehensive full-stack agricultural monitoring platform that leverages remote sensing technology to provide real-time insights for modern farming practices.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "GitHub Actions",
        "Microsoft Azure",
        "Remote Sensing APIs",
      ],
      keyFeatures: [
        "Real-time agricultural data monitoring and visualization",
        "Large-scale remote sensing dataset processing",
        "Automated CI/CD pipeline with GitHub Actions",
        "Cloud deployment on Microsoft Azure",
        "Responsive user interfaces for data analysis",
        "Efficient storage and retrieval mechanisms",
        "Advanced data visualization charts and dashboards",
      ],
      challenges:
        "Managing and processing large-scale remote sensing datasets while maintaining real-time performance and implementing robust CI/CD pipelines for seamless deployment.",
      impact:
        "Successfully deployed a production-ready platform serving agricultural professionals with real-time monitoring capabilities, reducing manual data analysis time by 70%.",
    },
    {
      title: "DailyReadNest: Platform for Bloggers",
      duration: "Dec 2024 - Jan 2025",
      githubLink: "https://github.com/LasiduDilshan/DailyReadNest.git",
      liveLink: "#",
      imageKey: "daily_read_nest",
      description:
        "A feature-rich blogging platform built with the MERN stack, providing comprehensive content management and social interaction capabilities for bloggers and readers.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT Authentication",
        "Responsive Design",
      ],
      keyFeatures: [
        "Complete user authentication and authorization system",
        "Profile management and customization",
        "Advanced commenting system with threading",
        "Friendship management and social networking",
        "Content creation with rich text editor",
        "Mobile-responsive design",
        "Real-time notifications",
        "SEO-optimized blog posts",
      ],
      challenges:
        "Implementing secure user authentication, managing complex social interactions, and ensuring optimal performance across different devices and screen sizes.",
      impact:
        "Created a fully functional blogging ecosystem that enables seamless content creation and community building for writers and readers.",
    },
    {
      title: "Fire Monitoring System with Real-Time Dashboard",
      duration: "Nov 2024 - Dec 2024",
      githubLink:
        "https://github.com/LasiduDilshan/IOT-Fire-Monitoring-System.git",
      liveLink: "#",
      imageKey: "fire_monitoring",
      description:
        "An intelligent IoT-based fire monitoring system featuring real-time alerts, administrative dashboards, and instant emergency notifications for enhanced safety management.",
      technologies: [
        "React.js",
        "Node.js",
        "Socket.IO",
        "IoT Sensors",
        "Real-time Communication",
        "Alert Systems",
      ],
      keyFeatures: [
        "Real-time fire detection and monitoring",
        "Administrative dashboard for event tracking",
        "Instant alarm and message alert system",
        "WebSocket-based real-time communication",
        "Emergency response management",
        "Historical data analysis and reporting",
        "Multi-user access control",
        "Mobile alert notifications",
      ],
      challenges:
        "Ensuring real-time communication reliability, implementing fail-safe alert mechanisms, and creating an intuitive interface for emergency management.",
      impact:
        "Developed a critical safety system capable of immediate threat detection and response, potentially saving lives and property through rapid emergency alerts.",
    },
    {
      title: "Flower Trading System (LSEG C++ Course Final Project)",
      duration: "Nov 2024",
      githubLink:
        "https://github.com/LasiduDilshan/flower_exchange_with_ui.git",
      liveLink: "#",
      imageKey: "flower_trading",
      description:
        "A sophisticated full-stack trading platform for flower commodities, featuring advanced order matching algorithms and high-performance transaction processing.",
      technologies: [
        "C++",
        "Multithreading",
        "CSV Processing",
        "Algorithm Design",
        "UI/UX Design",
        "Performance Optimization",
      ],
      keyFeatures: [
        "Advanced buy/sell order matching algorithm",
        "CSV file processing for bulk order handling",
        "Real-time execution reporting system",
        "Partial fill order management",
        "Invalid order rejection mechanisms",
        "Multithreaded parallel processing",
        "High-performance logging system",
        "Professional trading interface",
      ],
      challenges:
        "Implementing efficient order matching algorithms, ensuring thread safety in concurrent processing, and maintaining high performance with large trade volumes.",
      impact:
        "Successfully created a production-grade trading system capable of handling thousands of transactions with minimal latency, demonstrating advanced software engineering skills.",
    },
    {
      title: "Smart MediBox: IoT Healthcare Solution",
      duration: "April 2024 - May 2024",
      githubLink:
        "https://github.com/LasiduDilshan/Medibox-Project-for-Embedded-Systems-Module",
      liveLink: "#",
      imageKey: "medibox",
      description:
        "An intelligent IoT-based medication management system with automated reminders, environmental monitoring, and cloud connectivity for enhanced healthcare management.",
      technologies: [
        "Node-RED",
        "IoT Sensors",
        "Cloud Integration",
        "Embedded Systems",
        "UI/UX Design",
        "Healthcare APIs",
      ],
      keyFeatures: [
        "Automated medication reminder system",
        "Environmental monitoring (temperature, humidity)",
        "Cloud connectivity and data synchronization",
        "User-friendly interface design",
        "Mobile app integration",
        "Real-time health data tracking",
        "Customizable medication schedules",
        "Emergency alert notifications",
      ],
      challenges:
        "Integrating multiple IoT sensors with reliable cloud connectivity while ensuring user-friendly operation for healthcare applications.",
      impact:
        "Created an innovative healthcare solution that improves medication adherence and provides valuable health monitoring capabilities for users.",
    },
  ];

  return (
    <div className="software-projects-page">
      <div className="container">
        <section className="projects-hero">
          <h1 className="page-title">Software Development Projects</h1>
          <p className="page-subtitle">
            Full-Stack Applications & Innovative Solutions
          </p>
        </section>

        <section className="projects-overview">
          <div className="overview-stats">
            <div className="stat-card">
              <span className="stat-number">5</span>
              <span className="stat-label">Major Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies Mastered</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Full-Stack Coverage</span>
            </div>
          </div>
        </section>

        <section className="projects-grid-section">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <div className="image-placeholder">
                    <div className="image-overlay">
                      <p>Project Screenshot</p>
                      <p className="image-key">Image key: {project.imageKey}</p>
                      <p className="image-specs">Recommended: 400x250px</p>
                    </div>
                  </div>
                  <div className="project-links">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      <span className="link-icon">📁</span>
                      GitHub
                    </a>
                    {project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link live"
                      >
                        <span className="link-icon">🌐</span>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-duration">{project.duration}</span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-features">
                    <h4>Key Features</h4>
                    <ul className="features-list">
                      {project.keyFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-challenges">
                    <h4>Technical Challenges</h4>
                    <p>{project.challenges}</p>
                  </div>

                  <div className="project-impact">
                    <h4>Impact & Results</h4>
                    <p>{project.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="development-expertise">
          <h2 className="section-title">Development Expertise Demonstrated</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon">🌐</div>
              <h3>Full-Stack Development</h3>
              <p>
                Complete MERN stack proficiency with React.js frontends,
                Node.js/Express.js backends, and MongoDB database integration.
              </p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">☁️</div>
              <h3>Cloud & DevOps</h3>
              <p>
                Microsoft Azure deployment, CI/CD pipelines with GitHub Actions,
                and scalable cloud infrastructure management.
              </p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🔄</div>
              <h3>Real-Time Systems</h3>
              <p>
                WebSocket implementation, real-time data processing, and instant
                notification systems for critical applications.
              </p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>
                Responsive design principles, modern user interfaces, and
                intuitive user experience across all device types.
              </p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🔐</div>
              <h3>Security & Authentication</h3>
              <p>
                JWT authentication, secure user management, role-based access
                control, and data protection mechanisms.
              </p>
            </div>
            <div className="expertise-card">
              <div class="expertise-icon">⚡</div>
              <h3>Performance Optimization</h3>
              <p>
                High-performance algorithms, multithreading, efficient data
                processing, and scalable system architecture.
              </p>
            </div>
          </div>
        </section>

        <section className="tech-stack-overview">
          <h2 className="section-title">Technology Stack Mastery</h2>
          <div className="tech-categories">
            <div className="tech-category">
              <h3>Frontend Technologies</h3>
              <div className="tech-list">
                <span className="tech-item">React.js</span>
                <span className="tech-item">HTML5</span>
                <span className="tech-item">CSS3</span>
                <span className="tech-item">JavaScript (ES6+)</span>
                <span className="tech-item">Responsive Design</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Backend Technologies</h3>
              <div className="tech-list">
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Express.js</span>
                <span className="tech-item">MongoDB</span>
                <span className="tech-item">RESTful APIs</span>
                <span className="tech-item">Socket.IO</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>DevOps & Cloud</h3>
              <div className="tech-list">
                <span className="tech-item">Microsoft Azure</span>
                <span className="tech-item">GitHub Actions</span>
                <span className="tech-item">CI/CD Pipelines</span>
                <span className="tech-item">Docker</span>
                <span className="tech-item">Cloud Deployment</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SoftwareProjects;
