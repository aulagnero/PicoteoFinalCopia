import React, { useState, useEffect } from 'react';
import Card3 from './Card3'; // Asegúrate de que esta ruta es correcta
import { Producto } from './ProductoIndividual.tsx';
import './ProductCardList.css';

const ProductCardList: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuesta = await fetch('http://localhost:3000/products'); // Reemplaza esta URL con la URL de tu API
        const data = await respuesta.json();
        setProductos(data);
      } catch (error) {
        console.error('Hubo un error al obtener los productos:', error);
      }
    };

    obtenerProductos();
  }, []);

  return (
    <div>
      <h2 className='titulo-card-list'><div>Elevas tu experiencia culinaria maridando tu vino con un snack</div></h2>
      <div className='container snack-recomendado'>
        {productos.slice(4,8).map((producto) => (
          <Card3 key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ProductCardList;