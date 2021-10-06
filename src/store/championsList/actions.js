import {loaded, loading} from "./index";
import axios from "axios";

export const getChampionsList = (dispatch) => {
    dispatch(loading())
    axios.get("https://ddragon.leagueoflegends.com/cdn/11.20.1/data/ru_RU/champion.json")
        .then((response) => {
            dispatch(loaded(response.data.data))
        })
}

