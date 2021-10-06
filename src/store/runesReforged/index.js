import {createSlice} from "@reduxjs/toolkit";

const runesReforgedSlice = createSlice({
    name: 'runesReforged',
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

export const {loading, loaded} = runesReforgedSlice.actions

export default runesReforgedSlice.reducer