import { createSlice } from '@reduxjs/toolkit';

export const carsSlice = createSlice({
    name: 'carsSlice',
    initialState: {
       articles: [],
    },
    reducers: {
        getCars: (state, action) => {

        },
        addCars: (state, action) => {
            console.log("action",action)
            console.log("state", state)
            // setToken(action.payload)
            state.isLogged = true
        },
    }
})

export const { addCars } = carsSlice.actions

export default carsSlice.reducer
