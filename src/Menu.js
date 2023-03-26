import React from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

function Menu() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ backgroundColor: '#e1e1e1', padding: '1rem', margin: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FaHome style={{ marginRight: '0.5rem' }} />
        <a href="Cotizador_impresion/impresion.js">Option 1</a>
      </div>
      <div style={{ backgroundColor: '#e1e1e1', padding: '1rem', margin: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FaUser style={{ marginRight: '0.5rem' }} />
        <a href="#">Option 2</a>
      </div>
      <div style={{ backgroundColor: '#e1e1e1', padding: '1rem', margin: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FaCog style={{ marginRight: '0.5rem' }} />
        <a href="#">Option 3</a>
      </div>
    </div>
  );
}

export default Menu;
