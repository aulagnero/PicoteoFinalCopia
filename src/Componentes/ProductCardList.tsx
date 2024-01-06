import React, { useState, useEffect } from 'react';
import Card from './CardProduct.tsx'; // Asegúrate de que esta ruta es correcta
import { Producto } from './ProductoIndividual.tsx';
import './ProductCardList.css';

const ProductCardList: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  const randomProductos = [...productos].sort(() => 0.5 - Math.random()).slice(0, 4);


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

    <div className='container snack-recomendado'>
      {/* {productos.slice(5,9).map((producto) => (
          <Card key={producto.id} producto={producto} /> */}

      {randomProductos.map(producto => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>

  );
};

export default ProductCardList;