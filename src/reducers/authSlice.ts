import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/user";

interface AuthState{
    isLoggedIn: boolean;
    user: User | null;
    error: string | null;
}

const initialState: AuthState = {
    isLoggedIn: false,
    user:null,
    error:null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        LoginSuccess(state, action: PayloadAction<User>){
            state.isLoggedIn = true;
            state.user = action.payload;
            state.error = null;
        },
        loginFailure(state, action: PayloadAction<string>){
            state.isLoggedIn = false;
            state.user = null;
            state.error = action.payload
        },
        logout(state){
            state.isLoggedIn = false;
            state.user = null;
            state.error = null;
        },
    },
});

export const { LoginSuccess, loginFailure, logout } = authSlice.actions;


export default authSlice.reducer;

