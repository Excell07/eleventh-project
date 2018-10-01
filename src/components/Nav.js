import React from 'react';
import NavItem from './NavItem';

const Nav = () => (
  <div>
    <nav className="main-nav">
      <ul>
        <NavItem link="people" />
        <NavItem link="cars" />
        <NavItem link="dogs" />
      </ul>
    </nav>
  </div>
);

export default Nav;