import { Link } from "react-router-dom";
import "./footer.css"

function Footernaciones ()  {

    return ( 

    <div className="footer-container">
        <div className="footer-subscribe">
            <div className="subscribe-item">
                <Link to="/FormRegistro"><h2>SUBCRÍBETE</h2></Link>
                <p>¿CÓMO HACERLO?</p>
            </div>
            <div className="subscribe-item">
                <div className="subscribe-item-img"></div>
            </div>
            <div className="subscribe-item">
                <div className="subscribe-item-img"></div>
            </div>
            <div className="subscribe-item">
                <div className="subscribe-item-img"></div>    
            </div> 
        </div>
        <div className="subscribe-email">
            <form className='subscribe-form'>
                <p className='subscribe-email-label'>Ingresa tu correo</p>
                <input className='subscribe-email-input' type='email'></input>   
            </form>    
        </div> 

        <div className="footer-info">
            <div className="info-item">
                <ul>
                    <li className="li-footer"><a className='a-footer' href='#'>ABOUT US</a></li>
                    <li className="li-footer"><a className='a-footer' href='#'>FAQ</a></li>
                    <li className="li-footer"><a className='a-footer' href='#'>SOPORTE</a></li>
                    <li className="li-footer"><a className='a-footer' href='#'>POLITICA DE PRIVACIDAD</a></li>
                </ul>
            </div>    
             
            <div className="info-item">
                <ul>
                    <li className="li-footer"><a className='a-footer' href='#'>ABOUT US</a></li>
                    <li className="li-footer"><a className='a-footer' href='#'>FAQ</a></li>
                    <li className="li-footer"><a className='a-footer' href='#'>SOPORTE</a></li>
                    <li className="li-footer"><a className='a-footer' href='#'>POLITICA DE PRIVACIDAD</a></li>
                </ul>
            </div>    
             
            <div className="info-item">
                <ul>
                    <li className="li-footer"><a className='a-footer' href='#'>ABOUT US</a></li>
                    <li className="li-footer"><a className='a-footer' href='#'>FAQ</a></li>
                    <li className="li-footer"><a className='a-footer' href='#'>SOPORTE</a></li>
                    <li className="li-footer"><a className='a-footer' href='#'>POLITICA DE PRIVACIDAD</a></li>
                </ul>
            </div>    
             
             
            <div className="info-item">
                <div className='flexBigContainer'></div>
                <div className='flexSmallContainer'>
                    <div className='small-item'></div>
                    <div className='small-item'></div>
                    <div className='small-item'></div>
                    <div className='small-item'></div>
                </div>
            </div>    
        </div>
  </div>
  )
}
export default Footernaciones;