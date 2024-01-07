

import Carro from '../Carrito2/Carro';
import ProductCardList from '../Componentes/ProductCardList';

function PaginaCarro() {

    return (
        <div>
            <Carro />

            <h2 className='titulo-card-list'>Revisa más productos para agregar a tu compra </h2>

            <ProductCardList />
        </div>
    );
}

export default PaginaCarro;