// llamadaCard.tsx
import { useEffect } from "react";

interface Producto {
  id: string;
  nombre: string;
  precio: number;
}

interface LlamadaProps {
  endpoint: string;
  setData: (data: Producto[]) => void;
}

export const Llamada: React.FC<LlamadaProps> = ({ endpoint, setData }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
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

  return null; // O devuelve cualquier otro componente si es necesario
};
export default Llamada;