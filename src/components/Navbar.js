import React from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Task Manager</div>

        <ul className="navbar-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/features">Features</NavLink>
          </li>
        </ul>

        <ul className="navbar-right">
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
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
