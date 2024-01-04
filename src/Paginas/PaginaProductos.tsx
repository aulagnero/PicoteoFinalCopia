import { useState, useEffect } from 'react';
import { Producto } from '../Componentes/ProductoIndividual';
import ProductCardList from '../Componentes/ProductCardList';
import RedesSociales from '../Componentes/RedesSociales';
import Preguntas from '../Componentes/Preguntas';
import BotonesProducto from '../Componentes/BotonesProducto';
import DetalleProducto from '../Componentes/DetalleProducto';

function ListaProductos() {
  const [producto, setProducto] = useState<Producto | null>(null);

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const respuesta = await fetch('http://localhost:3000/products/4');
        const data = await respuesta.json();
        setProducto(data);
      } catch (error) {
        console.error('Hubo un error al obtener el producto:', error);
      }
    };

    obtenerProducto();
  }, []);

  return (
    <div>
      <BotonesProducto />
      {producto && <DetalleProducto />}

      <h2 className='titulo-card-list'>Elevas tu experiencia culinaria maridando tu vino con un snack</h2>

      <ProductCardList />

      <h2 className='titulo-card-list'>Súmate a nuestra comunidad</h2>

      <RedesSociales />
      <Preguntas />

    </div>
  );
}

export default ListaProductos;