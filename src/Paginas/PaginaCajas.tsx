import { useState, useEffect } from 'react';
import ProductoIndividual from '../Componentes/ProductoIndividual';
import { Producto } from '../Componentes/ProductoIndividual';
import ProductCardList from '../Componentes/ProductCardList';
import RedesSociales from '../Producto individual/RedesSociales';
import Preguntas from '../Producto individual/Preguntas';
import BotonesProducto from '../Componentes/BotonesProducto';
import BotonesCajas from '../Componentes/BotonesCajas';

function PaginaCajas() {
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
      <BotonesCajas />
      {producto && <ProductoIndividual product={producto} />}

      <h2 className='titulo-card-list'>¡Que no te falte nada! Revisa más productos para agregar a tu BOX</h2>

      <ProductCardList />
      <RedesSociales />
      <Preguntas />
    </div>
  );
}

export default PaginaCajas;