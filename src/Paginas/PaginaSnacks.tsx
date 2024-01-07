
import Preguntas from '../Componentes/Preguntas';
import BotonesProducto from '../Componentes/BotonesProducto';
import CatalogoSnacks from '../Componentes/CatalogoSnacks'; // Importamos el componente CatalogoSnacks

function PaginaSnacks() {

    return (
        <div>
            <BotonesProducto />
            <CatalogoSnacks />
            <Preguntas />
        </div>
    );
}

export default PaginaSnacks;