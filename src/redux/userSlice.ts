import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    nombreapellido: "",
    rut: "",
    telefono: "",
    direccion: "",
    referencia: "",
};



export const userSlice = createSlice({

    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
         const {nombreapellido,rut, telefono, direccion, referencia } =  action.payload
            state.nombreapellido = nombreapellido;
            state.rut = rut;
            state.telefono = telefono;
            state.direccion = direccion;
            state.referencia = referencia;

        }
    }

});
export const {addUser} = userSlice.actions;
export default userSlice.reducer;