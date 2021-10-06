import {Tabs} from 'antd';
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import {getChampionViewData} from "../store/championView/selectors";

const {TabPane} = Tabs;

function callback(key) {
    console.log(key);
}

export const Tab = () => {

    const data = useSelector(getChampionViewData)

    const getAllyTips = (allytips) => allytips?.map((ally) => <div>{ally}</div>)
    const getEnemyTips = (enemytips) => enemytips?.map((enemy) => <div>{enemy}</div>)


    return <div className="tablica">
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Lore" key="1">
                <div className="tab-content">
                    {data.lore}
                </div>
            </TabPane>
            <TabPane tab={<PlusOutlined/>} key="2">
                <div className="tab-content">
                    {getAllyTips(data.allytips)}
                </div>
            </TabPane>
            <TabPane tab={<MinusOutlined/>} key="3">
                <div className="tab-content">
                    {getEnemyTips(data.enemytips)}
                </div>
            </TabPane>
        </Tabs>
    </div>
};