// import { setToken } from "../../services/tokenServices"
import { createSlice } from '@reduxjs/toolkit';

/**
 * initial state: is logged check if the user is already authenticated when openning the Application
 */

export const authenticationSlice = createSlice({
    name: 'auth',
    isLogged: false,
    initialState: {
        name: "",
        firstname: "",
        role: "",
        token: ""
    },
    reducers: {
        signIn: (state, action) => {
            console.log("action",action)
            console.log("state", state)
            state.initialState.name(action.payload.name)
            state.isLogged = true
        },
        signOut: (state) => {
            localStorage.clear()
            sessionStorage.clear()
            state.isLogged = false
        }
    }
})

export const { signIn, signOut } = authenticationSlice.actions

export {}

export default authenticationSlice.reducer
