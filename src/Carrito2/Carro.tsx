import { useSelector, useDispatch } from 'react-redux';
import { eliminarProducto } from "../redux2/carroSlice";
import CardCarro from '../Componentes/CardCarro';

function Carro() {
    const dispatch = useDispatch();
    const precioTotal = useSelector((state: any) => state.carroReducers.precioTotal);
    const productos = useSelector((state: any) => state.carroReducers.productos);

    const deleteProducto = (id: number) => {
        dispatch(eliminarProducto(id));
    };

    return (
        <div className='container'>
        <div className='row'>
        {productos.map((producto: any) => (
        <CardCarro key={producto.id} producto={producto} onDelete={deleteProducto} quantity={producto.cantidad} />
      ))}
            </div>
            <br />
            <br />
            <div>
                <div><h3> Total: {precioTotal}</h3></div>
            </div>
        </div>
    );
}

export default Carro;
