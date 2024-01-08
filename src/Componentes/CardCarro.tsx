import React, { useState } from 'react';
//import Swipe from 'react-swipe';
import './CardCarro.css';
import { useDispatch } from 'react-redux';
import { eliminarProducto } from '../redux2/carroSlice';




export const link = "http://localhost:3000/products"

export interface Producto {
    valoracion: number;
    id: number;
    nombre: string;
    categoria: string;
    descripcion: string;
    precio: number;
    imagen: string[];
}

interface CardCarroProps {
    producto: Producto;
    quantity: number;
    onDelete: (id: number) => void;
}

function Rating({ value }: { value: number }) {
    const emptyStar = (
        <svg className="star empty-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 16.05C12.1585 16.05 12.3175 16.088 12.4625 16.163L16.2315 18.133L15.5145 13.976C15.4575 13.65 15.5665 13.318 15.8045 13.087L18.8405 10.151L14.6375 9.539C14.3125 9.492 14.0315 9.289 13.8855 8.995L11.9995 5.201L10.1135 8.995C9.96755 9.289 9.68655 9.492 9.36155 9.539L5.15855 10.151L8.19455 13.087C8.43255 13.318 8.54155 13.65 8.48455 13.976L7.76755 18.133L11.5365 16.163C11.6815 16.088 11.8405 16.05 11.9995 16.05ZM17.5615 20.955C17.4025 20.955 17.2435 20.918 17.0985 20.842L11.9995 18.178L6.90055 20.842C6.56255 21.018 6.15455 20.987 5.84955 20.763C5.54155 20.539 5.38855 20.16 5.45255 19.785L6.42455 14.157L2.30455 10.172C2.02955 9.907 1.93155 9.509 2.04855 9.146C2.16455 8.783 2.47855 8.519 2.85555 8.464L8.55655 7.636L11.1035 2.51C11.4415 1.83 12.5575 1.83 12.8955 2.51L15.4425 7.636L21.1435 8.464C21.5205 8.519 21.8345 8.783 21.9505 9.146C22.0675 9.509 21.9695 9.907 21.6945 10.172L17.5745 14.157L18.5465 19.785C18.6105 20.16 18.4575 20.539 18.1495 20.763C17.9765 20.891 17.7695 20.955 17.5615 20.955Z" fill="#025B59" />
        </svg>
    );
    const filledStar = (
        <svg className="star filled-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5616 21.0007C17.4036 21.0007 17.2446 20.9637 17.0986 20.8877L11.9996 18.2237L6.90159 20.8877C6.56359 21.0627 6.15559 21.0327 5.84959 20.8087C5.54159 20.5847 5.38859 20.2057 5.45359 19.8307L6.42459 14.2027L2.30459 10.2177C2.03059 9.95265 1.93159 9.55465 2.04859 9.19065C2.16559 8.82865 2.47859 8.56365 2.85659 8.50965L8.55659 7.68165L11.1046 2.55565C11.4426 1.87565 12.5576 1.87565 12.8956 2.55565L15.4436 7.68165L21.1436 8.50965C21.5216 8.56365 21.8346 8.82865 21.9516 9.19065C22.0686 9.55465 21.9696 9.95265 21.6956 10.2177L17.5756 14.2027L18.5466 19.8307C18.6116 20.2057 18.4576 20.5847 18.1506 20.8087C17.9766 20.9367 17.7696 21.0007 17.5616 21.0007Z" fill="#025B59" /></svg>
    );
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < value) {
            stars.push(filledStar);
        } else {
            stars.push(emptyStar);
        }
    }

    return <div>{stars}</div>;
}


const CardCarro: React.FC<CardCarroProps> = ({ producto, quantity: initialQuantity, onDelete }) => {
    const [quantity, setQuantity] = useState(initialQuantity);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(eliminarProducto(producto.id));
        onDelete(producto.id);
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };



    return (
        <>
            <div className="card-carro" >

                <div className='cont-foto'>
                    {/* Asegúrate de que producto.imagen[0] exista antes de intentar renderizarlo */}
                    {producto.imagen[0] && (
                        <img className="foto-productos" src={producto.imagen[0]} alt={producto.descripcion} />
                    )}
                </div>


                <div className="card-body card-details" style={{ maxWidth: '224px' }}>

                    <div className="titulo">{producto.nombre} </div>
                    <div className="card-text2 col-12 ">$ {producto.precio}</div>
                    <div className='col-12'>
                        <Rating value={producto.valoracion} />
                    </div>

                </div>

                <div className="card-actions">

                    <button className='boton-eliminar' onClick={handleDelete}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4141 12L17.7071 7.70701C18.0981 7.31601 18.0981 6.68401 17.7071 6.29301C17.3161 5.90201 16.6841 5.90201 16.2931 6.29301L12.0001 10.586L7.70713 6.29301C7.31613 5.90201 6.68413 5.90201 6.29313 6.29301C5.90213 6.68401 5.90213 7.31601 6.29313 7.70701L10.5861 12L6.29313 16.293C5.90213 16.684 5.90213 17.316 6.29313 17.707C6.48813 17.902 6.74413 18 7.00013 18C7.25613 18 7.51213 17.902 7.70713 17.707L12.0001 13.414L16.2931 17.707C16.4881 17.902 16.7441 18 17.0001 18C17.2561 18 17.5121 17.902 17.7071 17.707C18.0981 17.316 18.0981 16.684 17.7071 16.293L13.4141 12Z" fill="#707382" />
                        </svg>
                    </button>


                    <div className="col-8 detalles-actions">
                   
                        <div className="btn-group">
                            <button className="btn btn-secondary" onClick={handleDecrease}>
                                -
                            </button>
                            <span className="btn btn-secondary">{quantity}</span>
                            <button className="btn btn-secondary" onClick={handleIncrease}>
                                +
                            </button>
                        </div>

                        <div className="detalles-total">
                        <div className='detalles-suma'>Total: </div>
                        <div className='detalles-suma'>${producto.precio * quantity}</div>
                    </div>


                    </div>

                    
                </div>

            </div>
        </>
    );
};

export default CardCarro;
