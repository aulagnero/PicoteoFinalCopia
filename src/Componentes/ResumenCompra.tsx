import React from 'react';
import CardResumen from './CardResumen';

interface ResumenCompraProps {
    productos: any[];
    precioTotal: number;
}

const ResumenCompra: React.FC<ResumenCompraProps> = ({ productos, precioTotal }) => {
    return (
        <div className="col-5 resumen-carro">
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
        </div>
    );
}

export default ResumenCompra;