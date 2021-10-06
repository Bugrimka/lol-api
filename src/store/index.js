import {configureStore} from "@reduxjs/toolkit";
import championsListReducer from './championsList';
import championViewReducer from './championView';
import runesReforgedReducer from './runesReforged';


export default configureStore({
    reducer: {
        championsList: championsListReducer,
        championView: championViewReducer,
        runesReforged: runesReforgedReducer
    }
})