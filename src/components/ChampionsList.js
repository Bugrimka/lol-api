import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getChampionsList} from "../store/championsList/actions";
import {getChampionsListData, getChampionsListLoading} from "../store/championsList/selectors";
import {Loader} from "./Loader";
import {Card} from "antd";
import "./index.css"
import {ChampionCard} from "./ChampionCard";

const { Meta } = Card;

export const ChampionsList = () => {

    const dispatch = useDispatch()
    const loading = useSelector(getChampionsListLoading)
    const data = useSelector(getChampionsListData)

    useEffect(() => {
        getChampionsList(dispatch)
    }, [dispatch])

    if (loading) {
        return <Loader/>
    }

    return (
        <div className='champions-list'>
            {data.map((champion) => {
                return <ChampionCard name={champion.name} img={champion.image.full} id={champion.id}/>
            })}
        </div>
    )
}