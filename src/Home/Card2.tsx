import React, { useState } from 'react';
import './ProductCardBS.css';

interface Producto {
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  imagen: string; // Cadena en base64
}

const Card2: React.FC<{ producto: Producto }> = ({ producto }) => {
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
    // console.log(`Agregado al carro: ${quantity} ${producto.name}(s)`);
  };

  return (
    <>
      <div className="card" style={{ width: '200px', padding: '24px' }}>
        <div>
          <div className="card-img-top">
            {/* Utiliza la cadena base64 directamente como el origen de la imagen */}
            <img className='imagen-producto' src={producto.imagen} alt="foto producto" />
          </div>

          <div className="card-body">
            <div className="card-title " style={{ height: '50px' }}>
              <h2 className="titulo  ">{producto.nombre}</h2>

            </div>

            
            <div className='row'>
              <div className="card-text2 col-6 ">$ {producto.precio}</div>
              <div className='col-6'>
                <form >
                  <p className="clasificacion">
                    <input id="radio1" type="radio" name="estrellas" value="5" />
                    <label htmlFor="radio1">★</label>
                    <input id="radio2" type="radio" name="estrellas" value="4" />
                    <label htmlFor="radio2">★</label>
                    <input id="radio3" type="radio" name="estrellas" value="3" />
                    <label htmlFor="radio3">★</label>
                    <input id="radio4" type="radio" name="estrellas" value="2" />
                    <label htmlFor="radio4">★</label>
                    <input id="radio5" type="radio" name="estrellas" value="1" />
                    <label htmlFor="radio5">★</label>
                  </p>
                </form>
                </div>
            </div>

            <div className="card-text desc" style={{ height: '50px' }}>
              <p>{producto.descripcion}</p>
            </div>

            <br />



            <div className="row">
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
      </div>
    </>
  );
};

export default Card2;
