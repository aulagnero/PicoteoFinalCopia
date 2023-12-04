import * as yup from "yup";

export const LoginValidate = yup.object().shape({

    nombreapellido: yup.string().trim().required("el username es requerido"),
    rut: yup.string().trim().required("el username es requerido"),
    telefono: yup.string().trim().required("el username es requerido"),
    direccion: yup.string().trim().required("el username es requerido"),
    referencia: yup.string().trim().required("el username es requerido"),
})
