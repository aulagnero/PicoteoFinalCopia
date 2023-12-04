
import React, { useEffect, useState } from 'react';
import './ProductCardBS.css';

// Define la interfaz para la estructura del producto
interface Producto {
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  imagen: string; // Imagen codificada en base64
}

// Componente Card con la interfaz Producto
const Card: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    // Llamada a la API para obtener detalles del producto desde el endpoint "mantenedor"
    fetch('https://f401-200-112-5-153.ngrok-free.app/productos', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "1"
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Datos recibidos del servidor:', data);
        setProductos(data);
      })
      .catch(error => console.error('Error al obtener datos del servidor:', error));
  }, []);

  const decodeBase64Image = (base64String: string) => {
    const imageType = ''; 
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: imageType });
    const imageUrl = URL.createObjectURL(blob);

    return imageUrl;
  };

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
      {productos.length > 0 ? (
        <div className="card" style={{ width: '300px', padding: "24px" }}>
          {productos.map(producto => (
            <div >
              <div className='card-img-top'>
                {producto.imagen}
                <img
                  /* width="90%" */

                  src={producto.imagen ? decodeBase64Image(producto.imagen) : ""}
                  alt="foto producto"
                />
              </div>

              <div className='card-body'>
                <div className='card-title'><h3>{producto.nombre}</h3></div>
                <div className='card-text'>$ {producto.precio}</div>
              </div>

              <div className='card-text'>
                <p>{producto.descripcion}</p>
              </div>

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

          ))}
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}
    </>
  );
}

export default Card;
