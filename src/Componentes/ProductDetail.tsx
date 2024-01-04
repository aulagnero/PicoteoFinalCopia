import React, { useState } from 'react';
import './ProductDetail.css';
import { Producto } from './Card';

interface ProductDetailProps {
    title: string;
    description: string;
    price: number;
    productId: string;
    product: Producto;
}



const ProductDetail: React.FC<ProductDetailProps> = ({ title, description, price,}) => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        // Implementar la lógica para agregar al carro de compras
        console.log(`Agregado al carro: ${quantity} ${title}(s)`);
    };

    return (
        <div className="container product-detail">
            <div className="row">
                <div className="col-6 product-info">
                    <span className='detalles-titulo'>{title}</span>
                    <p className='detalles-precio'>${price}</p>
                    <p className='detalles-descripcion'>{description}</p>
                </div>
                <div className="col-6 product-actions">
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
                        <div className='detalles-suma'>${price * quantity}</div>
                    </div>

                </div>
            </div>
            <div className="row">
                <button className='agregar-carro' onClick={handleAddToCart}>Agregar al carro</button>
            </div>
        </div>
    );
};

export default ProductDetail;