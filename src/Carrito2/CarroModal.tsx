import { useSelector, useDispatch } from 'react-redux';
import { eliminarProducto } from "../redux2/carroSlice";
import CardCarro from '../Componentes/CardCarro';
import "./Carro.css"




function Carromodal() {

  

    const dispatch = useDispatch();
 
    const productos = useSelector((state: any) => state.carroReducers.productos);

    const deleteProducto = (id: number) => {
        dispatch(eliminarProducto(id));
    };

   

    return (
        <div className='container carro-compras'>
            <div className='row'>
                <div className="col-4">
                    <h2 className='textoo'>Carro de compras</h2>
                </div>
                <div className="col-8"></div>
                <div className="col-12 detalle-carro">
                    {productos.map((producto: any) => (
                        <CardCarro key={producto.id} producto={producto} onDelete={deleteProducto} quantity={producto.cantidad} />
                    ))}
                </div>
               
                
                {/* <div className="col-5 resumen-carro">
                    <h3 className='textoo'>Resumen de compra</h3>
                    {productos.map((producto: any) => (
                        <CardResumen key={producto.id} productoId={producto.id} quantity={producto.cantidad} />
                    ))}
                    <div className="contenedor-totales">

                        <div className="row resumen-pago">
                            <div className="col-6 resumen-envio">Costo de envío</div>
                            <div className="col-6 resumen-envio" style={{ textAlign: 'end' }}>$3000</div>
                        </div>

                        <div className="row resumen-pago">
                            <div className="col-6"><h3 className='resumen-total'> TOTAL</h3></div>
                            <div className="col-6"><h3 className='resumen-total' style={{ textAlign: 'end' }}>$ {3000 + precioTotal}</h3></div>
                        </div>

                    </div>
                </div> */}
            </div>
            <br />
            <br />

              
            {/* <div>

                <Link to="/carrito" className="btn btn-success" onClick={closeModal}>Ir a carrito</Link>
            </div> */}
        </div>
    );
}

export default Carromodal;
