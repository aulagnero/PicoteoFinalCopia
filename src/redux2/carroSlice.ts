import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Producto } from "../Componentes/CardProduct";

interface EstadoCarro {
    productos: Producto[];
    precioTotal: number;
  }
  

  const initialState: EstadoCarro = {
    productos: [],
    precioTotal: 0,
  };

export const carroSlice = createSlice({
    name: 'carro',
    initialState,
    reducers: {
        agregarProducto: (state, action:PayloadAction<Producto>) =>  {
            const producto = action.payload;
            state.productos.push(producto);//Añadimos el producto al arreglo de productos (carro).
            state.precioTotal = Number(state.precioTotal) + Number(producto.precio);//Sumamos el precio del producto a nuestro precio total del carro.
        },
        eliminarProducto: (state, action) => {
            const id = action.payload;
            const posicion = state.productos.findIndex((producto:Producto) => producto.id === id);

            if(posicion > -1){
                const obj = state.productos[posicion];//Buscamos el objeto producto segun la posicion del array productos.
                state.precioTotal = Number(state.precioTotal) - Number(obj.precio); //Restamos el precio del producto a nuestro precio total del carro.
                state.productos.splice(posicion,1);//Eliminamos el producto del array de productos (carro).
            }
        }
    }

});

export const { agregarProducto, eliminarProducto } = carroSlice.actions;
export default carroSlice;