import './login.css';

function Login(){

    return(
        <div className="containerLoginBody"> 
            <div className="cont_login">
                <div className='cont_title_login'><h1>Inicia sesión</h1></div>
                <div className='info_cont'>
                    <p>¿Por que no inicias sesión para acceder a todas las funciones?</p>
                </div>
                <div className='registrar_cont'>
                    <p>¿No tienes una cuenta?<br></br> Crea una aquí, es gratis.</p>
                </div>
                <button>Enviar</button>
            </div>
        </div>
    );
}
export default Login;