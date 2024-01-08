import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Mantenedor.css";

const FormIngresoProdBS: React.FC = () => {
  const [formData, setFormData] = useState({

    nombre: "",
    categoria: "",
    descripcion: "",
    precio: "",
    valoracion: "",
    imagen: [],
  });

  const onDrop = (acceptedFiles: File[]) => {
    const imagePromises = acceptedFiles.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result as string;
          resolve(base64String);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises).then((base64Images) => {
      setFormData({
        ...formData,
        imagen: [...formData.imagen, ...base64Images],
      });
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Mostrar notificación de éxito
        toast.success("Registro exitoso. El producto ha sido ingresado.", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000, // Cerrar automáticamente después de 5 segundos
        });

        // Resetear el formulario después de 5 segundos
        setTimeout(() => {
          return setFormData({
            nombre: "",
            categoria: "",
            descripcion: "",
            precio: "",
            valoracion: "",
            imagen: "",
          });
        }, 3000);
      } else {
        console.error("Error al ingresar el producto");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };



  return (

    
      <div className="container">
        <div className="row g">
          <h2><div className="col-12 ingreso">Ingreso de productos</div></h2>

          <div className="col-12">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="nameInput" className="form-label label-datos mt-3">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  placeholder="Escribe el nombre del producto"
                  name="nombre"
                  onChange={handleChange}
                  value={formData.nombre}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="categoryInput" className="form-label label-datos mt-3">
                  Categoría
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="categoryInput"
                  placeholder="Escribe la categoría del producto"
                  name="categoria"
                  onChange={handleChange}
                  value={formData.categoria}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="descriptionInput" className="form-label label-datos">
                  Descripción
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="descriptionInput"
                  placeholder="Escribe la descripción del producto"
                  name="descripcion"
                  onChange={handleChange}
                  value={formData.descripcion}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="priceInput" className="form-label label-datos">
                  Precio
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="priceInput"
                  placeholder="Escribe el precio del producto"
                  name="precio"
                  onChange={handleChange}
                  value={formData.precio}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="valorationInput" className="form-label label-datos">
                  Valoración
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="valorationInput"
                  placeholder="Escribe un número del 1 al 5"
                  name="valoracion"
                  onChange={handleChange}
                  value={formData.valoracion}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="imageInput" className="form-label label-datos">
                  Imágenes
                </label>

                <div {...getRootProps()} className="dropzone">
                  <input {...getInputProps()} />
                  <p>Arrastra y suelta las imágenes aquí o haz clic para seleccionarlas.</p>
                </div>

                {formData.imagen.length > 0 && (
                  <div>
                    <p>Imágenes seleccionadas:</p>
                    {formData.imagen.map((image: string | undefined, index: React.Key | null | undefined) => (
                      <img
                        key={index}
                        src={image}
                        alt={`imagen-${index}`}
                        style={{ maxWidth: "100px", maxHeight: "100px", margin: "5px" }}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="col-md-6">
                {/* React Toastify Container para mostrar notificaciones */}
                <ToastContainer />

                <button type="submit" className="boton-ingresar">
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
     
  );
};

export default FormIngresoProdBS;
