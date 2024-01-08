
import { useSelector } from 'react-redux';
import BotonesUsuario from '../Componentes/BotonesUsuario';
import ResumenCompra from '../Componentes/ResumenCompra';
import Login2 from '../InicioSesion/Login2';

function PaginaLogin() {

    
    const precioTotal = useSelector((state: any) => state.carroReducers.precioTotal);
    const productos = useSelector((state: any) => state.carroReducers.productos);

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <BotonesUsuario />
                </div>
        

                <div className="col-7"><Login2 /></div>

                <ResumenCompra productos={productos} precioTotal={precioTotal} />

            </div>
        </div>
    );
}

export default PaginaLogin;