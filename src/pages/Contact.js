import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="page-title">Contact</h1>

        <section className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <a href="mailto:lasidudilshan03@gmail.com">
              lasidudilshan03@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <h3>Phone</h3>
            <a href="tel:+94768604031">+94 76 860 4031</a>
          </div>

          <div className="contact-item">
            <h3>Location</h3>
            <p>Colombo, Sri Lanka</p>
          </div>

          <div className="contact-item">
            <h3>LinkedIn</h3>
            <a
              href="https://linkedin.com/in/lasidu-dilshan"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/lasidu-dilshan
            </a>
          </div>

          <div className="contact-item">
            <h3>GitHub</h3>
            <a
              href="https://github.com/LasiduDilshan"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/LasiduDilshan
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
