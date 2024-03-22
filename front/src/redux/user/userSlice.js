import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentUser: null,
    token: null,
    error: null,
    loading: false,

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true
        },
        signInSucces: (state, action) => {
            // const { currentUser } = action.payload;
            // state.currentUser = currentUser;
            // state.token = currentUser.body.token;
            state.loading = false;
            state.error = null;
            state.currentUser = action.payload;
            // state.loading = false;
            // state.error = null;
        },
        signInToken: (state, action) => {
            state.token = action.payload;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        dataProfile: (state, action) => {
            const { email, firstName, lastName, userName } = action.payload.body || {};
            state.currentUser = action.payload.body; // Si vous avez besoin de stocker les données complètes dans currentUser
            state.email = email || ''; // Assurez-vous de fournir une valeur par défaut
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
            // localStorage.clear();
        },

    }

})



export const { signInStart, signInSucces, signInFailure,signInToken, dataProfile, updateFailure, updateStart, updateSucces, logout } = userSlice.actions;

export default userSlice.reducer;


