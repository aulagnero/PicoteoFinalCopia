import { useState } from 'react';
import BotonesLogin from '../Componentes/BotonesLogin';
import Login2 from '../InicioSesion/Login2';
import FormRegistro from '../Componentes/FormRegistro';

const PaginaLogin = () => {
    const [mostrarFormRegistro, setMostrarFormRegistro] = useState(false);
    const [mostrarLogin, setMostrarLogin] = useState(true);

    return (
        <div>
            <BotonesLogin 
                onRegistroClick={() => {setMostrarFormRegistro(true); setMostrarLogin(false);}} 
                onLoginClick={() => {setMostrarLogin(true); setMostrarFormRegistro(false);}} 
            />
            {mostrarFormRegistro ? <FormRegistro /> : mostrarLogin ? <Login2 /> : null}
        </div>
    );
};

export default PaginaLogin;