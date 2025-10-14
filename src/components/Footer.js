import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Lasidu Dilshan</h3>
            <p>Electronic & Telecommunication Engineering Student</p>
            <p>University of Moratuwa, Sri Lanka</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/projects">Projects</a>
              <a href="/contact">Contact</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Connect With Me</h4>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/lasidu-dilshan-236368268/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/LasiduDilshan"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href="mailto:dilshanlasindu0@gmail.com">Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Lasidu Dilshan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
