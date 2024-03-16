import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
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
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        dataProfile: (state, action) => {
            state.email = action.payload.body.email
            state.firstName = action.payload.body.firstName
            state.lastName = action.payload.body.lastName
            state.userName = action.payload.body.userName
            
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
        }
    }
})

export const { signInStart, signInSucces, signInFailure, dataProfile, updateFailure, updateStart, updateSucces } = userSlice.actions;

export default userSlice.reducer;