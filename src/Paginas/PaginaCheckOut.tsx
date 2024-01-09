import { useSelector } from 'react-redux';
import { useState } from 'react';
import BotonesUsuario from '../Componentes/BotonesUsuario';
import FormPago from '../Componentes/FormPago';
import ResumenCompra from '../Componentes/ResumenCompra';
import Login2 from '../InicioSesion/Login2';
import FormUsuario from '../Componentes/FormUsuario';
import FormRegistro from '../Componentes/FormRegistro';

function PaginaCheckOut() {

    const [formularioActivo, setFormularioActivo] = useState<'login' | 'usuario' | 'registro' | 'pago' | null>('usuario');
    const precioTotal = useSelector((state: any) => state.carroReducers.precioTotal);
    const productos = useSelector((state: any) => state.carroReducers.productos);

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <BotonesUsuario 
                        onLoginClick={() => setFormularioActivo('login')} 
                        onUsuarioClick={() => setFormularioActivo('usuario')} 
                        onRegistroClick={() => setFormularioActivo('registro')} 
                    />
                </div>
        
                <div className="col-7">
                    {formularioActivo === 'login' && <Login2 />}
                    {formularioActivo === 'usuario' && <FormUsuario onPagoClick={() => setFormularioActivo('pago')} />}
                    {formularioActivo === 'registro' && <FormRegistro />}
                    {formularioActivo === 'pago' && <FormPago />}
                </div>

                <div className="col-5">
                    <ResumenCompra productos={productos} precioTotal={precioTotal} />
                </div>

            </div>
        </div>
    );
}

export default PaginaCheckOut;