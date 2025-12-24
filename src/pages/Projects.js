import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      title: "Multi-hop LoRa Mesh Network (Post-Disaster)",
      duration: "2025 - Present",
      tech: ["LoRa", "ESP32", "OMNeT++ 5.3", "INET 3.7.1", "FLoRa", "BLE", "GPS"],
      description:
        "Disaster-resilient multi-hop LoRa messaging for victim-rescuer comms, DMC links, and SHM payloads; comparing flooding/AODV options and prototyping ESP32 LoRa nodes with fragmentation, ARQ, and an offline BLE/GPS dashboard.",
      category: "iot",
    },
    {
      title: "SL-PADDY: Agricultural Remote Sensing Platform",
      duration: "Jan 2025 - Jun 2025",
      github: "https://github.com/LasiduDilshan/SL-Paddy",
      live: "https://icy-plant-038eed50f.6.azurestaticapps.net/",
      tech: ["React.js", "Node.js", "MongoDB", "Azure", "Maps"],
      description:
        "Full-stack geospatial platform for Sri Lankan paddy fields with polygon analytics (NDVI/RVI trends, yield estimates), saved views, and Azure-backed data pipelines.",
      category: "software",
    },
    {
      title: "ThermoSight: Transformer Inspection Platform",
      duration: "Jul 2025 - Dec 2025",
      github: "https://github.com/LasiduDilshan/transformer-image-manager-4",
      tech: ["React", "Spring Boot", "PostgreSQL", "PatchCore", "Hugging Face", "JWT"],
      description:
        "Transformer asset and inspection platform with hosted PatchCore anomaly detection, canvas annotations, and role-based access built with React, Spring Boot, and PostgreSQL.",
      category: "software",
    },
    {
      title: "ThermoSight Anomaly Detection (Hugging Face)",
      duration: "Jul 2025 - Dec 2025",
      live: "https://huggingface.co/spaces/Lasidu/automatic-anamoly-detection",
      tech: ["PatchCore", "Hugging Face Spaces", "Python", "Queueing"],
      description:
        "Humble add-on for ThermoSight: queues transformer maintenance images for PatchCore analysis, polls status, and serves boxed outputs plus JSON results via the Hugging Face Space.",
      category: "machine learning",
    },
    {
      title: "DailyReadNest",
      duration: "Dec 2024 - Jan 2025",
      github: "https://github.com/LasiduDilshan/DailyReadNest.git",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      description:
        "MERN blogging platform with JWT authentication, profiles, and protected blog CRUD plus comments.",
      category: "software",
    },
    {
      title: "Fire Monitoring System",
      duration: "Nov 2024 - Dec 2024",
      github: "https://github.com/LasiduDilshan/IOT-Fire-Monitoring-System.git",
      tech: ["React.js", "Node.js", "Socket.IO", "IoT"],
      description:
        "IoT fire monitoring with MQTT telemetry, instant alarms, and a React/Node dashboard; includes custom PCB and enclosure.",
      category: "iot",
    },
    {
      title: "Flower Trading System",
      duration: "Nov 2024",
      github: "https://github.com/LasiduDilshan/flower_exchange_with_ui.git",
      tech: ["C++", "Multithreading", "CSV Processing"],
      description:
        "C++ trading platform that ingests CSV orders, handles partial fills, rejects invalid orders, and logs matches in real time.",
      category: "software",
    },
    {
      title: "Smart MediBox",
      duration: "Apr 2024 - May 2024",
      github:
        "https://github.com/LasiduDilshan/Medibox-Project-for-Embedded-Systems-Module",
      tech: ["Node-RED", "IoT", "Cloud"],
      description:
        "Medication reminders, environment monitoring, and cloud connectivity built with Node-RED and simple patient UI.",
      category: "software",
    },
    {
      title: "SDR Communication System",
      duration: "Aug 2023 - Dec 2023",
      github: "https://github.com/LasiduDilshan/Software-Defined-Radio",
      tech: ["GNU Radio", "Python", "BladeRF"],
      description:
        "End-to-end SDR with BladeRF and GNU Radio: BPSK data path with FEC plus NBFM audio streaming; custom Python blocks for sync and error checks.",
      category: "telecommunications",
    },
    {
      title: "Battery Management System",
      duration: "Mar 2024 - Sep 2024",
      github: "https://github.com/LasiduDilshan/EDR_project",
      tech: ["C++", "AVR", "PCB Design", "IoT"],
      description:
        "Modular Li-ion BMS using a master-slave architecture with voltage/current/temp sensing, active balancing, and AVR firmware plus PCB design.",
      category: "electronics",
    },
    {
      title: "High Frequency Amplifier",
      duration: "Sep 2023 - Dec 2023",
      github: "https://github.com/LasiduDilshan/High-Frequency-Amplifier",
      tech: ["Analog Electronics", "PCB Design", "Altium"],
      description:
        "Two-stage analog amplifier (common-emitter + Class-AB push-pull) designed, laid out, and validated for low-distortion 20kHz-100kHz output on an 8 ohm load.",
      category: "electronics",
    },
    {
      title: "UART on FPGA",
      duration: "May 2024",
      github: "https://github.com/LasiduDilshan/UART-using-Verilog",
      tech: ["Verilog", "FPGA", "Quartus Prime"],
      description:
        "UART transmitter, receiver, and baud generator in Verilog; verified in ModelSim and on DE0-Nano hardware.",
      category: "electronics",
    },
    {
      title: "GMM-Based Speech Enhancement",
      duration: "Jun 2025",
      github: "https://github.com/LasiduDilshan/GMM-AudioDenoise.git",
      tech: ["Python", "NumPy", "Signal Processing"],
      description:
        "Speech enhancement using GMM noise models and STFT log-PSD features with NNLS estimation and Wiener-style smoothing; Python pipeline for batch mixes and exports.",
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
      title: "Turbidity-Based Water Detector (Turbi Detector)",
      duration: "Mar 2023 - May 2023",
      github: "https://github.com/LasiduDilshan/Turbi-Detector",
      tech: ["IoT", "Mobile App", "Sensors"],
      description:
        "Turbidity detector using IR sensing to flag contaminated flow, trigger diversion, and push ESP8266-based remote alerts; includes PCB and enclosure integration.",
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
              <h3>Languages</h3>
              <p>English (professional proficiency), Sinhala (native proficiency)</p>
            </div>
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <p>Python, C/C++, JavaScript, MATLAB, Verilog</p>
            </div>
            <div className="skill-category">
              <h3>Software & Systems Development</h3>
              <p>
                Frontend with React.js for responsive, data-driven dashboards; backend with Node.js/Express.js and Spring Boot; REST APIs with authentication and service integration; schemas and performance basics in PostgreSQL and MongoDB.
              </p>
            </div>
            <div className="skill-category">
              <h3>Electronics & Telecommunications</h3>
              <p>
                Signal processing (filtering, feature extraction, noise reduction, basic statistical models); wireless comms with LoRa mesh, SDR paths, and digital/analog modulation techniques.
              </p>
            </div>
            <div className="skill-category">
              <h3>Embedded & Digital Systems</h3>
              <p>
                AVR and ESP32 firmware, UART and peripheral interfaces, FPGA designs in Verilog; practical debugging across firmware and hardware bring-up.
              </p>
            </div>
            <div className="skill-category">
              <h3>Hardware Design</h3>
              <p>Schematic capture and multi-layer PCB layout (Altium), enclosure considerations, and prototyping/validation.</p>
            </div>
            <div className="skill-category">
              <h3>Tools & Simulation</h3>
              <p>
                GNU Radio, OMNeT++/INET/FLoRa, MATLAB/Simulink, Wireshark, ModelSim, Quartus Prime, Altium Designer, SolidWorks.
              </p>
            </div>
            <div className="skill-category">
              <h3>Cloud & DevOps</h3>
              <p>Git-based workflows, CI/CD with GitHub Actions, and deployments on Azure (Static Web Apps, App Service) and managed services.</p>
            </div>
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <p>Analytical problem solving, systematic debugging, collaborative delivery in multidisciplinary teams, and clear technical communication.</p>
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
