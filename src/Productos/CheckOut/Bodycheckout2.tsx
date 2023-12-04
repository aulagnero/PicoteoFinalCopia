import { useFormik } from 'formik';
import * as yup from 'yup';
import { validate } from 'rut.js';
import './BodycheckOut.css';
import { useEffect, useState } from 'react';

// Definición de la interfaz Region
interface Region {
    region: string;
    comunas: string[];
}

const Bodycheckout2 = () => {
    const validarRut = (rut) => validate(rut);

    const basicSchema = yup.object().shape({
        name: yup.string().required('Este campo es requerido'),
        email: yup.string().email('Este campo debe ser un email válido').required('Este campo es requerido'),
        rut: yup.string().test('rut-invalido', 'Rut inválido', validarRut),
        direccion: yup.string().required('Este campo es requerido'),
        referencia: yup.string().required('Este campo es requerido'),
        region: yup.string().required('Este campo es requerido'),
        comuna: yup.string().required('Este campo es requerido'),
    });

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            email: '',
            rut: '',
            direccion: '',
            referencia: '',
            region: '',
            comuna: '',
        },
        validationSchema: basicSchema,

        onSubmit: (values) => {
            console.log('Datos del formulario:', values);

            const formData = {
                name: values.name,
                email: values.email,
                rut: values.rut,
                direccion: values.direccion,
                referencia: values.referencia,
                region: values.region,
                comuna: values.comuna,
            };

            fetch('http://localhost:3000/formulario', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Algo salió mal al enviar el formulario');
                    }
                })
                .then((json) => {
                    console.log(json);
                    // Puedes agregar lógica adicional, como mostrar un mensaje de éxito.
                })
                .catch((error) => {
                    console.error(error);
                    // Puedes mostrar un mensaje de error en la interfaz de usuario.
                });
        },
    });

    const [regiones, setRegiones] = useState<Region[] | null>(null);
    const [comunas, setComunas] = useState<string[]>([]);

    useEffect(() => {
        // Valores predeterminados para evitar errores antes de cargar datos reales
        setRegiones([]);
        setComunas([]);
        
        fetch('http://localhost:3000/regiones')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setRegiones(data);
                } else {
                    console.error('La respuesta del servidor no es un array:', data);
                }
            })
            .catch(error => console.error('Error:', error));
    }, []);

    const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedRegion = event.target.value;
        handleChange(event); // Actualiza el valor en el estado de Formik
        setComunas([]); // Reinicia las comunas al cambiar la región

        const region = regiones?.find((r: Region) => r.region === selectedRegion);
        if (region) {
            setComunas(region.comunas);
        }
    };

    return (
        <div className="contenedor-body-checkout">
            <div className="contenedor-envio">
                <div className="envio">1. Envío</div>
                <form className="datos-envio" onSubmit={handleSubmit}>
                    <div className="campo-select">
                        <div className="contenedor-inputs">
                            <label htmlFor="name" className="label-inputs">
                                Nombre Completo (*)
                            </label>
                            <input
                                placeholder="Nombres y Apellidos"
                                className="campo-formulario"
                                type="text"
                                name="name"
                                value={values.name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {errors.name && touched.name && <span className="help-text">{errors.name}</span>}
                            <br />
                            <br />

                            <label htmlFor="email" className="label-inputs">
                                Correo Electrónico (*)
                            </label>
                            <input
                                placeholder="nombre@servidor.com"
                                className="campo-formulario"
                                type="email"
                                name="email"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {errors.email && touched.email && <span className="help-text">{errors.email}</span>}
                            <br />

                            <label htmlFor="rut" className="label-inputs">
                                R.U.T. (*)
                            </label>
                            <input
                                placeholder="12.345.678-9"
                                className="campo-corto"
                                type="text"
                                name="rut"
                                value={values.rut}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {errors.rut && touched.rut && <span className="help-text">{errors.rut}</span>}
                            <br />

                            <label htmlFor="direccion" className="label-inputs">
                                Dirección de envío
                            </label>
                            <input
                                placeholder="Dirección"
                                className="campo-formulario"
                                type="text"
                                name="direccion"
                                value={values.direccion}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {errors.direccion && touched.direccion && (
                                <span className="help-text">{errors.direccion}</span>
                            )}
                            <br />

                            <div className="row mt-3">
                                <div className="col-6">
                                    <label htmlFor="region" className=" label-datos mb-0">Región</label>
                                    <select
                                        className="form-select"
                                        id="region"
                                        name="region"
                                        value={values.region}
                                        onChange={handleRegionChange}
                                    >
                                        <option value="">Seleccione una región</option>
                                        {regiones?.map(region => (
                                            <option key={region.region} value={region.region}>
                                                {region.region}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.region && touched.region && (
                                        <span className="help-text">{errors.region}</span>
                                    )}
                                </div>
                                <div className="col-6">
                                    <label htmlFor="comuna" className="form-label label-datos mb-0">Comuna</label>
                                    <select
                                        className="form-select"
                                        id="comuna"
                                        name="comuna"
                                        value={values.comuna}
                                        onChange={handleChange}
                                    >
                                        <option value="">Seleccione una comuna</option>
                                        {comunas.map(comuna => (
                                            <option key={comuna} value={comuna}>
                                                {comuna}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.comuna && touched.comuna && (
                                        <span className="help-text">{errors.comuna}</span>
                                    )}
                                </div>
                            </div>

                            <label htmlFor="referencia" className="label-inputs">
                                Referencias
                            </label>
                            <input
                                placeholder="Comentario"
                                className="campo-formulario"
                                type="text"
                                name="referencia"
                                value={values.referencia}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {errors.referencia && touched.referencia && (
                                <span className="help-text">{errors.referencia}</span>
                            )}
                            <br />

                            <button type="submit" className="boton-formulario">
                                Siguiente
                            </button>
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
    );
};

export default Bodycheckout2;
