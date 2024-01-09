import { Route, Routes } from "react-router-dom";
import Menu from "./Home/header";
import Footernaciones from "./Home/Footer";
import MainHome from "./Home/Mainhome";
import Layout from "./Layout";

import NotFound from "./Productos/Error";

import { ProtectedComponent } from "./InicioSesion/ProtectedRoute";
//import LoginJWT from "./InicioSesion/Login2";
import MainMantenedor from "./Mantenedor/mainMantenedor";
import PaginaCajas from "./Paginas/PaginaCajas";
//import DetalleProducto from "./Componentes/DetalleProducto";
import PaginaVinos from "./Paginas/PaginaVinos";
import PaginaProductos from "./Paginas/PaginaProductos";
import PaginaSnacks from "./Paginas/PaginaSnacks";
import PaginaCarro from "./Paginas/PaginaCarro";
import PaginaLogin from "./Paginas/PaginaLogin";
import PaginaExito from "./Paginas/PaginaExito";
import { Resumencarro } from "./Carrito2/Resumen carro";
import PaginaCheckOut from "./Paginas/PaginaCheckOut";


function Apps() {

    return (
        <>

            <div>

                <Menu />


                <Routes>
                    <Route path="/" element={<Layout />} >

                        <Route path="/" element={<MainHome />} />
                        <Route path="/home" element={<MainHome />} />
                        <Route path="/cajas" element={<PaginaCajas />} />
                        <Route path="/vinos" element={<PaginaVinos />} />
                        <Route path="/snacks" element={<PaginaSnacks />} />

                        <Route path="/mantenedor" element={<MainMantenedor />} />
                        <Route path="/carrito" element={<PaginaCarro />} />
                        <Route path="/checkout" element={<PaginaCheckOut />} />
                        <Route path="/exito" element={<PaginaExito />} />

                    
                        <Route path="/usuario" element={<PaginaLogin />} />
                        <Route path="/resumencarro" element={<Resumencarro />} />
                        

                        <Route path="/login" element={<PaginaLogin />} />


                        <Route path="/protected" element={
                            <ProtectedComponent allowedRoles={["admin", "admin-search", "user-search"]}>
                                <MainMantenedor />
                            </ProtectedComponent>
                        } />
                        <Route path="/detalle-producto/:id" element={<PaginaProductos />} />
                        
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
            <Footernaciones />

        </>
    )
}
export default Apps;




