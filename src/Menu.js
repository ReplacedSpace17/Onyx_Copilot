import React, { useState } from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import icon1 from './images/service1_ico.png';
import icon2 from './images/service2_ico.png';
import icon3 from './images/service3_ico.png';
import logo from './logo.svg';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import Swal from 'sweetalert2';

 



import "./EstilosHome.css";

function Menu() {
  const [h1Value, setH1Value] = useState('ONYX COPILOT');/*Valor inicial del H1*/
  const [value, setValue] = useState('Bienvenidos/as');/*Valor inicial del H1*/
  return (

  <div className='divFondo'>
    <h1 id='titleHome'>{h1Value}</h1>

    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#e0e0e0', paddingTop: '0px'}}>

      
      <div className="cards" onMouseEnter={() => setH1Value('IMPRESIÓN 3D SENCILLA')} >
          <img src={icon1} alt="logo" style={{ height: '100px'}} />
          <h2 className="labelCards">Simple 3D Printing</h2>
      </div>
      <div className="cards" onMouseEnter={() => setH1Value('DISEÑO E IMPRESIÓN 3D')} >
          <img src={icon2} alt="logo" style={{ height: '100px'}} />
          <h2 className="labelCards">3D Design and Printing</h2>
      </div>
      <div className="cards"onMouseEnter={() => setH1Value('IMPRESIÓN 3D POR LOTES')} >
          <img src={icon3} alt="logo" style={{ height: '100px'}} />
          <h2 className="labelCards">Batch 3D Printing</h2>
      </div>

      
    </div>
    <button class="btnAyuda" onClick={mostrarAyuda}>
      <span>¿Cual debería elegir?</span>
    </button>

    <div className='div-btn-laterales'>
      <button className="boton-flotante" >
        <img src={logo} alt="logo" style={{ height: '33px'}} />
      </button>
      <button className="boton-flotante">
        <img src={logo} alt="logo" style={{ height: '33px'}} />
      </button>
      <button className="boton-flotante">
        <img src={logo} alt="logo" style={{ height: '33px'}} />
      </button>
      <button className="boton-flotante">
        <img src={logo} alt="logo" style={{ height: '33px'}} />
      </button>
      <button className="boton-flotante">
        <img src={logo} alt="logo" style={{ height: '33px'}} />
      </button>
      <button className="boton-flotante" onClick={onyxWeb}>
        <img src={logo} alt="logo" style={{ height: '33px'}} />
      </button>
      
    </div>
    
  </div>
  );
}


function mostrarAyuda() {
  Swal.fire({
    title: '¿Que función utilizar?',
    html: '<p style="color: #494949; font-size: 18px;"><strong>Onyx Copilot</strong> contiene 3 secciones: <br><br><strong>Simple 3D Printing</strong> te ayudará a estimar el costo por impresión donde el cliente proporciona el modelo o archivo. <br><br><strong>3D Design and Printing</strong> te ayudará a estimar el costo por servicio de diseño a medida e impresión para el cliente. <br><br><strong>Batch 3D Printing</strong> estima el costo total por la impresión de un archivo o modelo por lotes, impresión 3D a mayoreo, etc.</p>',
    icon: 'warning',
    confirmButtonText: 'Entendido',
    background: '#E9E9E9'
  });
}
function onyxWeb() {
  window.open('https://onyx3d.com.mx/', '_blank');
}

export default Menu;
