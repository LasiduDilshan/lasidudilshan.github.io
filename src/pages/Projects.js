import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      title: "SL-Paddy",
      duration: "Jan 2025 - Jun 2025",
      github: "https://github.com/LasiduDilshan/SL-Paddy",
      live: "https://icy-plant-038eed50f.6.azurestaticapps.net/",
      tech: ["React.js", "Node.js", "MongoDB", "Azure"],
      description:
        "Agricultural remote sensing platform for real-time monitoring.",
      category: "software",
    },
    {
      title: "DailyReadNest",
      duration: "Dec 2024 - Jan 2025",
      github: "https://github.com/LasiduDilshan/DailyReadNest.git",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      description:
        "Blogging platform with user authentication and social features.",
      category: "software",
    },
    {
      title: "Fire Monitoring System",
      duration: "Nov 2024 - Dec 2024",
      github: "https://github.com/LasiduDilshan/IOT-Fire-Monitoring-System.git",
      tech: ["React.js", "Node.js", "Socket.IO", "IoT"],
      description: "Real-time fire detection with administrative dashboard.",
      category: "iot",
    },
    {
      title: "Flower Trading System",
      duration: "Nov 2024",
      github: "https://github.com/LasiduDilshan/flower_exchange_with_ui.git",
      tech: ["C++", "Multithreading", "CSV Processing"],
      description: "Trading platform with order matching algorithm.",
      category: "software",
    },
    {
      title: "Smart MediBox",
      duration: "Apr 2024 - May 2024",
      github:
        "https://github.com/LasiduDilshan/Medibox-Project-for-Embedded-Systems-Module",
      tech: ["Node-RED", "IoT", "Cloud"],
      description:
        "Medication management system with environmental monitoring.",
      category: "software",
    },
    {
      title: "SDR Communication System",
      duration: "Aug 2023 - Dec 2023",
      github: "https://github.com/LasiduDilshan/Software-Defined-Radio",
      tech: ["GNU Radio", "Python", "BladeRF"],
      description: "End-to-end communication system with voice modules.",
      category: "telecommunications",
    },
    {
      title: "Battery Management System",
      duration: "Mar 2024 - Present",
      github: "https://github.com/LasiduDilshan/EDR_project",
      tech: ["C++", "AVR", "PCB Design", "IoT"],
      description:
        "Expandable BMS for Li-ion cells with Master-Slave architecture.",
      category: "electronics",
    },
    {
      title: "High Frequency Amplifier",
      duration: "Sep 2023 - Dec 2023",
      github: "https://github.com/LasiduDilshan/High-Frequency-Amplifier",
      tech: ["Analog Electronics", "PCB Design", "Altium"],
      description: "Precision amplifier for 20kHz-200kHz range.",
      category: "electronics",
    },
    {
      title: "UART on FPGA",
      duration: "May 2024",
      github: "https://github.com/LasiduDilshan/UART-using-Verilog",
      tech: ["Verilog", "FPGA", "Quartus Prime"],
      description: "UART communication system implementation.",
      category: "electronics",
    },
    {
      title: "Signal Denoising - GMM",
      duration: "Jun 2025",
      tech: ["Python", "NumPy", "Signal Processing"],
      description:
        "Noise reduction using Gaussian Mixture Models (35% SNR improvement).",
      category: "signal processing",
    },
    {
      title: "Digital Circuit Design",
      duration: "Jun 2024",
      github: "https://github.com/LasiduDilshan/Digital-Circuit-Design",
      tech: ["Verilog", "FPGA", "ModelSim"],
      description: "Traffic light control and digital implementations.",
      category: "electronics",
    },
    {
      title: "Water Detector",
      duration: "Mar 2023 - May 2023",
      github: "https://github.com/LasiduDilshan/Turbi-Detector",
      tech: ["IoT", "Mobile App", "Sensors"],
      description: "Contaminant detection with automatic flow diversion.",
      category: "electronics",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="projects-page">
      <div className="container">
        <h1 className="page-title">Projects</h1>

        <div className="filter-dropdown">
          <label htmlFor="category-select">Filter by Category:</label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Projects</option>
            <option value="software">Software</option>
            <option value="electronics">Electronics</option>
            <option value="iot">IoT</option>
            <option value="telecommunications">Telecommunications</option>
            <option value="signal processing">Signal Processing</option>
            <option value="machine learning">Machine Learning</option>
          </select>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="duration">{project.duration}</span>
              </div>

              <p className="description">{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <section className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming</h3>
              <p>Python, C/C++, JavaScript, MATLAB, Verilog</p>
            </div>
            <div className="skill-category">
              <h3>Web Development</h3>
              <p>React.js, Node.js, Express.js, MongoDB, HTML/CSS</p>
            </div>
            <div className="skill-category">
              <h3>Electronics</h3>
              <p>Analog/Digital Circuit Design, PCB Design, Embedded Systems</p>
            </div>
            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <p>Git, Docker, GNU Radio, Altium, ModelSim, Quartus Prime</p>
            </div>
            <div className="skill-category">
              <h3>Cloud & DevOps</h3>
              <p>Microsoft Azure, Azure Static Web Apps, Azure App Service</p>
            </div>
          </div>
        </section>

        <section className="certifications-section">
          <h2>Certifications</h2>
          <div className="cert-list">
            <div className="cert-item">
              <h4>Machine Learning Specialization</h4>
              <p>Stanford University & DeepLearning.AI | Coursera</p>
              <span className="cert-date">Oct 2024</span>
            </div>
            <div className="cert-item">
              <h4>Deep Learning Specialization</h4>
              <p>DeepLearning.AI | Coursera</p>
              <span className="cert-date">Nov 2024</span>
            </div>
            <div className="cert-item">
              <h4>Generative AI with Large Language Models</h4>
              <p>DeepLearning.AI & AWS | Coursera</p>
              <span className="cert-date">Dec 2024</span>
            </div>
            <div className="cert-item">
              <h4>Kaggle - Intro to Machine Learning</h4>
              <p>Kaggle</p>
              <span className="cert-date">Oct 2024</span>
            </div>
            <div className="cert-item">
              <h4>MATLAB Onramp</h4>
              <p>MathWorks</p>
              <span className="cert-date">Sep 2023</span>
            </div>
            <div className="cert-item">
              <h4>Simulink Onramp</h4>
              <p>MathWorks</p>
              <span className="cert-date">Sep 2023</span>
            </div>
            <div className="cert-item">
              <h4>HackerRank - Problem Solving (Intermediate)</h4>
              <p>HackerRank</p>
              <span className="cert-date">Jan 2024</span>
            </div>
            <div className="cert-item">
              <h4>HackerRank - SQL (Intermediate)</h4>
              <p>HackerRank</p>
              <span className="cert-date">Oct 2023</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
