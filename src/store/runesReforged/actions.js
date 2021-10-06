import {loaded, loading} from "./index";
import axios from "axios";

export const getRunesReforged = (dispatch) => {
    dispatch(loading())
    axios.get("https://ddragon.leagueoflegends.com/cdn/11.20.1/data/ru_RU/runesReforged.json")
        .then((response) => {
            dispatch(loaded(response.data))
        })
}

