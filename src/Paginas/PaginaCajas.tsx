import { useState, useEffect } from 'react';
import CajaIndividual from '../Componentes/CajaIndividual';
import { Producto } from '../Componentes/ProductoIndividual';
import ProductCardList from '../Componentes/ProductCardList';
import RedesSociales from '../Componentes/RedesSociales';
import Preguntas from '../Componentes/Preguntas';
import BotonesProducto from '../Componentes/BotonesProducto';
import BotonesCajas from '../Componentes/BotonesCajas';
import CajaCardList from '../Componentes/CajaCardList';
import CajaDetail from '../Componentes/CajaDetail';

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

      {producto && <CajaIndividual product={producto} />}
     

      <h2 className='titulo-caja-list'>Productos incluidos</h2>

      <CajaCardList />

      {producto && <CajaDetail productId={producto.id.toString()} title={producto.nombre} price={producto.precio} />}

      <h2 className='titulo-card-list'>¡Que no te falte nada! Revisa más productos para agregar a tu BOX</h2>

      <ProductCardList />

      <h2 className='titulo-card-list'>Unete a nuestra comunidad</h2>

      <RedesSociales />
      <Preguntas />
    </div>
  );
}

export default PaginaCajas;