
import BotonesUsuario from '../Componentes/BotonesUsuario';
import FormUsuario from '../Componentes/FormUsuario';
import ResumenCompra from '../Componentes/ResumenCompra';

function PaginaUsuario() {

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <BotonesUsuario />
                </div>
        

                <div className="col-7"><FormUsuario /></div>

                <ResumenCompra productos={[]} precioTotal={0} />

            </div>
        </div>
    );
}

export default PaginaUsuario;