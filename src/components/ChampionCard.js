import {Link} from "react-router-dom";

export const ChampionCard = (props) => {

    const {id, name, img} = props

    return (<div className="champions-card">
            <Link to={`/${id}`}>
                <div><img src={`http://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${img}`} alt={name}/></div>
                <div>{name}</div>
            </Link>
        </div>
    )
}