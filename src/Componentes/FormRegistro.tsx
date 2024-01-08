import { useFormik } from 'formik';
import * as yup from 'yup';
import { validate } from 'rut.js';
import './FormUsuario.css';
import { useEffect, useState } from 'react';

// Definición de la interfaz Region
interface Region {
    region: string;
    comunas: string[];
}

const FormUsuario = () => {
    const validarRut = (rut: string) => validate(rut);

    const basicSchema = yup.object().shape({
        name: yup
            .string()
            .required('Este campo es requerido'),
        email: yup
            .string()
            .email('Este campo debe ser un email válido')
            .required('Este campo es requerido'),
        rut: yup
            .string()
            .test('rut-invalido', 'Rut inválido', (rut) => rut ? validarRut(rut) : true),
        phone: yup
            .string()
            .min(9, 'El número de teléfono debe tener 9 caracteres')
            .max(9, 'El número de teléfono debe tener 9 caracteres').required('Este campo es obligatorio'),
        direccion: yup
            .string()
            .required('Este campo es requerido'),
        referencia: yup
            .string()
            .required('Este campo es requerido'),
        region: yup
            .string()
            .required('Este campo es requerido'),
        comuna: yup
            .string()
            .required('Este campo es requerido'),
        password: yup
            .string()
            .required('Este campo es requerido')
            .test(
                "regex",
                "La contraseña debe tener mínimo 8 caracteres, 1 signo, 1 mayúscula, 1 Número y 1 minúscula",
                val => {
                    const regExp = new RegExp(
                        "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                    );
                    console.log(regExp.test(val), regExp, val);
                    return regExp.test(val);
                }
            ),
        confirmPassword: yup
            .string()
            .required()
            .oneOf([yup.ref("password")], "Las contraseñas no coinciden")
            .nullable()
    });

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            email: '',
            rut: '',
            phone: '',
            direccion: '',
            referencia: '',
            region: '',
            comuna: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: basicSchema,

        onSubmit: (values) => {
            console.log('Datos del formulario:', values);

            const formData = {
                name: values.name,
                email: values.email,
                rut: values.rut,
                phone: values.phone,
                direccion: values.direccion,
                referencia: values.referencia,
                region: values.region,
                comuna: values.comuna,
                password: values.password,
                confirmPassword: values.confirmPassword,
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

        <div className="container contenedor-body-checkout">


            <form className="row campo-form" onSubmit={handleSubmit}>

                <div className="col-12">
                    <h2 className="textoo">1. Regístrate</h2>
                </div>

                <div className="col-6">
                    <label htmlFor="name" className="form-label label-inputs">
                        Nombre Completo (*)
                    </label>
                    <input
                        placeholder="Nombres y Apellidos"
                        className="form-control campo-input"
                        type="text"
                        name="name"
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.name && touched.name && <span className="help-text">{errors.name}</span>}
                </div>

                <div className='col-6'>
                    <label htmlFor="email" className="form-label label-inputs">
                        Correo Electrónico (*)
                    </label>
                    <input
                        placeholder="ejemplo@viñapicoteo.cl"
                        className="form-control campo-input"
                        type="email"
                        name="email"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.email && touched.email && <span className="help-text">{errors.email}</span>}
                </div>

                <div className='col-6'>
                    <label htmlFor="rut" className="form-label label-inputs">
                        R.U.T. (*)
                    </label>
                    <input
                        placeholder="12.345.678-9"
                        className="form-control campo-input"
                        type="text"
                        name="rut"
                        value={values.rut}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.rut && touched.rut && <span className="help-text">{errors.rut}</span>}
                </div>

                <div className='col-6'>
                    <label htmlFor="phone" className="form-label label-inputs">
                        Teléfono (*)
                    </label>
                    <input
                        placeholder="123456789"
                        className="form-control campo-input"
                        type="text"
                        id="phone"
                        name="phone"
                        value={values.phone}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.phone && touched.phone && (<span className="help-text">{errors.phone}</span>)}
                </div>

                <div className='col-12'>
                    <label htmlFor="direccion" className="form-label label-inputs">
                        Dirección de envío
                    </label>
                    <input
                        placeholder="Ej: Av. Kennedy 5406"
                        className="form-control campo-input"
                        type="text"
                        name="direccion"
                        value={values.direccion}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.direccion && touched.direccion && (
                        <span className="help-text">{errors.direccion}</span>
                    )}
                </div>


                <div className="col-6">
                    <label htmlFor="region" className="form-label label-inputs">
                        Región
                    </label>
                    <select
                        className="form-select campo-input"
                        id="region"
                        name="region"
                        value={values.region}
                        onChange={handleRegionChange}
                    >
                        <option value="">Elige tu Región</option>
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
                    <label htmlFor="comuna" className="form-label label-inputs  ">Comuna</label>
                    <select
                        className="form-select campo-input"
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

                <div className='col-6'>
                    <label htmlFor="password" className="form-label label-inputs">
                        Contraseña (*)
                    </label>
                    <input
                        placeholder="Escribe tu contraseña"
                        className="form-control campo-input"
                        type="password"
                        name="password"
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.password && touched.password && <span className="help-text">{errors.password}</span>}
                </div>

                <div className='col-6'>
                    <label htmlFor="password" className="form-label label-inputs">
                        Confirmar contraseña (*)
                    </label>
                    <input
                        placeholder="Repite tu contraseña"
                        className="form-control campo-input"
                        type="password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && touched.confirmPassword && <span className="help-text">{errors.confirmPassword}</span>}
                </div>


                <div>
                    <label htmlFor="referencia" className="form-label label-inputs">
                        Referencias
                    </label>
                    <input
                        placeholder="Comentario"
                        className="col-12 campo-input"
                        type="text"
                        name="referencia"
                        value={values.referencia}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.referencia && touched.referencia && (
                        <span className="help-text">{errors.referencia}</span>
                    )}
                </div>

                <div >
                    <button type="submit" className="boton-navegacion" style={{ width: '600px', marginTop: '24px' }}>
                        Aceptar
                    </button>
                </div>


            </form>


        </div>
    );
};

export default FormUsuario;
