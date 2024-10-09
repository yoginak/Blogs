import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <p>&copy; {new Date().getFullYear()} Yogina Khandelwal. All rights reserved.</p>
          <ul className="footer__links">
            <li>
              <a href="https://github.com/yoginak" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} /> {/* GitHub icon */}
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/yogina" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} /> {/* LinkedIn icon */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
