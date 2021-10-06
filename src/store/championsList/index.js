import {createSlice} from "@reduxjs/toolkit";

const championsListSlice = createSlice({
    name: 'championsList',
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

export const {loading, loaded} = championsListSlice.actions

export default championsListSlice.reducer