import { useEffect } from "react";


interface Producto {
  valoracion: number;
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  imagen: string[];
}

interface LlamadaProps {
  endpoint: string;
  setData: (data: Producto[]) => void;
}

export const Llamada: React.FC<LlamadaProps> = ({ endpoint, setData }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(endpoint);
        const response = await fetch(endpoint, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "1"
          },
        });
        
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error al obtener datos del servidor:', error);
      }
    };

    fetchData();
  }, [endpoint, setData]);

  return null; 
};
export default Llamada;