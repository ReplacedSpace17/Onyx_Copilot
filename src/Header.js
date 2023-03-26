import React from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import logo from './logo.svg';

function Header() {
  return (
    <header style={{ backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
      <img src={logo} alt="logo" style={{ height: '50px' }} />
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', alignItems: 'center' }}>
          <li style={{ marginRight: '1rem' }}><a href="#"><FaHome /> Option 1</a></li>
          <li style={{ marginRight: '1rem' }}><a href="#"><FaUser /> Option 2</a></li>
          <li><a href="#"><FaCog /> Option 3</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
