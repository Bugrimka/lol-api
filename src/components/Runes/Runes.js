import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getRunesReforgedData} from "../../store/runesReforged/selecrots";
import {getRunesReforged} from "../../store/runesReforged/actions";
import {Rune} from "./Rune";

export const Runes = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const data = useSelector(getRunesReforgedData)
    const [state, setState] = useState({
        mainGroup: {
            main: "",
            first: "",
            second: "",
            third: "",
            fourth: "",
        },
        subGroup: {
            first: "",
            second: "",
            third: "",
        }
    })

    useEffect(() => {
        getRunesReforged(dispatch, id)
    }, [dispatch])

    const handleChange = (value, group, name) => {
        const temp = {...state}
        temp[group][name] = value
        setState(temp)
    }
    const getMainGroupOptions = (index) => {
        if (state.mainGroup.main === "") {
            return ([])
        }
        return data.find(item => item.id === state.mainGroup.main).slots[index].runes
    }


    return <div className="runes-global-wrapper">
        <div className="runes-main">
            <div className="runes-main-class">
                <Rune
                    name="main"
                    group="mainGroup"
                    handleChange={handleChange}
                    data={data}
                />
            </div>
            <div className="runes-main-passive">
                <Rune
                    name="first"
                    group="mainGroup"
                    handleChange={handleChange}
                    data={getMainGroupOptions(0)}
                />
            </div>
            <div className="runes-passive">
                <Rune
                    name="second"
                    group="mainGroup"
                    handleChange={handleChange}
                    data={getMainGroupOptions(1)}
                />
            </div>
            <div className="runes-passive">
                <Rune
                    name="third"
                    group="mainGroup"
                    handleChange={handleChange}
                    data={getMainGroupOptions(2)}
                />
            </div>
            <div className="runes-passive">
                <Rune
                    name="fourth"
                    group="mainGroup"
                    handleChange={handleChange}
                    data={getMainGroupOptions(3)}
                />
            </div>
        </div>
        <div className="runes-sub-class">
            <div className="runes-passive"><Rune/></div>
            <div className="runes-passive"><Rune/></div>
            <div className="runes-passive"><Rune/></div>
        </div>
    </div>
}