

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentUser: null,
    token: null,
    error: null,
    loading: false,
    emailPwd: {
        email: '',
        password: ''
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true
        },
        signInSucces: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        dataProfile: (state, action) => {
            const { email, firstName, lastName, userName } = action.payload.body || {}; // Utilisation de la désignation par défaut pour éviter une erreur si action.payload.body est undefined
            state.email = email || ''; // Si email est undefined, utilisez une chaîne vide comme valeur par défaut
            state.firstName = firstName || '';
            state.lastName = lastName || '';
            state.userName = userName || '';
        },        
        updateStart: (state) => {
            state.loading = true;
        },
        updateSucces: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        logout: (state) => {
          
            state.token = null;
            state.firstName = null;
            state.lastName = null;
            state.loading = false;
            state.currentUser = null;
            localStorage.clear();

        },
        rememberData: (state, action) => {
            state.emailPwd= action.payload;
        }
    }
})

export const { signInStart, signInSucces, signInFailure, dataProfile, updateFailure, updateStart, updateSucces, logout, rememberData } = userSlice.actions;

export default userSlice.reducer;


