import { useEffect, useState } from "react";




export const FormularioPrueba = () => {
    interface Heroe {
        id: number;
        name: string;
    }

    const [listaHeroes, setListaHeroes] = useState<Heroe[]>([]);

    useEffect(() => {
        const obtenerHeroes = async () => {
            try {
                const response = await fetch("http://localhost:3000/heroes", {
                    method: "GET",
                });

                if (!response.ok) {
                    throw new Error("Error al obtener la lista de héroes");
                }

                const json = await response.json();
                setListaHeroes(json);
            } catch (error) {
                console.error(error);
            }
        };

        obtenerHeroes();
    }, []);

    const deleteHeroe = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:3000/heroes/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Error al eliminar el héroe");
            }

            const newListaHeroes = listaHeroes.filter((heroe) => heroe.id !== id);
            setListaHeroes(newListaHeroes);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h2>Lista Héroes</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {listaHeroes.map((heroe) => (
                        <tr key={heroe.id}>
                            <td>{heroe.id}</td>
                            <td>{heroe.name}</td>
                            <td>
                                <button>Editar</button>
                                <button onClick={() => deleteHeroe(heroe.id)}>Borrar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            </>
      )      
}


