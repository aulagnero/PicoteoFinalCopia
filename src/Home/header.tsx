import Barra2 from "./Barramenu";
//import { Banner } from "./Banner";
import "./header.css"
import "./barra.css"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import LogoPagina from "./Logo-viña-picoteo.svg"
import { useSelector } from 'react-redux';
import Modal from "react-modal"
import { Key, useState } from "react";
import Carromodal from "../Carrito2/CarroModal";


function Menu() {
    const productos = useSelector((state: any) => state.carroReducers.productos);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // const precioTotal = useSelector((state: any) => state.carroReducers.precioTotal);

    const navigate = useNavigate();

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <>



            <div className="container ">

                <div className="row contenedor-menu">

                    <div className=" col-2 conten1">
                        <Link to="/home"><img className='logovinapicoteo' src={LogoPagina} alt="" /> </Link>


                    </div>
                    <div className="col-8">
                        <Barra2 />
                    </div>


                    <div className="col-1 conten3">
                        <Link to="/login">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 7C14 5.897 13.103 5 12 5C10.897 5 10 5.897 10 7C10 8.103 10.897 9 12 9C13.103 9 14 8.103 14 7ZM16 7C16 9.206 14.206 11 12 11C9.794 11 8 9.206 8 7C8 4.794 9.794 3 12 3C14.206 3 16 4.794 16 7ZM5 20C5 16.14 8.141 13 12 13C15.859 13 19 16.14 19 20C19 20.552 18.553 21 18 21C17.447 21 17 20.552 17 20C17 17.243 14.757 15 12 15C9.243 15 7 17.243 7 20C7 20.552 6.553 21 6 21C5.447 21 5 20.552 5 20Z" fill="#707382" />
                            </svg>
                        </Link>
                    </div>

                    <div className="col-1 conten3">
                        <div className="alerta-carrito">
                            {productos.length > 0 && (
                                <div className="alerta">
                                    {productos.length}
                                </div>
                            )}
                        </div>

                        <img src="src/Home/imagenes/shopping-cart.svg" alt="carrito de compras" onClick={openModal} />


                        {/* <img className="logousuario" src={imgcarro} alt="" /> */}
                    </div>

                </div>
            </div >
            <div className="contenedorxx">
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Carrito de compras"


                    style={{
                        content: {
                            top: '50%',
                            left: '70%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '52%', // Cambia esto para ajustar el ancho
                            height: '86%', // Cambia esto para ajustar la altura
                        },
                    }}


                >
                    <Carromodal />

                    {/* Renderiza los productos en el carrito aquí */}
                    {productos.map((producto: { id: Key | null | undefined; }) => (
                        <div key={producto.id}>
                            {/* Renderiza los detalles del producto aquí */}
                        </div>
                    ))}
                    <div>
                        <button className="boton-navegacion" onClick={() => { navigate('/carrito'); closeModal(); }}>
                            Ir al carro de compras
                        </button>


                    </div>
                </Modal>

            </div>

        </>
    )
}
export default Menu;