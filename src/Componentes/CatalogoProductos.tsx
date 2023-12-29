import React, { useEffect, useState } from 'react';
import Card from './Card';

interface Filtros {
  categoria: string;
  precio: string;
  nombre: string;
}

const CatalogoProductos: React.FC = () => {
  const [productos, setProductos] = useState([]);
  const [filtros, setFiltros] = useState<Filtros>({ categoria: '', precio: '', nombre: '' });

  useEffect(() => {
    const params = new URLSearchParams(filtros as unknown as Record<string, string>).toString();
    fetch(`/api/productos?${params}`)
      .then(response => response.json())
      .then(data => setProductos(data));
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
      {productos.map((producto, index) => (
        <Card key={index} producto={producto} />
      ))}
    </div>
  );
};

export default CatalogoProductos;