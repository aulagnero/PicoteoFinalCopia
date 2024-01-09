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
            const productoExistente = state.productos.find((p) => p.id === producto.id);
        
            if (productoExistente) {
                // Si el producto ya existe en el carrito, incrementamos la cantidad
                if (typeof productoExistente.cantidad === 'number') {
                    productoExistente.cantidad += 1;
                } else {
                    productoExistente.cantidad = 1;
                }
            } else {
                // Si el producto no existe en el carrito, lo añadimos con cantidad 1
                state.productos.push({ ...producto, cantidad: 1 });
            }
        
            state.precioTotal = Number(state.precioTotal) + Number(producto.precio);
        },
        eliminarProducto: (state, action) => {
            const id = action.payload;
            const posicion = state.productos.findIndex((producto:Producto) => producto.id === id);
        
            if(posicion > -1){
                const obj = state.productos[posicion];
                state.precioTotal = Number(state.precioTotal) - Number(obj.precio);
        
                if (obj.cantidad && obj.cantidad > 1) {
                    // Si la cantidad del producto es mayor a 1, disminuimos la cantidad
                    obj.cantidad -= 1;
                } else {
                    // Si la cantidad del producto es 1, eliminamos el producto del carrito
                    state.productos.splice(posicion,1);
                }
            }
        },
        eliminarDelCarro: (state, action) => {
            const id = action.payload;
            const posicion = state.productos.findIndex((producto:Producto) => producto.id === id);
          
            if(posicion > -1){
                const obj = state.productos[posicion];
                state.precioTotal = Number(state.precioTotal) - (Number(obj.precio) * (obj.cantidad || 0));
          
                // Eliminamos el producto del carrito sin importar la cantidad
                state.productos.splice(posicion,1);
            }
        }
    }

});

export const { agregarProducto, eliminarProducto, eliminarDelCarro } = carroSlice.actions;
export default carroSlice;