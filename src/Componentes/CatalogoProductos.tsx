import React, { useEffect, useState } from 'react';
import Card from './Card';

interface Producto {
  valoracion: number;
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  imagen: string[];
}

interface Filtros {
  categoria: string;
  precio: string;
  nombre: string;
}

const CatalogoProductos: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [filtros, setFiltros] = useState<Filtros>({ categoria: '', precio: '', nombre: '' });

  useEffect(() => {
    const params = new URLSearchParams(filtros as unknown as Record<string, string>).toString();
    fetch(`http://localhost:3000/products?${params}`)
      .then(response => response.json())
      .then(data => setProductos(data));
      console.log(productos);
  }, [filtros]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFiltros({ ...filtros, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form>
        <label>
          Categoría:
          <select name="categoria" value={filtros.categoria} onChange={handleInputChange}>
            <option value="">Todas</option>
            <option value="vinos">Vinos</option>
            <option value="snacks">Snacks</option>
          </select>
        </label>
        <label>
          Precio:
          <select name="precio" value={filtros.precio} onChange={handleInputChange}>
            <option value="">Todos</option>
            <option value="5000">Menos de 5000</option>
            <option value="10000">Menos de 10000</option>
            <option value="20000">Menos de 20000</option>
            <option value="20001">Más de 20000</option>
          </select>
        </label>
        <label>
          Nombre:
          <input type="text" name="nombre" value={filtros.nombre} onChange={handleInputChange} />
        </label>
      </form>
      {productos.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default CatalogoProductos;