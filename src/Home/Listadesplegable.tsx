import React, { useEffect, useState } from 'react';

interface Region {
  region: string;
  comunas: string[];
}

const CheckoutComponent: React.FC = () => {
  const [regiones, setRegiones] = useState<Region[] | null>(null);
  const [regionSeleccionada, setRegionSeleccionada] = useState<string>('');
  const [comunas, setComunas] = useState<string[]>([]);

  useEffect(() => {
    // Realizar la solicitud al endpoint "regiones"
    fetch('http://localhost:3000/regiones')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRegiones(data);
          console.log('Regiones cargadas:', data);
        } else {
          console.error('La respuesta del servidor no es un array:', data);
        }
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = event.target.value;
    setRegionSeleccionada(selectedRegion);

    // Obtener las comunas de la región seleccionada
    const region = regiones?.find((r: Region) => r.region === selectedRegion);
    if (region) {
      setComunas(region.comunas);
      console.log('Comunas de la región:', region.comunas);
    } else {
      setComunas([]);
      console.log('Comunas reseteadas');
    }
  };

  // Mostrar regiones y comunas en la consola
  console.log('Regiones:', regiones);
  console.log('Comunas:', comunas);

  return (
    <div>
    <div>
      <label htmlFor="region">Región:</label>
      <select id="region" value={regionSeleccionada} onChange={handleRegionChange}>
        <option value="">Seleccione una región</option>
        {regiones?.map(region => (
          <option key={region.region} value={region.region}>
            {region.region}
          </option>
        ))}
      </select>
    </div>
      <br />
      <br />
      <br />

      <div>

      <label htmlFor="comuna">Comuna:</label>
      <select id="comuna">
        <option value="">Seleccione una comuna</option>
        {comunas.map(comuna => (
          <option key={comuna} value={comuna}>
            {comuna}
          </option>
        ))}
      </select>
    </div>
    </div>
  );
};

export default CheckoutComponent;
