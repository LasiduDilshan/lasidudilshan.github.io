import React, { useState } from "react";
import "./Certifications.css";

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const certifications = [
    {
      id: 1,
      title: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "2024",
      category: "machine-learning",
      status: "completed",
      description:
        "Comprehensive specialization covering supervised learning, unsupervised learning, and best practices in machine learning implementation.",
      skills: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Neural Networks",
        "Python",
        "TensorFlow",
      ],
      credentialId: "Stanford-ML-2024",
      verificationUrl: "https://coursera.org/verify/specialization/XXXXXXXX",
      logo: "🎓",
      color: "#8B5CF6",
    },
    {
      id: 2,
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI (Coursera)",
      date: "2024",
      category: "machine-learning",
      status: "completed",
      description:
        "Deep neural networks, CNNs, RNNs, and advanced architectures for computer vision and natural language processing.",
      skills: [
        "Deep Learning",
        "Convolutional Neural Networks",
        "Recurrent Neural Networks",
        "TensorFlow",
        "Keras",
      ],
      credentialId: "DLAI-DL-2024",
      verificationUrl: "https://coursera.org/verify/specialization/XXXXXXXX",
      logo: "🧠",
      color: "#06B6D4",
    },
    {
      id: 3,
      title: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI (Coursera)",
      date: "2024",
      category: "machine-learning",
      status: "completed",
      description:
        "Advanced course on generative AI, transformer architectures, and practical implementation of large language models.",
      skills: [
        "Generative AI",
        "Large Language Models",
        "Transformers",
        "Fine-tuning",
        "Prompt Engineering",
      ],
      credentialId: "DLAI-GenAI-2024",
      verificationUrl: "https://coursera.org/verify/XXXXXXXX",
      logo: "🤖",
      color: "#10B981",
    },
    {
      id: 4,
      title: "Intermediate Machine Learning",
      issuer: "Kaggle Learn",
      date: "2024",
      category: "data-science",
      status: "completed",
      description:
        "Advanced machine learning techniques including cross-validation, XGBoost, and handling missing values.",
      skills: [
        "Cross-Validation",
        "XGBoost",
        "Data Preprocessing",
        "Feature Engineering",
        "Model Selection",
      ],
      credentialId: "Kaggle-IML-2024",
      verificationUrl: "https://kaggle.com/learn/certification/XXXXXXXX",
      logo: "📊",
      color: "#F59E0B",
    },
    {
      id: 5,
      title: "MATLAB Onramp",
      issuer: "MathWorks",
      date: "2023",
      category: "programming",
      status: "completed",
      description:
        "Fundamental MATLAB programming skills for technical computing and signal processing applications.",
      skills: [
        "MATLAB Programming",
        "Data Analysis",
        "Visualization",
        "Signal Processing",
        "Mathematical Modeling",
      ],
      credentialId: "MW-MATLAB-2023",
      verificationUrl:
        "https://matlabacademy.mathworks.com/progress/share/certificate.html",
      logo: "🔢",
      color: "#EF4444",
    },
    {
      id: 6,
      title: "Simulink Onramp",
      issuer: "MathWorks",
      date: "2023",
      category: "programming",
      status: "completed",
      description:
        "Model-based design and simulation using Simulink for dynamic system modeling and control systems.",
      skills: [
        "Simulink",
        "Model-Based Design",
        "System Simulation",
        "Control Systems",
        "Block Diagrams",
      ],
      credentialId: "MW-Simulink-2023",
      verificationUrl:
        "https://matlabacademy.mathworks.com/progress/share/certificate.html",
      logo: "⚙️",
      color: "#8B5CF6",
    },
    {
      id: 7,
      title: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      date: "2023",
      category: "programming",
      status: "completed",
      description:
        "Intermediate-level algorithmic problem-solving skills covering data structures and algorithms.",
      skills: [
        "Algorithms",
        "Data Structures",
        "Problem Solving",
        "Coding Interviews",
        "Optimization",
      ],
      credentialId: "HR-PS-INT-2023",
      verificationUrl: "https://hackerrank.com/certificates/XXXXXXXX",
      logo: "💻",
      color: "#06B6D4",
    },
    {
      id: 8,
      title: "JavaScript (Basic)",
      issuer: "HackerRank",
      date: "2023",
      category: "programming",
      status: "completed",
      description:
        "Fundamental JavaScript programming concepts including ES6 features, DOM manipulation, and asynchronous programming.",
      skills: [
        "JavaScript",
        "ES6+",
        "DOM Manipulation",
        "Asynchronous Programming",
        "Web Development",
      ],
      credentialId: "HR-JS-BASIC-2023",
      verificationUrl: "https://hackerrank.com/certificates/XXXXXXXX",
      logo: "🌐",
      color: "#F59E0B",
    },
  ];

  const categories = [
    {
      id: "all",
      label: "All Certifications",
      icon: "🏆",
      count: certifications.length,
    },
    {
      id: "machine-learning",
      label: "Machine Learning & AI",
      icon: "🤖",
      count: certifications.filter(
        (cert) => cert.category === "machine-learning"
      ).length,
    },
    {
      id: "data-science",
      label: "Data Science",
      icon: "📊",
      count: certifications.filter((cert) => cert.category === "data-science")
        .length,
    },
    {
      id: "programming",
      label: "Programming",
      icon: "💻",
      count: certifications.filter((cert) => cert.category === "programming")
        .length,
    },
  ];

  const achievements = [
    {
      title: "Dean's List Excellence",
      description: "6 consecutive semesters on Dean's List",
      icon: "🏆",
      color: "#F59E0B",
    },
    {
      title: "4th Island Rank",
      description: "Advanced Level Mathematics",
      icon: "🥇",
      color: "#10B981",
    },
    {
      title: "3.97/4.0 CGPA",
      description: "Outstanding academic performance",
      icon: "🎓",
      color: "#8B5CF6",
    },
    {
      title: "Technical Leadership",
      description: "Leading multiple project initiatives",
      icon: "🚀",
      color: "#06B6D4",
    },
  ];

  const filteredCertifications =
    selectedCategory === "all"
      ? certifications
      : certifications.filter((cert) => cert.category === selectedCategory);

  return (
    <div className="certifications-page">
      <div className="container">
        <section className="certifications-hero">
          <h1 className="page-title">Certifications & Achievements</h1>
          <p className="page-subtitle">
            Professional certifications and academic achievements demonstrating
            continuous learning and technical expertise
          </p>
        </section>

        <section className="achievements-showcase">
          <h2 className="section-title">Key Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="achievement-card"
                style={{ borderLeft: `4px solid ${achievement.color}` }}
              >
                <div
                  className="achievement-icon"
                  style={{ color: achievement.color }}
                >
                  {achievement.icon}
                </div>
                <div className="achievement-content">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="certifications-section">
          <h2 className="section-title">Professional Certifications</h2>

          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${
                  selectedCategory === category.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-label">{category.label}</span>
                <span className="category-count">({category.count})</span>
              </button>
            ))}
          </div>

          <div className="certifications-stats">
            <div className="stat-card">
              <span className="stat-number">{certifications.length}</span>
              <span className="stat-label">Total Certifications</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">4</span>
              <span className="stat-label">Specialization Areas</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">2024</span>
              <span className="stat-label">Most Recent Year</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Completion Rate</span>
            </div>
          </div>

          <div className="certifications-grid">
            {filteredCertifications.map((cert) => (
              <div key={cert.id} className="certification-card">
                <div className="cert-header">
                  <div className="cert-logo" style={{ color: cert.color }}>
                    {cert.logo}
                  </div>
                  <div className="cert-status">
                    <span className={`status-badge ${cert.status}`}>
                      {cert.status === "completed"
                        ? "✓ Completed"
                        : "⏳ In Progress"}
                    </span>
                  </div>
                </div>

                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  <p className="cert-description">{cert.description}</p>
                </div>

                <div className="cert-skills">
                  <h4>Skills Gained:</h4>
                  <div className="skills-list">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="skill-tag"
                        style={{
                          backgroundColor: cert.color + "20",
                          color: cert.color,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="cert-footer">
                  <div className="cert-id">
                    <small>Credential ID: {cert.credentialId}</small>
                  </div>
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="verify-btn"
                    style={{ borderColor: cert.color, color: cert.color }}
                  >
                    Verify Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="learning-philosophy">
          <h2 className="section-title">Continuous Learning Philosophy</h2>
          <div className="philosophy-content">
            <div className="philosophy-text">
              <h3>Commitment to Excellence</h3>
              <p>
                My approach to professional development is rooted in continuous
                learning and staying at the forefront of technological
                advancement. Each certification represents not just completion
                of coursework, but a commitment to understanding and applying
                cutting-edge technologies in real-world scenarios.
              </p>

              <div className="learning-principles">
                <div className="principle">
                  <div className="principle-icon">🎯</div>
                  <div className="principle-content">
                    <h4>Goal-Oriented Learning</h4>
                    <p>
                      Strategic selection of certifications aligned with career
                      objectives and industry demands.
                    </p>
                  </div>
                </div>

                <div className="principle">
                  <div className="principle-icon">🔄</div>
                  <div className="principle-content">
                    <h4>Practical Application</h4>
                    <p>
                      Immediate implementation of learned concepts in personal
                      and academic projects.
                    </p>
                  </div>
                </div>

                <div className="principle">
                  <div className="principle-icon">📈</div>
                  <div className="principle-content">
                    <h4>Progressive Advancement</h4>
                    <p>
                      Building expertise through structured learning paths from
                      foundational to advanced concepts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="learning-timeline">
              <h3>Learning Journey Timeline</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-year">2023</div>
                  <div className="timeline-content">
                    <h4>Foundation Building</h4>
                    <p>
                      Started with MATLAB/Simulink and basic programming
                      certifications
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2024</div>
                  <div className="timeline-content">
                    <h4>Advanced Specialization</h4>
                    <p>
                      Focused on Machine Learning, AI, and advanced data science
                      techniques
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">Future</div>
                  <div className="timeline-content">
                    <h4>Emerging Technologies</h4>
                    <p>
                      Planning certifications in cloud computing, advanced AI,
                      and specialized engineering domains
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="certification-impact">
          <h2 className="section-title">Impact & Application</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <h3>🎓 Academic Excellence</h3>
              <p>
                Applied machine learning concepts in academic projects,
                contributing to consistent Dean's List recognition and
                outstanding CGPA of 3.97/4.0.
              </p>
            </div>
            <div className="impact-card">
              <h3>🚀 Project Innovation</h3>
              <p>
                Implemented advanced signal processing and AI techniques in
                electronics projects, including GMM-based noise reduction
                achieving 35% SNR improvement.
              </p>
            </div>
            <div className="impact-card">
              <h3>💼 Professional Readiness</h3>
              <p>
                Gained industry-relevant skills that directly translate to
                professional software development and engineering roles.
              </p>
            </div>
            <div className="impact-card">
              <h3>🌟 Leadership Development</h3>
              <p>
                Enhanced problem-solving and technical communication skills,
                enabling effective mentoring and project leadership.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certifications;
