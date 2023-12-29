
import ListarProductos from "../CRUD/ListarProductos";
import ListaProductos from "../Paginas/PaginaProductos";
import FormIngresoProdBS from "./Mantenedor";
import "./Mantenedor.css";


export default function MainMantenedor() {
    return (
        <div className=" container ">
            <div className="row fondo-mantenedor">
                <FormIngresoProdBS />

                <ListarProductos />

                </div>   

            <div>
                <ListaProductos />

                
                
                </div>    
        </div>
    )
}