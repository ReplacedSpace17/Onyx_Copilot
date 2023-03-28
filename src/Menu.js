import React, { useState } from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import icon1 from './images/service1_ico.png';
import icon2 from './images/service2_ico.png';
import icon3 from './images/service3_ico.png';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import Swal from 'sweetalert2';



import "./EstilosHome.css";

function Menu() {
  const [h1Value, setH1Value] = useState('Bienvenidos/as');/*Valor inicial del H1*/
  const [value, setValue] = useState('Bienvenidos/as');/*Valor inicial del H1*/
  return (

  <div className='divFondo'>
    <h1 id='titleHome'>{h1Value}</h1>

    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#e0e0e0', paddingTop: '0px'}}>

      
      <div className="cards" onMouseEnter={() => setH1Value('Cotizar impresión 3D')} >
          <img src={icon1} alt="logo" style={{ height: '100px'}} />
          <h2 className="labelCards">Impresión 3D</h2>
      </div>
      <div className="cards" onMouseEnter={() => setH1Value('Diseña e imprime')} >
          <img src={icon2} alt="logo" style={{ height: '100px'}} />
          <h2 className="labelCards">Diseño e impresión 3D</h2>
      </div>
      <div className="cards"onMouseEnter={() => setH1Value('Imprime por lotes')} >
          <img src={icon3} alt="logo" style={{ height: '100px'}} />
          <h2 className="labelCards">Impresión por lotes</h2>
      </div>

      
    </div>
    <button class="btnAyuda" onClick={mostrarAyuda}>
    <span>¿Cual debería elegir?</span>
    </button>
  </div>
  );
}


function mostrarAyuda() {
  Swal.fire({
    title: 'Mensaje de alerta',
    html: '<span style="color: red; font-size: 24px;">Este es un mensaje de alerta en rojo y con letra grande.</span>',
    icon: 'warning',
    confirmButtonText: 'Aceptar'
  });
  
  
}

export default Menu;
