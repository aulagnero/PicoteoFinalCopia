
import ListadoProductos from "../CRUD/ListadoProductos";
//import ListarProductos from "../CRUD/ListarProductos";
import FormIngresoProdBS from "./Mantenedor";
import "./Mantenedor.css";


export default function MainMantenedor() {
    return (
        <div className=" container ">
            <div className="row contenedor-body-mantenedor">
                <FormIngresoProdBS />
                </div>

                <div className="row contenedor-body-mantenedor">
                <ListadoProductos />
                </div>
                

            
        </div>
    )
}