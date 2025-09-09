import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Task Manager</div>

        <ul className="navbar-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/features">Features</a>
          </li>
        </ul>

        <ul className="navbar-right">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <button className="lang-btn">EN</button>
          </li>
          <li>
            <button className="theme-btn">🌙</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
