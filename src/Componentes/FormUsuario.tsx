import { useFormik } from 'formik';
import * as yup from 'yup';
import { validate } from 'rut.js';
import './FormUsuario.css';
import { useEffect, useState } from 'react';

interface FormUsuarioProps {
    onPagoClick: () => void;
  }

interface Region {
    region: string;
    comunas: string[];
}

const FormUsuario: React.FC<FormUsuarioProps> = (props) => {


    const validarRut = (rut: string) => validate(rut);

    const basicSchema = yup.object().shape({
        name: yup.string().required('Este campo es requerido'),
        email: yup.string().email('Este campo debe ser un email válido').required('Este campo es requerido'),
        rut: yup.string().test('rut-invalido', 'Rut inválido', (rut) => rut ? validarRut(rut) : true).required('Este campo es requerido'),
        phone: yup.string().min(9, 'El número de teléfono debe tener 9 caracteres').max(9, 'El número de teléfono debe tener 9 caracteres').required('Este campo es obligatorio'),
        direccion: yup.string().required('Este campo es requerido'),
        referencia: yup.string().required('Este campo es requerido'),
        region: yup.string().required('Este campo es requerido'),
        comuna: yup.string().required('Este campo es requerido'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            rut: '',
            phone: '',
            direccion: '',
            referencia: '',
            region: '',
            comuna: '',
        },
        validationSchema: basicSchema,
    onSubmit: (values, { setSubmitting }) => {
        if (!formik.isValid) {
            setSubmitting(false);
            return;
        }

            console.log('Datos del formulario:', values);

            // Navega a la página de pago después de validar el formulario
        props.onPagoClick();

        const formData = {
            name: values.name,
            email: values.email,
            rut: values.rut,
            phone: values.phone,
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
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    });

    const [regiones, setRegiones] = useState<Region[] | null>(null);
    const [comunas, setComunas] = useState<string[]>([]);

    useEffect(() => {
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
        formik.handleChange(event);
        setComunas([]);

        const region = regiones?.find((r: Region) => r.region === selectedRegion);
        if (region) {
            setComunas(region.comunas);
        }
    };

    return (
        <div className="container contenedor-body-checkout">
            <form className="row campo-form" onSubmit={formik.handleSubmit}>
                <div className="col-12">
                    <h2 className="textoo">Comprar como invitado</h2>
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
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.name && formik.touched.name && <span className="help-text">{formik.errors.name}</span>}
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
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && <span className="help-text">{formik.errors.email}</span>}
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
                        value={formik.values.rut}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.rut && formik.touched.rut && <span className="help-text">{formik.errors.rut}</span>}
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
                        value={formik.values.phone}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.phone && formik.touched.phone && (<span className="help-text">{formik.errors.phone}</span>)}
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
                        value={formik.values.direccion}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.direccion && formik.touched.direccion && (
                        <span className="help-text">{formik.errors.direccion}</span>
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
                        value={formik.values.region}
                        onChange={handleRegionChange}
                    >
                        <option value="">Elige tu Región</option>
                        {regiones?.map(region => (
                            <option key={region.region} value={region.region}>
                                {region.region}
                            </option>
                        ))}
                    </select>
                    {formik.errors.region && formik.touched.region && (
                        <span className="help-text">{formik.errors.region}</span>
                    )}
                </div>
                <div className="col-6">
                    <label htmlFor="comuna" className="form-label label-inputs  ">Comuna</label>
                    <select
                        className="form-select campo-input"
                        id="comuna"
                        name="comuna"
                        value={formik.values.comuna}
                        onChange={formik.handleChange}
                    >
                        <option value="">Seleccione una comuna</option>
                        {comunas.map(comuna => (
                            <option key={comuna} value={comuna}>
                                {comuna}
                            </option>
                        ))}
                    </select>
                    {formik.errors.comuna && formik.touched.comuna && (
                        <span className="help-text">{formik.errors.comuna}</span>
                    )}
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
                        value={formik.values.referencia}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.referencia && formik.touched.referencia && (
                        <span className="help-text">{formik.errors.referencia}</span>
                    )}
                </div>

                <div className="">
                        <button 
                        type="submit" 
                        className="boton-navegacion" 
                        style={{ width: '600px', marginTop: '24px' }} 
                        disabled={!formik.isValid}>
                            Ir al pago
                        </button>
                    
                </div>
            </form>
        </div>
    );
};

export default FormUsuario;