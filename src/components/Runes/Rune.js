import {useState} from "react";

export const Rune = (props) => {

    const {data, name, group, handleChange} = props
    const [state, setState] = useState(false)
    const handleShow = () => {
        setState(!state)
    }
    const handleSelect = (id) => {
        handleChange(id, group, name)
    }

    return <div>
        <div onClick={handleShow}>name</div>
        {state && <div>
            {data.map((item, index) => <div
                key={index}
                onClick={() => handleSelect(item.id)}
            >
                {item.id}
            </div>)}
        </div>}
    </div>
}

Rune.defaultProps = {
    data: [],
    name: "",
    group: "",
    handleChange: () => {},
}