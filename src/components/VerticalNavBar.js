import React from 'react';
import { NavLink } from 'react-router-dom';
import './VerticalNavBar.css'; // Import your CSS file for styling

const VerticalNavBar = () => {
  return (
    <nav className="vertical-nav">
      <ul>
      <li>
          <NavLink to="/home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Math" activeClassName="active">
            Math
          </NavLink>
        </li>
        <li>
          <NavLink to="/ELA" activeClassName="active">
            ELA
          </NavLink>
        </li>
        <li>
          <NavLink to="/Newsletters" activeClassName="active">
            Newsletters
          </NavLink>
        </li> 
        <li>
          <NavLink to="/Projects" activeClassName="active">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/Homework" activeClassName="active">
            Homework
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default VerticalNavBar;
