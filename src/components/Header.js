import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <NavLink to="/" className="navs">Rockets</NavLink>
      <NavLink to="/missions" className="navs">Missions</NavLink>
      <span className="bar">|</span>
      <NavLink to="/profile" className="navs">My Profile</NavLink>
    </nav>
  </header>
);

export default Header;
