import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink 
            to="/employees" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Employees
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/organization" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Organization
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;