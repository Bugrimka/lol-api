import {createSlice} from "@reduxjs/toolkit";

const championViewSlice = createSlice({
    name: 'championView',
    initialState: {
        loading: false,
        data: {}
    },
    reducers: {
        loading: state => ({
            ...state,
            loading: true
        }),
        loaded: (state, action) => ({
            ...state,
            loading: false,
            data: action.payload
        })
    }
})

export const {loading, loaded} = championViewSlice.actions

export default championViewSlice.reducer