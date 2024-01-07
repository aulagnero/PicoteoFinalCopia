
//import ProductCardList from '../Componentes/ProductCardList';
import Preguntas from '../Componentes/Preguntas';
import BotonesProducto from '../Componentes/BotonesProducto';
import CatalogoVinos from '../Componentes/CatalogoVinos';

function PaginaVinos() {

  return (
    <div>
      <BotonesProducto />

      <CatalogoVinos />

      <Preguntas />
    </div>
  );
}

export default PaginaVinos;