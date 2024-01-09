import React from 'react';
import { useSelector } from 'react-redux';
import './CardResumen.css';

export interface ProductoId {
    valoracion: number;
    id: number;
    nombre: string;
    categoria: string;
    descripcion: string;
    precio: number;
    imagen: string[];
}

interface CardResumenProps {
    productoId: number;
    quantity: number;
}

const CardResumen: React.FC<CardResumenProps> = ({ productoId }) => {
    const producto = useSelector((state: any) => state.carroReducers.productos.find((p: ProductoId) => p.id === productoId));

    if (!producto) {
        return null; // Si el producto no está en el carro, no renderizamos nada
    }

    return (
        <div className="card-resumen">

            <div className='cont-foto'>
                {/* Asegúrate de que producto.imagen[0] exista antes de intentar renderizarlo */}
                {producto.imagen[0] && (
                    <img className="foto-resumen" src={producto.imagen[0]} alt={producto.descripcion} />
                )}
            </div>


            <div className="card-body card-details" >
                <h5 className="titulo">{producto.nombre}</h5>
                <p className="detalles-suma">x {producto.cantidad}</p>
                <p className="card-text2">${producto.precio * producto.cantidad}</p>
            </div>
            
        </div>
    );
};

export default CardResumen;