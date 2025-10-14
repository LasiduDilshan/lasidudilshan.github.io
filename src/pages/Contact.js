import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <section className="contact-hero">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">Let's Connect and Collaborate</p>
        </section>

        <section className="contact-content">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="contact-intro">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and
                engineering. Feel free to reach out!
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-details">
                    <h3>Email</h3>
                    <a href="mailto:dilshanlasindu0@gmail.com">
                      dilshanlasindu0@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📱</div>
                  <div className="method-details">
                    <h3>Phone</h3>
                    <a href="tel:+94743875107">+94 743 875 107</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-details">
                    <h3>Location</h3>
                    <p>
                      212/1, Siyambalape South, Siyambalape
                      <br />
                      Gampaha, Sri Lanka, 11607
                    </p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">💼</div>
                  <div className="method-details">
                    <h3>LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/lasidu-dilshan-236368268/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/lasidu-dilshan
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">💻</div>
                  <div className="method-details">
                    <h3>GitHub</h3>
                    <a
                      href="https://github.com/LasiduDilshan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/LasiduDilshan
                    </a>
                  </div>
                </div>
              </div>

              <div className="availability">
                <h3>Availability</h3>
                <p>
                  Currently available for internship opportunities, freelance
                  projects, and collaborative research initiatives. Best contact
                  hours:
                  <strong> 9:00 AM - 6:00 PM (GMT+5:30)</strong>
                </p>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send Me a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="collaboration">Project Collaboration</option>
                    <option value="internship">Internship Opportunity</option>
                    <option value="freelance">Freelance Work</option>
                    <option value="research">Research Discussion</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="collaboration-areas">
          <h2 className="section-title">Areas of Interest for Collaboration</h2>
          <div className="areas-grid">
            <div className="area-card">
              <div className="area-icon">📡</div>
              <h3>Signal Processing Research</h3>
              <p>
                Advanced algorithms, noise reduction, and communication systems
                optimization
              </p>
            </div>
            <div className="area-card">
              <div className="area-icon">💻</div>
              <h3>Full-Stack Development</h3>
              <p>
                MERN stack applications, cloud deployment, and scalable web
                solutions
              </p>
            </div>
            <div className="area-card">
              <div className="area-icon">🔧</div>
              <h3>IoT & Embedded Systems</h3>
              <p>
                Smart devices, sensor networks, and industrial automation
                solutions
              </p>
            </div>
            <div className="area-card">
              <div className="area-icon">🎓</div>
              <h3>Academic Projects</h3>
              <p>
                Research collaborations, paper publications, and innovative
                solutions
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
