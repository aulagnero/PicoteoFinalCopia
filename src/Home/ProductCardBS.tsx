import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductCardBS.css'

interface ProductCardProps {
  imgSrc: string;
  title: string;
  description: string;
  price: number;
}

const ProductCardBS: React.FC<ProductCardProps> = ({ imgSrc, title, description, price }) => {
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
    <div className="card" style={{ width: '300px', padding: "24px" }}>
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">${price.toFixed(0)}</p>

        <div className='row'>
          <div className="col-8">
            <div className="btn-group">
              <button className="btn btn-secondary" onClick={handleDecrease}>
                -
              </button>
              <span className="btn btn-secondary">{quantity}</span>
              <button className="btn btn-secondary" onClick={handleIncrease}>
                +
              </button>
            </div>  
          </div>
          <div className="col-4">
            <button className="btn btn-secondary" onClick={handleAddToCart}>
              <img src="src/assets/CARRO 1.svg" alt="carrito" />
            </button>
          </div>
          </div>

        </div>
      </div>
      );
};

      export default ProductCardBS;
