import { useState, useEffect } from 'react';
import ProductDetail from './ProductDetail'; // Asegúrate de que esta ruta es correcta
import ProductoIndividual from './ProductoIndividual';
import { Producto } from './ProductoIndividual';
import ProductCardList from './ProductCardList';
import RedesSociales from './RedesSociales';
import Preguntas from './Preguntas';
import BotonesProducto from './BotonesProducto';

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
      {producto && <ProductoIndividual product={producto} />}
      {producto && <ProductDetail productId={producto.id.toString()} title={producto.nombre} description={producto.descripcion} price={producto.precio} />}
      <ProductCardList />
      <RedesSociales />
      <Preguntas />
    </div>
  );
}

export default ListaProductos;