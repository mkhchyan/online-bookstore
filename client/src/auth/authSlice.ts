import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    isLoggedIn: boolean;
    user: {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
    } | null;
}

const initialState: AuthState = {
    isLoggedIn: false,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signup: (state, action) => {
            state.user = action.payload;
        },
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        },
    },
});


export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
