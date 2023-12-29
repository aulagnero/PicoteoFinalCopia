import { useState, useEffect } from 'react';
import { Producto } from '../Componentes/ProductoIndividual';
import ProductCardList from '../Componentes/ProductCardList';
import Preguntas from '../Componentes/Preguntas';
import BotonesProducto from '../Componentes/BotonesProducto';
import CatalogoProductos from '../Componentes/CatalogoProductos';

function PaginaVinos() {
  const [producto, setProducto] = useState<Producto | null>(null);

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const respuesta = await fetch('http://localhost:3000/products/12');
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

      {producto && <CatalogoProductos />}

      <ProductCardList />

      <Preguntas />
    </div>
  );
}

export default PaginaVinos;