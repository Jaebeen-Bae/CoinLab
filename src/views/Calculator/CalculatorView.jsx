import { Radio } from 'antd'
import RoiView from "./RoiView"
import DcaView from "./DcaView"
import TpView from "./TpView"
import calculatorStore from '../../stores/Calculator/CalculatorStore'

export default function App() {
    const { view, setView } = calculatorStore();    
    return (
        <div className='frame'>
            <div className='main-content'>
                <Radio.Group value={view} onChange={(e) => setView(e.target.value)}>
                    <Radio.Button style={{width: "10vw", minWidth: "120px", textAlign: "center"}} value="RoiView">수익률 계산</Radio.Button>
                    <Radio.Button style={{width: "10vw", minWidth: "120px", textAlign: "center"}} value="DcaView">분할매도 계산</Radio.Button>
                    <Radio.Button style={{width: "10vw", minWidth: "120px", textAlign: "center"}} value="TpView">목표가격 계산</Radio.Button>
                </Radio.Group>
                { view == "RoiView" ? <RoiView/> : view == "DcaView" ? <DcaView/> : <TpView/>}
            </div>
        </div>
   )
}