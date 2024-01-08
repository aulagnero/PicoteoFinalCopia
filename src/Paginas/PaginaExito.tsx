import { useNavigate } from 'react-router-dom';
import '../Componentes/FormUsuario.css';

function PaginaExito() {

    const navigate = useNavigate();

    return (
        <div className='container'>
            <div className="row contenedor-body-exito">

                <div className="col-5 iconos-exito">

                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                        <path d="M60.4338 36.5659V24.5659C47.1978 24.5659 36.4338 13.8019 36.4338 0.565918H24.4338C24.4338 13.8019 13.6698 24.5659 0.433838 24.5659V36.5659C13.6698 36.5659 24.4338 47.3299 24.4338 60.5659H36.4338C36.4338 47.3299 47.1978 36.5659 60.4338 36.5659ZM30.4338 40.6879C27.7698 36.6799 24.3198 33.2359 20.3118 30.5659C24.3198 27.9019 27.7638 24.4519 30.4338 20.4439C33.0978 24.4519 36.5478 27.8959 40.5558 30.5659C36.5478 33.2299 33.0978 36.6799 30.4338 40.6879Z" fill="black" fill-opacity="0.7" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="241" height="276" viewBox="0 0 241 276" fill="none">
                        <path d="M167.378 263.692L169.85 275.434L240.308 260.608L237.836 248.866L208.484 255.04L197.276 201.784C207.218 198.334 215.636 191.704 221.33 182.626C228.098 171.832 230.138 159.076 227.072 146.704L195.32 18.688L124.622 33.562L127.34 17.896L45.5539 0.687988L13.8019 128.704C10.7359 141.076 12.7759 153.832 19.5439 164.626C25.2379 173.704 33.6559 180.334 43.5979 183.784L32.3899 237.04L3.03792 230.866L0.565918 242.608L71.0239 257.434L73.4959 245.692L44.1379 239.512L55.3459 186.256C56.5939 186.358 57.8479 186.454 59.0899 186.454C68.2879 186.454 77.2699 183.712 85.0819 178.414C95.6299 171.262 102.638 160.414 104.816 147.856L118.886 66.706L136.082 165.856C138.26 178.414 145.268 189.262 155.816 196.414C163.628 201.712 172.604 204.454 181.808 204.454C183.05 204.454 184.304 204.358 185.552 204.256L196.76 257.512L167.378 263.692ZM54.4099 14.818L113.534 27.256L103.616 84.448L99.2419 80.074C91.1299 71.956 79.0039 69.46 68.3299 73.732C61.3519 76.528 53.3299 74.272 48.8179 68.254L43.0639 60.58L54.4099 14.818ZM78.3319 168.484C70.5139 173.794 61.0999 175.642 51.8479 173.698C42.5959 171.748 34.7299 166.264 29.7079 158.254C24.6859 150.244 23.1739 140.776 25.4479 131.596L39.3379 75.598C47.1139 85.834 60.8419 89.668 72.7939 84.874C78.9799 82.39 86.0419 83.842 90.7639 88.564L101.114 98.914L92.9839 145.81C91.3639 155.128 86.1619 163.18 78.3319 168.484ZM186.458 32.818L197.066 75.592L186.74 83.338C182.456 86.548 176.828 87.058 172.034 84.664C161.996 79.648 149.918 81.604 141.974 89.542L136.04 95.476L127.334 45.262L186.458 32.818ZM162.536 186.484C154.706 181.18 149.51 173.122 147.896 163.804L138.554 109.93L150.464 98.02C154.748 93.736 161.264 92.674 166.676 95.392C175.562 99.832 186.002 98.896 193.946 92.932L200.204 88.24L215.42 149.602C217.694 158.782 216.182 168.244 211.16 176.26C206.138 184.27 198.272 189.754 189.02 191.704C179.774 193.642 170.36 191.8 162.536 186.484Z" fill="black" fill-opacity="0.7" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                        <path d="M60.4338 36.5659V24.5659C47.1978 24.5659 36.4338 13.8019 36.4338 0.565918H24.4338C24.4338 13.8019 13.6698 24.5659 0.433838 24.5659V36.5659C13.6698 36.5659 24.4338 47.3299 24.4338 60.5659H36.4338C36.4338 47.3299 47.1978 36.5659 60.4338 36.5659ZM30.4338 40.6879C27.7698 36.6799 24.3198 33.2359 20.3118 30.5659C24.3198 27.9019 27.7638 24.4519 30.4338 20.4439C33.0978 24.4519 36.5478 27.8959 40.5558 30.5659C36.5478 33.2299 33.0978 36.6799 30.4338 40.6879Z" fill="black" fill-opacity="0.7" />
                    </svg>
                </div>

                <div className="col-7">
                    <h2 className="titulo-exito">Su pago ha sido exitoso <br /> ¡¡Salud!!</h2>
                    <p className="texto-exito">ID de la operacion #213321 <br /> VISA terminando en 2340 <br /> Total Pagado: $120, 000</p>
                    
                    <div className="iconos-exito">
                    <button 
                    type="submit" 
                    className="boton-navegacion" 
                    style={{ marginTop: '24px' }}  
                    onClick={() => navigate('/')}>
                        Volver a Viña Picoteo
                    </button>
                    </div>
                
                </div>

                

            </div>

            <div className='row contenedor-exito'>
            <p className='texto-exito'>Hemos enviado el comprobante y los detalles sobre el estado de tu pedido <br /> a tu correo electrónico registrado <br />¡Gracias por tu compra!</p>


            </div>

        </div>
    );
}

export default PaginaExito;