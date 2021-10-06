import {loaded, loading} from "./index";
import axios from "axios";

export const getChampionView = (dispatch, id) => {
    dispatch(loading())
    axios.get(`https://ddragon.leagueoflegends.com/cdn/11.20.1/data/ru_RU/champion/${id}.json`)
        .then((response) => {
            dispatch(loaded(response.data.data[id]))
        })
}

