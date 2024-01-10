
import ProductCardList from '../Componentes/ProductCardList';
import Preguntas from '../Componentes/Preguntas';
import BotonesProducto from '../Componentes/BotonesProducto';
import DetalleProducto from '../Componentes/DetalleProducto';
import ProductCommentList from '../Componentes/ProductCommentList';
//import AppRegala from '../Componentes/AppRegala';

function ListaProductos() {



  
  return (
    <div>
      <BotonesProducto />
      <DetalleProducto />

      <h2 className='titulo-card-list'>Opiniones de la comunidad</h2>

        <ProductCommentList />

      <h2 className='titulo-card-list'>Elevas tu experiencia culinaria maridando tu vino con un snack</h2>

      <ProductCardList />

      {/* <AppRegala /> */}

      <Preguntas />

    </div>
  );
}

export default ListaProductos;