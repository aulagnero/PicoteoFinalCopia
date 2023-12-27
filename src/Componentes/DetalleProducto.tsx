import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProducto } from "../models/IProducto";
import "./ProductoIndividual.css";

const productoInicial: IProducto = {
  id: 0,
  nombre: "",
  precio: 0,
  valoracion: 0,
  categoria: "",
  descripcion: "",
  imagen: [],
};

function Rating({ value }: { value: number }) {
  const emptyStar = (
    <svg
      className="star empty-star"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9995 16.05C12.1585 16.05 12.3175 16.088 12.4625 16.163L16.2315 18.133L15.5145 13.976C15.4575 13.65 15.5665 13.318 15.8045 13.087L18.8405 10.151L14.6375 9.539C14.3125 9.492 14.0315 9.289 13.8855 8.995L11.9995 5.201L10.1135 8.995C9.96755 9.289 9.68655 9.492 9.36155 9.539L5.15855 10.151L8.19455 13.087C8.43255 13.318 8.54155 13.65 8.48455 13.976L7.76755 18.133L11.5365 16.163C11.6815 16.088 11.8405 16.05 11.9995 16.05ZM17.5615 20.955C17.4025 20.955 17.2435 20.918 17.0985 20.842L11.9995 18.178L6.90055 20.842C6.56255 21.018 6.15455 20.987 5.84955 20.763C5.54155 20.539 5.38855 20.16 5.45255 19.785L6.42455 14.157L2.30455 10.172C2.02955 9.907 1.93155 9.509 2.04855 9.146C2.16455 8.783 2.47855 8.519 2.85555 8.464L8.55655 7.636L11.1035 2.51C11.4415 1.83 12.5575 1.83 12.8955 2.51L15.4425 7.636L21.1435 8.464C21.5205 8.519 21.8345 8.783 21.9505 9.146C22.0675 9.509 21.9695 9.907 21.6945 10.172L17.5745 14.157L18.5465 19.785C18.6105 20.16 18.4575 20.539 18.1495 20.763C17.9765 20.891 17.7695 20.955 17.5615 20.955Z"
        fill="#025B59"
      />
    </svg>
  );
  const filledStar = (
    <svg
      className="star filled-star"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.5616 21.0007C17.4036 21.0007 17.2446 20.9637 17.0986 20.8877L11.9996 18.2237L6.90159 20.8877C6.56359 21.0627 6.15559 21.0327 5.84959 20.8087C5.54159 20.5847 5.38859 20.2057 5.45359 19.8307L6.42459 14.2027L2.30459 10.2177C2.03059 9.95265 1.93159 9.55465 2.04859 9.19065C2.16559 8.82865 2.47859 8.56365 2.85659 8.50965L8.55659 7.68165L11.1046 2.55565C11.4426 1.87565 12.5576 1.87565 12.8956 2.55565L15.4436 7.68165L21.1436 8.50965C21.5216 8.56365 21.8346 8.82865 21.9516 9.19065C22.0686 9.55465 21.9696 9.95265 21.6956 10.2177L17.5756 14.2027L18.5466 19.8307C18.6116 20.2057 18.4576 20.5847 18.1506 20.8087C17.9766 20.9367 17.7696 21.0007 17.5616 21.0007Z"
        fill="#025B59"
      />
    </svg>
  );
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < value) {
      stars.push(filledStar);
    } else {
      stars.push(emptyStar);
    }
  }

  return <div>{stars}</div>;
}

function DetalleProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState<IProducto>(productoInicial);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data: any) => {
        setProducto(data);
        setSelectedImage(data.imagen[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container mt-4 contenedor-producto">
        <div className="row mt-40 mb-40">
          <div className="col-12 detalle-producto">
            <div className="row g-0 ">
              <div className="col-6 fila-principal">
                <div className=" col-2 thumbnails">
                  {producto.imagen.map((image: string, index: number) => (
                    <div key={index} className="imagen-pequena">
                      <img src={image} alt={producto.nombre} onClick={() => setSelectedImage(image)} />
                    </div>
                  ))}
                </div>
                <div className="col-md-4 imagen-principal">
                  <img src={selectedImage} className="img-fluid rounded-start imagen-grande" alt={producto.nombre} />
                </div>
              </div>

              <div className="col-md-6">
                <div className="row">
                  <div className="col-8">
                    <h3>
                      {" "}
                      <div className="nombre-producto">{producto.nombre}</div>
                    </h3>
                    <Rating value={producto.valoracion} />
                  </div>

                  <div className="col-4">
                    <p className="precio-producto">${producto.precio}</p>
                  </div>

                  <div className="descripcion-producto">{producto.descripcion}</div>
                  <div className="descripcion-producto">{producto.categoria}</div>

                  <div className="col-12 texto-numerado">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                        <path
                          d="M17.0347 10.3827C17.0347 14.7737 13.2214 18.3333 8.51735 18.3333C3.81335 18.3333 0 14.7737 0 10.3827C0 5.99177 3.81335 2.43219 8.51735 2.43219C13.2214 2.43219 17.0347 5.99177 17.0347 10.3827Z"
                          fill="#007D7B"
                          fill-opacity="0.6"
                        />
                        <path
                          d="M18 13.7219V15.6831H8.91483V13.7219H12.2423V4.78555C12.2423 4.43219 12.2536 4.06823 12.2763 3.69368L9.9142 5.5382C9.77792 5.63714 9.64164 5.70074 9.50536 5.72901C9.37666 5.75021 9.25173 5.75021 9.1306 5.72901C9.01703 5.70781 8.91483 5.67247 8.82397 5.623C8.73312 5.56647 8.66498 5.5064 8.61956 5.44279L7.73375 4.30852L12.742 0.333252H15.0473V13.7219H18Z"
                          fill="#252525"
                        />
                      </svg>
                    </div>

                    <div className="col- 10 descripcion-producto">
                      Empezando desde $30,000 incluyendo <br />
                      delivery todos los meses a tu casa{" "}
                    </div>
                  </div>

                  <div className="col-12 texto-numerado">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                        <path
                          d="M16.6873 10.7812C16.6873 15.1363 12.9517 18.6667 8.34363 18.6667C3.73557 18.6667 0 15.1363 0 10.7812C0 6.42618 3.73557 2.89572 8.34363 2.89572C12.9517 2.89572 16.6873 6.42618 16.6873 10.7812Z"
                          fill="#007D7B"
                          fill-opacity="0.6"
                        />
                        <path
                          d="M17.0321 13.62C17.3288 13.62 17.5624 13.7006 17.733 13.8618C17.911 14.016 18 14.2228 18 14.4822V16.0382H6.96415V15.1761C6.96415 15.0009 7.00124 14.8186 7.0754 14.6294C7.15698 14.4331 7.28307 14.2579 7.45365 14.1037L12.3375 9.4775C12.7454 9.08497 13.1088 8.70997 13.4277 8.3525C13.754 7.99502 14.0247 7.64105 14.2398 7.29058C14.4549 6.94011 14.618 6.58614 14.7293 6.22866C14.848 5.86418 14.9073 5.48217 14.9073 5.08264C14.9073 4.71815 14.8517 4.39922 14.7404 4.12586C14.6292 3.84549 14.4697 3.61067 14.2621 3.42142C14.0618 3.23217 13.8171 3.09198 13.5278 3.00086C13.246 2.90273 12.9271 2.85366 12.5711 2.85366C12.2447 2.85366 11.9407 2.89922 11.6588 2.99035C11.3844 3.07446 11.1397 3.19712 10.9246 3.35834C10.7095 3.51254 10.5278 3.69479 10.3795 3.90507C10.2311 4.11535 10.1199 4.34665 10.0457 4.59899C9.91965 4.92142 9.75649 5.13521 9.55624 5.24035C9.356 5.34549 9.06675 5.37002 8.6885 5.31394L7.24227 5.07212C7.35352 4.34315 7.5686 3.7053 7.88752 3.15857C8.20643 2.60483 8.60321 2.14572 9.07787 1.78123C9.55995 1.40974 10.1088 1.13287 10.7244 0.950626C11.3473 0.761374 12.0148 0.666748 12.7268 0.666748C13.4685 0.666748 14.1471 0.771888 14.7627 0.982168C15.3782 1.18544 15.9048 1.47633 16.3424 1.85483C16.78 2.23334 17.1211 2.68894 17.3659 3.22165C17.6106 3.75436 17.733 4.34665 17.733 4.99852C17.733 5.55927 17.644 6.07796 17.466 6.5546C17.2954 7.03123 17.0618 7.48684 16.7651 7.92142C16.4759 8.356 16.1347 8.77656 15.7417 9.1831C15.3486 9.58965 14.937 10.0032 14.5068 10.4238L10.8801 13.9249C11.2287 13.8268 11.5735 13.7532 11.9147 13.7041C12.2633 13.6481 12.5933 13.62 12.9048 13.62H17.0321Z"
                          fill="#252525"
                        />
                      </svg>
                    </div>

                    <div className="col- 10 descripcion-producto">
                      Empezando desde $30,000 incluyendo <br />
                      delivery todos los meses a tu casa{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container perfil-sabor">
          <div className="row">
            <div className="col-1">
              <div className="perfil-sabor-etiquetas">
                <span>Suave</span>
              </div>
            </div>
            <div className="col-10 slider">
              <input type="range" id="perfil-sabor" name="perfil-sabor" min="0" max="100" />
            </div>
            <div className="col-1">
              <div className="perfil-sabor-etiquetas">
                <span>Audaz</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-1">
              <div className="perfil-sabor-etiquetas">
                <span>Ligero</span>
              </div>{" "}
            </div>
            <div className="col-10 slider">
              <input type="range" id="perfil-sabor" name="perfil-sabor" min="0" max="100" />
            </div>
            <div className="col-1">
              <div className="perfil-sabor-etiquetas">
                <span>Ácido</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-1">
              <div className="perfil-sabor-etiquetas">
                <span>Sin gas</span>
              </div>
            </div>
            <div className="col-10 slider">
              <input type="range" id="perfil-sabor" name="perfil-sabor" min="0" max="100" />
            </div>
            <div className="col-1">
              <div className="perfil-sabor-etiquetas">
                <span>Gasificado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetalleProducto;
