import { Link } from "react-router-dom";
import "./footer.css"

function Footernaciones() {

    return (

        <>
            <div className="container-fluid fondo">
                <div className="row footer-top 12-col" >

                    <div className="col-7">
                        <p className="titulo-footer">¿Te interesa aprender más sobre todo lo relacionado con el vino y el picoteo?</p>
                        <p className="body-footer">Suscríbete a nuestro boletín para recibir la receta gratuita, la más nueva productos y novedades a tu correo electrónico.</p>
                    </div>



                    <form className="col-3 form-suscripcion" action="subscribe">
                        <label htmlFor="emailInput" className="form-label">
                            Suscríbete
                        </label>
                        <input type="email" className="form-control" id="emailInput" placeholder="Escribe tu email" />
                        <button className="btn btn-primary"><Link to="/FormRegistro">Enviar</Link></button>
                        
                    </form>

                </div>

                <div className="row ">
                    <img src="src/Home/imagenes/separador.svg" alt="separador" />
                </div>

                <div className="row footer-top 12-col" >
                    <div className="col-2 footer-logos">
                        <a href="/home"><img src="src/Home/imagenes/Logo-viña-picoteo.svg" alt="logo viña picoteo" /></a>
                        <div className="rrss">
                            <a href="https://www.facebook.com" target="blank"><img src="src/Home/imagenes/logo-FB.svg" alt="logo Facebook" /></a>
                            <a href="https://www.whatsapp.com" target="blank"><img src="src/Home/imagenes/logo-WSP.svg" alt="logo Whatsapp" /></a>
                            <a href="https://www.instagram.com" target="blank"><img src="src/Home/imagenes/logo-INSTAGRAM.svg" alt="logo Instagram" /></a>
                        </div>
                    </div>
                    <ul className="col-1 footer-links">
                        <li> <a className="a-footer" href="#">Enviar</a> </li>
                        <li> <a className="a-footer" href="#">Cajas</a> </li>
                        <li> <a className="a-footer" href="#">Vinos</a> </li>
                        <li> <a className="a-footer" href="#">Snacks</a> </li>
                        <li> <a className="a-footer" href="#">Links</a> </li>
                    </ul>

                    <ul className="col-1 footer-links">
                        <li> <a className="a-footer" href="#">Soporte</a> </li>
                        <li> <a className="a-footer" href="#">FAQ</a> </li>
                        <li> <a className="a-footer" href="#">Contacto</a> </li>
                        <li> <a className="a-footer" href="#">Políticas</a> </li>
                        <li> <a className="a-footer" href="#">Nosotros</a> </li>
                    </ul>

                </div>

            </div>

            
        </>
    )
}
export default Footernaciones;