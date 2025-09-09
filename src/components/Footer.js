import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-logo">Task Manager</div>

        <p className="footer-copy">© 2025 Task Manager. All rights reserved.</p>

        <ul className="footer-right">
          <li>
            <a href="https://www.linkedin.com/in/islam-ibrahim-eldeep/">
              linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/islameldepp">Github</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
