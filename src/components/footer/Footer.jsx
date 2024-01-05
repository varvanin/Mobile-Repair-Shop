import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="container-fluid bg-dark mt-5 text-light">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 text-center pt-4">
          <p>&copy; 2024 RepairEase. All rights reserved.</p>
          <div className="social-links my-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-3"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-3"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-3"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
