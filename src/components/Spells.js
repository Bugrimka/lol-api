export const Spells = (props) => {

    const {data} = props

    const getPassive = () => {
        return <Item
            name={data.passive?.name}
            image={data.passive?.image.full}
            text={data.passive?.description}
            rounded
            size={"small"}
            type={"passive"}
        />
    }
    const getSkill = (item) => {
        return <Item
            name={item?.name}
            image={item?.image.full}
            text={item?.description}
            id={item?.id}
        />
    }


    return <div className="spells">
        {getPassive()}
        {data.spells?.map((item) => getSkill(item))}
    </div>
}
const Item = (props) => {

    const {text, name, image, id = '0', type = 'spell', size = 'default', rounded = false} = props
    const isRounded = rounded ? "rounded" : ""

    return <div className={`skill-item-wrap ${size} ${isRounded}`} key={id}>
        <div className="skill-image-wrap">
            <img src={`http://ddragon.leagueoflegends.com/cdn/11.20.1/img/${type}/${image}`} alt=""/>
        </div>
        <div className="skill-name">{name}</div>
        <div className="skill-text">{text}</div>
    </div>
}