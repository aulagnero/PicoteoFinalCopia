
import { useSelector } from 'react-redux';
import BotonesUsuario from '../Componentes/BotonesUsuario';
import FormUsuario from '../Componentes/FormUsuario';
import ResumenCompra from '../Componentes/ResumenCompra';

function PaginaUsuario() {

    const precioTotal = useSelector((state: any) => state.carroReducers.precioTotal);
    const productos = useSelector((state: any) => state.carroReducers.productos);

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <BotonesUsuario />
                </div>
        

                <div className="col-7"><FormUsuario /></div>

                <ResumenCompra productos={productos} precioTotal={precioTotal} />
            </div>
        </div>
    );
}

export default PaginaUsuario;