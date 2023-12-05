import { useFormik } from "formik";
import * as yup from "yup";
import "./BodycheckOut.css";
import { validate } from "rut.js";
import { Link } from "react-router-dom";


const SignUp = () => {

    function validarRut() {
        if (validate(values.rut)) {
            return true;
        } else {
            return false;
        }
    }

    const basicSchema = yup.object().shape({
        // firstName: yup.string().min(4),
        name: yup.string().required('Este campo es requerido'),
        email: yup.string().email("Este campo debe ser email").required('Este campo es requerido'),
        rut: yup.string().test('rut-invalido', 'Rut invalido', validarRut),
        direccion: yup.string().required('Este campo es requerido'),
        referencia: yup.string().required('Este campo es requerido'),
        region: yup.string().required('Este campo es requerido'),
        comuna: yup.string().required('Este campo es requerido'),

    });

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                // firstName: "",
                name: "",
                email: "",
                rut: "",
                direccion: "",
                referencia: "",
                region: "",
                comuna: ""
            },
            validationSchema: basicSchema,

            onSubmit: (values) => {
                console.log(values);
            },
        });

    return (

        <div className="contenedor-body-checkout">
            <div className="contenedor-envio">
                <div className="envio">1. Envío</div>

                <form className="datos-envio" onSubmit={handleSubmit}>
                    <div className="campo-select">
                        <div className="contenedor-inputs">
                            <div className="contenedor-inputs">
                                <label htmlFor="name" className="label-inputs">
                                    Nombre Completo (*)
                                </label>
                                <input
                                    placeholder="Nombres y Apellidos"
                                    className="campo-formulario"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={values.name}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.name && touched.name && (<span className="help-text">{errors.name}</span>)}
                                <br />
                                <br />

                                <label htmlFor="email" className="label-inputs">Correo Electrónico (*)</label>
                                <input
                                    placeholder="nombre@servidor.com"
                                    className="campo-formulario"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={values.email}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.email && touched.email && (<span className="help-text">{errors.email}</span>)}
                                <br />
                            </div>

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
                            <br />

                            <div className="contenedor-inputs">
                                <label htmlFor="direccion" className="label-inputs"> Dirección de envío</label>

                                <input
                                    placeholder="direccion"
                                    className="campo-formulario"
                                    type="text"
                                    id="direccion"
                                    name="direccion"
                                    value={values.direccion}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.name && touched.name && (<span className="help-text">{errors.direccion}</span>)}
                                <br />


                            </div>


                            <div className="campo-select">
                                <div className="contenedor-inputs">
                                <label htmlFor="region" className="label-inputs"> Region</label>
                                <input
                                    placeholder="Region"
                                    className="campo-corto"
                                    type="text"
                                    id="region"
                                    name="region"
                                    value={values.region}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.name && touched.name && (<span className="help-text">{errors.region}</span>)}
                                </div>
                                <br />
                                <div className="contenedor-inputs">
                                <label htmlFor="comuna" className="label-inputs"> Comuna</label>
                                <input
                                    placeholder="Comuna"
                                    className="campo-corto"
                                    type="text"
                                    id="comuna"
                                    name="comuna"
                                    value={values.comuna}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.name && touched.name && (<span className="help-text">{errors.comuna}</span>)}
                                </div>

                            </div>
                            <br />
                            <div className="contenedor-inputs">
                                <label htmlFor="referencia" className="label-inputs">Referencias</label>
                                <input
                                    placeholder="Comentario"
                                    className="campo-formulario"
                                    type="text"
                                    id="referencia"
                                    name="referencia"
                                    value={values.referencia}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.name && touched.name && (<span className="help-text">{errors.referencia}</span>)}

                            </div>


                            <Link to="/checkoutdatos"> <button type="submit" className="boton-formulario">Siguiente</button></Link>

                        </div>
                    </div>
                </form>
            </div>
            <div className="contenedor-pago">
                <div className="pago">2. Datos</div>
            </div>

            <div className="contenedor-pago">
                <div className="pago">3. Pago</div>
            </div>



        </div>
    )
}

export default SignUp;


