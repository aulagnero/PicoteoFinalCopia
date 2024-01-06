import { useState, useEffect } from 'react';
import { Producto } from '../Componentes/ProductoIndividual';
import Preguntas from '../Componentes/Preguntas';
import BotonesProducto from '../Componentes/BotonesProducto';
import CatalogoSnacks from '../Componentes/CatalogoSnacks'; // Importamos el componente CatalogoSnacks

function PaginaSnacks() {
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
         {producto && <CatalogoSnacks />}
            <Preguntas />
        </div>
    );
}

export default PaginaSnacks;