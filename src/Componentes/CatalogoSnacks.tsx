import React, { useEffect, useState } from 'react';
import Card from './CardProduct';
import './CatalogoVinos.css';

interface Producto {
    valoracion: number;
    id: number;
    nombre: string;
    categoria: string;
    descripcion: string;
    precio: number;
    imagen: string[];
}

const CatalogoVinos: React.FC = () => {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [precioFiltro, setPrecioFiltro] = useState<number | null>(null);
    const [orden, setOrden] = useState<string>('');

    useEffect(() => {
        fetch('http://localhost:3000/products?categoria=Snacks')
            .then(response => response.json())
            .then(data => setProductos(data));
    }, []);

    const productosFiltrados = productos.filter(producto => {
        if (!precioFiltro) {
            return true;
        }
        return precioFiltro > 10000 ? producto.precio > 10000 : producto.precio <= precioFiltro;
    });

    const productosOrdenados = [...productosFiltrados].sort((a, b) => {
        switch (orden) {
            case 'precioMenorAMayor':
                return a.precio - b.precio;
            case 'precioMayorAMenor':
                return b.precio - a.precio;
            case 'mejorCalificacion':
                return b.valoracion - a.valoracion;
            default:
                return 0;
        }
    });

    return (
        <div className='container'>
            <div className="row ">
                <div className="col-9"></div>
                <div className="col-3 selector-orden">
                    <div className="titulo-filtros">Ordenar por: </div>
                    <select className='select-orden' onChange={e => setOrden(e.target.value)}>
                        <option value="">Seleccionar</option>
                        <option value="precioMenorAMayor">Precio: Menor a Mayor</option>
                        <option value="precioMayorAMenor">Precio: Mayor a Menor</option>
                        <option value="mejorCalificacion">Mejor Calificación</option>
                    </select>

                </div>
            </div>
            <div className="row contenedor-catalogo">
                <div className="col-3">
                    <div className="titulo-filtros">Filtrar por: </div>
                    <select className='select-filtros' onChange={e => setPrecioFiltro(Number(e.target.value))}>
                        <option value="">Todos los precios</option>
                        <option value="5000">Hasta $5000</option>
                        <option value="10000">Hasta $10000</option>
                        <option value="10001">Más de $10000</option>
                    </select>
                </div>
                <div className="col-9 tarjetas-catalogo">

                    {productosOrdenados.map(producto => (
                        <Card key={producto.id} producto={producto} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CatalogoVinos;