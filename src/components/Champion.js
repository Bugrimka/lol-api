import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Loader} from "./Loader";
import {getChampionView} from "../store/championView/actions";
import {getChampionViewData, getChampionViewLoading} from "../store/championView/selectors";
import {Spells} from "./Spells";
import {Tab} from "./Tab";
import {Runes} from "./Runes/Runes";

export const Champion = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const loading = useSelector(getChampionViewLoading)
    const data = useSelector(getChampionViewData)

    useEffect(() => {
        getChampionView(dispatch, id)
    }, [dispatch])

    if (loading) {
        return <Loader/>
    }

    const getTags = (tags) => tags?.map((u) => <span>{u}</span>)

    return (
        <div className="wrapper">
            <div className="page-bckg"/>
            <div className="champion-page">
                <div className="champion-meta row">
                    <div className="champion-visual cell">
                        <div className="champion-img">
                            <img
                                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`}
                                alt={data.name}
                            />
                        </div>
                        <div className="champion-name">{data.name}</div>
                        <div className="champion-tags">{getTags(data.tags)}</div>
                    </div>
                    <div className="champion-data cell">
                        <Tab/>
                        <Spells data={data}/>
                    </div>
                </div>
                <div className="champion-runes row">
                    <Runes/>
                </div>
                <div className="champion-lore row"></div>
            </div>
        </div>
    )
}