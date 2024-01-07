
import BotonesUsuario from '../Componentes/BotonesUsuario';
import ResumenCompra from '../Componentes/ResumenCompra';
import Login2 from '../InicioSesion/Login2';

function PaginaLogin() {

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <BotonesUsuario />
                </div>
        

                <div className="col-7"><Login2 /></div>

                <ResumenCompra productos={[]} precioTotal={0} />

            </div>
        </div>
    );
}

export default PaginaLogin;