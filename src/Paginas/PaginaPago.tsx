
import BotonesUsuario from '../Componentes/BotonesUsuario';
import FormPago from '../Componentes/FormPago';
import ResumenCompra from '../Componentes/ResumenCompra';

function PaginaPago() {

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <BotonesUsuario />
                </div>
        

                <div className="col-7"><FormPago /></div>

                <ResumenCompra productos={[]} precioTotal={0} />

            </div>
        </div>
    );
}

export default PaginaPago;