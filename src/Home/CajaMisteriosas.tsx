import React, { useState } from "react";
import { Llamada } from "./llamadaCard";
import Card, { Link } from "../Componentes/Card";
import "./cajamisteriosa.css"
import Card3 from "../Componentes/Card3";

interface Producto {
  valoracion: number;
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  imagen: string[];
}

function CajaMisteriosa() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const ENDPOINT: string = Link + "";

  return (
    <>
      <div className='container '>

       
        <div className="row contenedor-cards">
          <div className="col-6 cont-card">
            <Llamada endpoint={ENDPOINT} setData={setProductos} />


            {productos.length > 0 ? (
              productos.slice(0, 1).map((prod, index) => <Card3 key={index} producto={prod} />)
            ) : (
              <p>Cargando...</p>
            )}
          </div>
          <div className="col-6 parrafos">
            <div className="row">
              <div className="titular">Disfruta tu caja con planes que te acomodan: </div>
            </div>


            <div className="col-12 texto-numerado" style={{margin: '0px'}}>

              <div><svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 18 19" fill="none">
                <path d="M17.0347 10.3827C17.0347 14.7737 13.2214 18.3333 8.51735 18.3333C3.81335 18.3333 0 14.7737 0 10.3827C0 5.99177 3.81335 2.43219 8.51735 2.43219C13.2214 2.43219 17.0347 5.99177 17.0347 10.3827Z" fill="#007D7B" fill-opacity="0.6" />
                <path d="M18 13.7219V15.6831H8.91483V13.7219H12.2423V4.78555C12.2423 4.43219 12.2536 4.06823 12.2763 3.69368L9.9142 5.5382C9.77792 5.63714 9.64164 5.70074 9.50536 5.72901C9.37666 5.75021 9.25173 5.75021 9.1306 5.72901C9.01703 5.70781 8.91483 5.67247 8.82397 5.623C8.73312 5.56647 8.66498 5.5064 8.61956 5.44279L7.73375 4.30852L12.742 0.333252H15.0473V13.7219H18Z" fill="#252525" />
              </svg></div>

              <div className="col-12 suscripcion-producto">Subscripción </div>
            </div>

            <div className="row">
              <div className="col-12 texto-parrafos">Planes de 3, 6, 12 meses</div>
            </div>

            <div className="row">
              <div className="col-12">Empezando desde $30,000 incluyendo delivery todos los meses a tu casa</div>
            </div>



            <div className="col-12 texto-numerado" style={{margin: '0px'}}>

              <div><svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 18 19" fill="none">
                <path d="M16.6873 10.7812C16.6873 15.1363 12.9517 18.6667 8.34363 18.6667C3.73557 18.6667 0 15.1363 0 10.7812C0 6.42618 3.73557 2.89572 8.34363 2.89572C12.9517 2.89572 16.6873 6.42618 16.6873 10.7812Z" fill="#007D7B" fill-opacity="0.6" />
                <path d="M17.0321 13.62C17.3288 13.62 17.5624 13.7006 17.733 13.8618C17.911 14.016 18 14.2228 18 14.4822V16.0382H6.96415V15.1761C6.96415 15.0009 7.00124 14.8186 7.0754 14.6294C7.15698 14.4331 7.28307 14.2579 7.45365 14.1037L12.3375 9.4775C12.7454 9.08497 13.1088 8.70997 13.4277 8.3525C13.754 7.99502 14.0247 7.64105 14.2398 7.29058C14.4549 6.94011 14.618 6.58614 14.7293 6.22866C14.848 5.86418 14.9073 5.48217 14.9073 5.08264C14.9073 4.71815 14.8517 4.39922 14.7404 4.12586C14.6292 3.84549 14.4697 3.61067 14.2621 3.42142C14.0618 3.23217 13.8171 3.09198 13.5278 3.00086C13.246 2.90273 12.9271 2.85366 12.5711 2.85366C12.2447 2.85366 11.9407 2.89922 11.6588 2.99035C11.3844 3.07446 11.1397 3.19712 10.9246 3.35834C10.7095 3.51254 10.5278 3.69479 10.3795 3.90507C10.2311 4.11535 10.1199 4.34665 10.0457 4.59899C9.91965 4.92142 9.75649 5.13521 9.55624 5.24035C9.356 5.34549 9.06675 5.37002 8.6885 5.31394L7.24227 5.07212C7.35352 4.34315 7.5686 3.7053 7.88752 3.15857C8.20643 2.60483 8.60321 2.14572 9.07787 1.78123C9.55995 1.40974 10.1088 1.13287 10.7244 0.950626C11.3473 0.761374 12.0148 0.666748 12.7268 0.666748C13.4685 0.666748 14.1471 0.771888 14.7627 0.982168C15.3782 1.18544 15.9048 1.47633 16.3424 1.85483C16.78 2.23334 17.1211 2.68894 17.3659 3.22165C17.6106 3.75436 17.733 4.34665 17.733 4.99852C17.733 5.55927 17.644 6.07796 17.466 6.5546C17.2954 7.03123 17.0618 7.48684 16.7651 7.92142C16.4759 8.356 16.1347 8.77656 15.7417 9.1831C15.3486 9.58965 14.937 10.0032 14.5068 10.4238L10.8801 13.9249C11.2287 13.8268 11.5735 13.7532 11.9147 13.7041C12.2633 13.6481 12.5933 13.62 12.9048 13.62H17.0321Z" fill="#252525" />
              </svg></div>

              <div className="col- 12 suscripcion-producto">Caja individual </div>
            </div>

            <div className="row">
            
              <div className="col-12">Prueba una vez para compartir con visitas o disfrútala solo</div>
            </div>

            <div className="row">
          
              <div className="col-12">Después, vuelve a repetir tu compra cuando quieras o para todos tus eventos </div>
            </div>


          </div>
        </div>

        <div className='row'>
          <h2 className="textoo"><span >Productos individuales</span></h2>
        </div>
        <div className="row contenedor-cards">
          <div className="col-2 text-lateral">
            <p className="text-lateral">combina<br />el mejor<br />vino con<br />el picoteo<br />perfecto</p>
          </div>
          <div className="row col-10 target">
            <Llamada endpoint={ENDPOINT} setData={setProductos} />


            {productos.length > 0 ? (
              productos.slice(0, 3).map((prod, index) => <Card key={index} producto={prod} />)
            ) : (
              <p>Cargando...</p>
            )}
          </div>
        </div>



      </div>
    </>
  );
}

export default CajaMisteriosa;
