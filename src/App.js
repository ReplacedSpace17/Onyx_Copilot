import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import React, { useEffect } from 'react';
import Header from './Header';
import Menu from './Menu';

import Login from './Login/Login';

function App() {
  useEffect(() => {
    Swal.fire({
      title: '¡Bienvenid@!',
      text: 'Te damos la bienvenida a Onyx Copilot, una plataforma que te ayudará a estimar precios sobre servicios relacionados al 3D Printing. ',
      icon: 'info',
      confirmButtonText: '¡Vamos a explorar!'
    });
  }, []);


  return (
    <div >
   
      <Login />
    </div>
  );
}

export default App;
