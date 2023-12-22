import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
    username: string;
    email: string;
    isAuth: boolean;
    role: string[]
}

const initialState: UserState = {
    username: '',
    email: '',
    isAuth: false,
    role: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (_state, action: PayloadAction<UserState>) => {
            const newState = { ...action.payload }
            console.log("login reducer", newState)
            return newState;
        },
        logout: () => {
            console.log("logout reducer")
            localStorage.removeItem('token');
            return { ...initialState }

        }
    }

});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;