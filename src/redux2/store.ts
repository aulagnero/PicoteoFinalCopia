import { configureStore } from "@reduxjs/toolkit";
import {carroSlice} from "./carroSlice";

export const store = configureStore({
    reducer: {
        carroReducers: carroSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;