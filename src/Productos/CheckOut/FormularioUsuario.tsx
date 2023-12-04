import { useFormik } from "formik";
import * as yup from "yup";
import "./FormularioUsuario.css";
import { validate } from "rut.js";


export const FormularioUsuario = () => {

    function validarRut() {
        if (validate(values.rut)) {
            return true;
        } else {
            return false;
        }
    }

    const basicSchema = yup.object().shape({
       
        name: yup.string().required('Este campo es obligatorio'),
        email: yup.string().email("Dirección de correo inválida").required('Este campo es obligatorio'),
        rut: yup.string().test('rut-invalido', 'El RUT ingresado es inválido', validarRut).required('Este campo es obligatorio'),
        phone: yup.string().min(9, 'El número de teléfono debe tener 9 caracteres').max(9, 'El número de teléfono debe tener 9 caracteres').required('Este campo es obligatorio'),
        message: yup.string().required('Este campo es obligatorio')
    });

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                
                name: "",
                email: "",
                rut: "",
                phone: "",
                message: ""
            },
            validationSchema: basicSchema,

            onSubmit: (values) => {
                console.log(values);
            },
        });

    return (
        <>
            {/* CODIGO DE EJEMPLO*/}
            {/* <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleChange}
          value={values.firstName}
          onBlur={handleBlur}
          className={errors.firstName && touched.firstName ? "error-input" : ""}
        />
        {errors.firstName && touched.firstName && (
          <p className="error-input">{errors.firstName}</p>
        )}

        <button type="submit"> Enviar datos</button>
      </form> */}

            <div className="contenedor-body-checkout">

                <div className="contenedor-envio">
                    <div className="contactos-formulario">
                        <div className="item-contacto">
                            <img src="src/assets/CORREO.svg" alt="email" />
                            hola@vinapicoteo.cl
                        </div>

                        <div className="item-contacto">
                            <img src="src/assets/telefono.svg" alt="telefono" />
                            2236 5679
                        </div>

                        <div className="item-contacto">
                            <img src="src/assets/telefono.svg" alt="celular" />
                            +569 2468 1357
                        </div>

                    </div>

                    <form className="datos-envio" onSubmit={handleSubmit}>

                        <div className="campo-select">

                            <div className="contenedor-inputs">

                                <label htmlFor="name" className="label-inputs">
                                    Nombre Completo (*)
                                </label>
                                <input
                                    placeholder="Nombres y Apellidos"
                                    className="campo-corto"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={values.name}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.name && touched.name && (<span className="help-text">{errors.name}</span>)}
                            </div>

                            <div className="contenedor-inputs">
                                <label htmlFor="email" className="label-inputs">Correo Electrónico (*)</label>
                                <input
                                    placeholder="nombre@servidor.com"
                                    className="campo-corto"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={values.email}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.email && touched.email && (<span className="help-text">{errors.email}</span>)}
                            </div>

                        </div>
                        <div className="campo-select">

                            <div className="contenedor-inputs">

                                <label htmlFor="rut" className="label-inputs">R.U.T. (*)</label>
                                <input
                                    placeholder="12.345.678-9"
                                    className="campo-corto"
                                    type="text"
                                    id="rut"
                                    name="rut"
                                    value={values.rut}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.rut && touched.rut && (<span className="help-text">{errors.rut}</span>)}
                            </div>

                            <div className="contenedor-inputs">
                                <label htmlFor="phone" className="label-inputs">Teléfono (*)</label>
                                <input
                                    placeholder="123456789"
                                    className="campo-corto"
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={values.phone}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.phone && touched.phone && (<span className="help-text">{errors.phone}</span>)}

                            </div>
                        </div>

                        <div className="contenedor-inputs">

                            <label htmlFor="message" className="label-inputs">Mensaje</label>
                            <textarea
                            
                                placeholder="Dejar en el mesón de conserjería"
                                className="campo-formulario-faq"
                                id="message"
                                name="message"
                                value={values.message}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {errors.message && touched.message && (<span className="help-text">{errors.message}</span>)}


                        </div>

                        <button type="submit" className="boton-formulario">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    );
};


