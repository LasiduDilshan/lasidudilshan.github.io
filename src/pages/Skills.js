import React, { useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("programming");

  const skillCategories = {
    programming: {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        {
          name: "Python",
          level: 90,
          description:
            "Advanced scripting, data analysis, machine learning, signal processing",
        },
        {
          name: "C++",
          level: 85,
          description:
            "Embedded systems, performance-critical applications, algorithm implementation",
        },
        {
          name: "JavaScript",
          level: 88,
          description:
            "Full-stack web development, React.js, Node.js applications",
        },
        {
          name: "MATLAB",
          level: 82,
          description: "Signal processing, simulation, mathematical modeling",
        },
        {
          name: "Verilog",
          level: 78,
          description:
            "FPGA programming, digital circuit design, hardware description",
        },
      ],
    },
    electronics: {
      title: "Electronics & Telecommunications",
      icon: "📡",
      skills: [
        {
          name: "Signal Processing",
          level: 92,
          description:
            "GMM modeling, noise reduction, filter design, GNU Radio",
        },
        {
          name: "Wireless Communications",
          level: 88,
          description:
            "SDR implementation, modulation techniques, communication systems",
        },
        {
          name: "Embedded Systems",
          level: 85,
          description: "AVR programming, IoT development, real-time systems",
        },
        {
          name: "PCB Design",
          level: 80,
          description: "Altium Designer, circuit layout, component selection",
        },
        {
          name: "FPGA Development",
          level: 78,
          description: "Verilog programming, digital design, timing analysis",
        },
      ],
    },
    software: {
      title: "Software Development",
      icon: "🌐",
      skills: [
        {
          name: "React.js",
          level: 88,
          description: "Component-based architecture, hooks, state management",
        },
        {
          name: "Node.js",
          level: 85,
          description:
            "Backend development, API design, server-side applications",
        },
        {
          name: "Express.js",
          level: 83,
          description: "RESTful APIs, middleware, web application frameworks",
        },
        {
          name: "MongoDB",
          level: 80,
          description: "NoSQL databases, data modeling, aggregation pipelines",
        },
        {
          name: "Full-Stack Development",
          level: 87,
          description: "End-to-end application development, MERN stack",
        },
      ],
    },
    tools: {
      title: "Engineering Tools & Software",
      icon: "🔧",
      skills: [
        {
          name: "Altium Designer",
          level: 82,
          description: "Professional PCB design and layout",
        },
        {
          name: "GNU Radio",
          level: 85,
          description: "Software-defined radio development",
        },
        {
          name: "Quartus Prime",
          level: 78,
          description: "FPGA development and synthesis",
        },
        {
          name: "ModelSim",
          level: 75,
          description: "Digital circuit simulation and verification",
        },
        {
          name: "SolidWorks",
          level: 70,
          description: "3D modeling and mechanical design",
        },
      ],
    },
    cloud: {
      title: "DevOps & Cloud Technologies",
      icon: "☁️",
      skills: [
        {
          name: "Microsoft Azure",
          level: 82,
          description: "Cloud deployment, resource management, scaling",
        },
        {
          name: "GitHub Actions",
          level: 80,
          description: "CI/CD pipelines, automated deployment",
        },
        {
          name: "Docker",
          level: 75,
          description: "Containerization, microservices architecture",
        },
        {
          name: "Git",
          level: 88,
          description: "Version control, collaborative development",
        },
        {
          name: "Linux",
          level: 78,
          description: "System administration, shell scripting",
        },
      ],
    },
  };

  const softSkills = [
    {
      name: "Problem Solving",
      description:
        "Analytical thinking and systematic approach to complex challenges",
    },
    {
      name: "Critical Thinking",
      description:
        "Evaluating information objectively and making reasoned judgments",
    },
    {
      name: "Team Collaboration",
      description: "Working effectively with diverse teams and stakeholders",
    },
    {
      name: "Project Management",
      description:
        "Planning, organizing, and executing projects within deadlines",
    },
    {
      name: "Adaptability",
      description:
        "Quickly learning new technologies and adapting to changing requirements",
    },
    {
      name: "Communication",
      description: "Clear technical communication and presentation skills",
    },
    {
      name: "Leadership",
      description: "Mentoring peers and leading technical initiatives",
    },
    {
      name: "Research Skills",
      description:
        "Investigating new technologies and implementing innovative solutions",
    },
  ];

  const achievements = [
    { metric: "3.97/4.0", label: "CGPA at University", icon: "🎓" },
    { metric: "15+", label: "Major Projects Completed", icon: "🚀" },
    { metric: "8+", label: "Professional Certifications", icon: "📜" },
    { metric: "6", label: "Semesters on Dean's List", icon: "🏆" },
    { metric: "4th", label: "Island Rank (A/Levels)", icon: "🥇" },
    { metric: "100%", label: "Professional Proficiency", icon: "💼" },
  ];

  return (
    <div className="skills-page">
      <div className="container">
        <section className="skills-hero">
          <h1 className="page-title">Skills & Expertise</h1>
          <p className="page-subtitle">
            Technical Proficiency & Professional Competencies
          </p>
        </section>

        <section className="achievements-overview">
          <h2 className="section-title">Professional Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-metric">{achievement.metric}</div>
                <div className="achievement-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="technical-skills">
          <h2 className="section-title">Technical Skills</h2>

          <div className="skills-navigation">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                className={`nav-button ${
                  activeCategory === key ? "active" : ""
                }`}
                onClick={() => setActiveCategory(key)}
              >
                <span className="nav-icon">{category.icon}</span>
                <span className="nav-text">{category.title}</span>
              </button>
            ))}
          </div>

          <div className="skills-content">
            <div className="category-header">
              <h3>{skillCategories[activeCategory].title}</h3>
              <p>Professional expertise and hands-on experience</p>
            </div>

            <div className="skills-grid">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-header">
                    <h4>{skill.name}</h4>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="skill-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="languages">
          <h2 className="section-title">Languages</h2>
          <div className="languages-grid">
            <div className="language-card">
              <h3>English</h3>
              <span className="proficiency-level professional">
                Professional Proficiency
              </span>
              <p>
                Advanced technical communication, academic writing, and
                professional presentations
              </p>
            </div>
            <div className="language-card">
              <h3>Sinhala</h3>
              <span className="proficiency-level native">
                Native Proficiency
              </span>
              <p>Mother tongue with complete fluency in all contexts</p>
            </div>
          </div>
        </section>

        <section className="soft-skills">
          <h2 className="section-title">
            Soft Skills & Professional Competencies
          </h2>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-card">
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="specializations">
          <h2 className="section-title">Key Specializations</h2>
          <div className="specializations-grid">
            <div className="specialization-card">
              <div className="spec-icon">📡</div>
              <h3>Digital Signal Processing</h3>
              <p>
                Advanced algorithms including Gaussian Mixture Models for noise
                reduction, achieving 35% SNR improvement over traditional
                methods
              </p>
              <div className="spec-tech">
                <span>GNU Radio</span>
                <span>MATLAB/Simulink</span>
                <span>Python/NumPy</span>
              </div>
            </div>
            <div className="specialization-card">
              <div className="spec-icon">🌐</div>
              <h3>Full-Stack Web Development</h3>
              <p>
                Complete MERN stack development with cloud deployment, CI/CD
                pipelines, and scalable architecture design
              </p>
              <div className="spec-tech">
                <span>React.js</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Azure</span>
              </div>
            </div>
            <div className="specialization-card">
              <div className="spec-icon">🔧</div>
              <h3>IoT & Embedded Systems</h3>
              <p>
                Smart device development with sensor integration, wireless
                communication, and real-time control systems
              </p>
              <div className="spec-tech">
                <span>AVR Programming</span>
                <span>PCB Design</span>
                <span>IoT Protocols</span>
              </div>
            </div>
            <div className="specialization-card">
              <div className="spec-icon">⚡</div>
              <h3>FPGA Development</h3>
              <p>
                Digital circuit design using Verilog HDL with timing
                optimization and hardware implementation expertise
              </p>
              <div className="spec-tech">
                <span>Verilog</span>
                <span>Quartus Prime</span>
                <span>ModelSim</span>
              </div>
            </div>
          </div>
        </section>

        <section className="learning-journey">
          <h2 className="section-title">Continuous Learning Journey</h2>
          <div className="learning-content">
            <p>
              As a passionate learner in the rapidly evolving field of
              technology, I continuously expand my skill set through formal
              education, online courses, and hands-on projects. My learning
              approach combines theoretical understanding with practical
              implementation.
            </p>
            <div className="learning-stats">
              <div className="learning-stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Certifications Earned</span>
              </div>
              <div className="learning-stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="learning-stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">
                  Programming Languages Mastered
                </span>
              </div>
              <div className="learning-stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technical Domains Explored</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
