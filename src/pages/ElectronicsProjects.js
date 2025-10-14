import React from "react";
import "./ElectronicsProjects.css";

const ElectronicsProjects = () => {
  const projects = [
    {
      title: "End-to-End Communication System Using BladeRF",
      duration: "Aug 2023 - Dec 2023",
      githubLink: "https://github.com/LasiduDilshan/Software-Defined-Radio",
      imageKey: "sdr_project",
      description:
        "Developed a comprehensive communication system using BladeRF, integrating digital communication and real-time voice modules with advanced signal processing techniques.",
      technologies: [
        "GNU Radio",
        "Python",
        "BladeRF",
        "SDR",
        "Signal Processing",
      ],
      keyFeatures: [
        "Real-time voice communication implementation",
        "Digital signal processing algorithms",
        "GNU Radio Companion programming",
        "Software Defined Radio techniques",
        "Modulation and demodulation schemes",
      ],
      challenges:
        "Implementing real-time signal processing while maintaining communication quality and handling hardware-software integration complexities.",
      impact:
        "Successfully demonstrated end-to-end wireless communication with minimal latency and excellent signal quality.",
    },
    {
      title: "Expandable Battery Management System",
      duration: "March 2024 - Present",
      githubLink: "https://github.com/LasiduDilshan/EDR_project",
      imageKey: "bms_project",
      description:
        "Developed an advanced IoT-based smart Battery Management System for Li-ion cells using Master-Slave architecture with expandability features.",
      technologies: [
        "C++",
        "AVR Microcontrollers",
        "IoT",
        "PCB Design",
        "Altium Designer",
      ],
      keyFeatures: [
        "Voltage and current sensing with high precision",
        "Over-current and over-voltage protection",
        "Reverse polarity protection",
        "Cell voltage balancing algorithms",
        "Temperature monitoring and thermal management",
        "Master-Slave expandable architecture",
        "IoT connectivity for remote monitoring",
      ],
      challenges:
        "Designing a scalable architecture that maintains communication reliability between multiple modules while ensuring safety protocols.",
      impact:
        "Created a production-ready BMS that can be scaled from single-cell to large battery bank applications.",
    },
    {
      title: "High Frequency Amplifier",
      duration: "Sep 2023 - Dec 2023",
      githubLink: "https://github.com/LasiduDilshan/High-Frequency-Amplifier",
      imageKey: "amplifier_project",
      description:
        "Designed and built a precision high-frequency amplifier using analog electronics, covering complete development cycle from circuit design to enclosure construction.",
      technologies: [
        "Analog Electronics",
        "PCB Design",
        "Altium Designer",
        "Signal Analysis",
        "Circuit Simulation",
      ],
      keyFeatures: [
        "Signal amplification in 20kHz to 200kHz range",
        "Zero distortion output",
        "Custom PCB layout and design",
        "Professional enclosure construction",
        "Comprehensive testing and validation",
      ],
      challenges:
        "Achieving zero distortion amplification across the specified frequency range while maintaining stability and preventing oscillations.",
      impact:
        "Successfully created a professional-grade amplifier suitable for laboratory and industrial applications.",
    },
    {
      title: "UART Communication System on FPGA",
      duration: "May 2024",
      githubLink: "https://github.com/LasiduDilshan/UART-using-Verilog",
      imageKey: "uart_project",
      description:
        "Implemented a robust UART Communication System on FPGAs, designing both transmitter and receiver modules using Verilog HDL.",
      technologies: [
        "Verilog",
        "FPGA",
        "ModelSim",
        "Quartus Prime",
        "Digital Design",
      ],
      keyFeatures: [
        "Complete UART Tx and Rx module design",
        "Configurable baud rate support",
        "Error detection and correction",
        "Hardware implementation on DE0 Nano boards",
        "Comprehensive simulation and testing",
      ],
      challenges:
        "Ensuring timing constraints are met and handling clock domain crossing issues in the FPGA implementation.",
      impact:
        "Created a reusable UART IP core that can be integrated into various FPGA-based communication systems.",
    },
    {
      title: "Signal Denoising Using GMM Modeling",
      duration: "June 2025",
      githubLink: "#",
      imageKey: "gmm_project",
      description:
        "Developed an innovative signal processing approach using Gaussian Mixture Models for advanced noise reduction in communication systems.",
      technologies: [
        "Python",
        "NumPy",
        "SciPy",
        "Signal Processing",
        "Machine Learning",
      ],
      keyFeatures: [
        "Gaussian Mixture Model implementation",
        "Specialized models for different noise types",
        "35% improvement in Signal-to-Noise Ratio",
        "Comparison with traditional filtering methods",
        "Real-time processing capabilities",
      ],
      challenges:
        "Developing adaptive GMM models that can handle various noise characteristics while maintaining computational efficiency.",
      impact:
        "Achieved significant SNR improvement over conventional filters, opening new possibilities for noise reduction in communication systems.",
    },
    {
      title: "Digital Circuit Design Projects",
      duration: "June 2024",
      githubLink: "https://github.com/LasiduDilshan/Digital-Circuit-Design",
      imageKey: "digital_circuits",
      description:
        "Comprehensive digital circuit design projects including general implementations and specialized systems like 3-way junction traffic light control.",
      technologies: [
        "Verilog",
        "FPGA",
        "Quartus Prime",
        "ModelSim",
        "Digital Logic",
      ],
      keyFeatures: [
        "Multiple digital circuit implementations",
        "3-way junction traffic light system",
        "State machine design",
        "Timing analysis and optimization",
        "Hardware validation on DE0 Nano FPGA",
      ],
      challenges:
        "Implementing complex state machines while ensuring proper timing and resource utilization on FPGA hardware.",
      impact:
        "Developed a library of reusable digital circuit components and demonstrated practical traffic management system implementation.",
    },
    {
      title: "Contaminant Water Detector",
      duration: "Mar 2023 - May 2023",
      githubLink: "https://github.com/LasiduDilshan/Turbi-Detector",
      imageKey: "water_detector",
      description:
        "Innovated an intelligent detector system for identifying muddy water in pipelines with automatic flow diversion and remote monitoring capabilities.",
      technologies: [
        "IoT",
        "Mobile App Development",
        "Sensor Integration",
        "PCB Design",
        "Wireless Communication",
      ],
      keyFeatures: [
        "Real-time water quality monitoring",
        "Automatic flow diversion system",
        "Mobile app for remote monitoring",
        "Custom sensor integration",
        "Alert and notification system",
        "Data logging and analysis",
      ],
      challenges:
        "Integrating multiple sensors with reliable wireless communication while maintaining system responsiveness for critical water quality decisions.",
      impact:
        "Created a cost-effective solution for water quality monitoring that can prevent contaminated water distribution in residential and industrial settings.",
    },
  ];

  return (
    <div className="electronics-projects-page">
      <div className="container">
        <section className="projects-hero">
          <h1 className="page-title">
            Electronics & Telecommunications Projects
          </h1>
          <p className="page-subtitle">
            Innovative Hardware & Signal Processing Solutions
          </p>
        </section>

        <section className="projects-overview">
          <div className="overview-stats">
            <div className="stat-card">
              <span className="stat-number">7</span>
              <span className="stat-label">Major Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies Used</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
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
                      <p>Project Image</p>
                      <p className="image-key">Image key: {project.imageKey}</p>
                      <p className="image-specs">Recommended: 400x250px</p>
                    </div>
                  </div>
                  <div className="project-links">
                    {project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github"
                      >
                        <span className="link-icon">📁</span>
                        GitHub
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

        <section className="technical-expertise">
          <h2 className="section-title">Technical Expertise Demonstrated</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon">📡</div>
              <h3>Signal Processing</h3>
              <p>
                Advanced digital signal processing, noise reduction algorithms,
                and real-time communication systems using GNU Radio and custom
                implementations.
              </p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🔧</div>
              <h3>Hardware Design</h3>
              <p>
                PCB design using Altium Designer, analog circuit design, sensor
                integration, and hardware-software interface development.
              </p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">💻</div>
              <h3>Embedded Programming</h3>
              <p>
                C++ programming for AVR microcontrollers, real-time system
                design, and IoT device development with wireless communication.
              </p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">⚡</div>
              <h3>FPGA Development</h3>
              <p>
                Verilog HDL programming, digital circuit design, timing
                analysis, and hardware implementation on various FPGA platforms.
              </p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🌐</div>
              <h3>Communication Systems</h3>
              <p>
                End-to-end communication system design, protocol implementation,
                modulation schemes, and wireless network optimization.
              </p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🔬</div>
              <h3>Research & Development</h3>
              <p>
                Innovative algorithm development, performance analysis,
                comparative studies, and publication-quality technical
                documentation.
              </p>
            </div>
          </div>
        </section>

        <section className="image-guidelines">
          <h2 className="section-title">Project Images Guide</h2>
          <div className="guidelines-content">
            <p>
              To complete your portfolio, add the following project images to
              the <code>src/assets/projects/</code> directory:
            </p>
            <div className="image-list">
              {projects.map((project, index) => (
                <div key={index} className="image-item">
                  <strong>{project.imageKey}.jpg/.png</strong>
                  <span className="arrow">→</span>
                  <span>{project.title}</span>
                </div>
              ))}
            </div>
            <div className="guidelines-note">
              <h4>Image Guidelines:</h4>
              <ul>
                <li>Recommended size: 400x250px</li>
                <li>Format: JPG or PNG</li>
                <li>
                  Show circuit boards, hardware setups, or system diagrams
                </li>
                <li>
                  Include oscilloscope outputs, measurement results, or GUI
                  screenshots
                </li>
                <li>
                  Ensure good lighting and clear visibility of technical details
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ElectronicsProjects;
