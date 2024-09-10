import roiStore from "../../stores/Calculator/RoiStore";
import { InputNumber } from "antd"

function profit(basePrice, sellPrice, quantity) {
    if(basePrice > 0 && sellPrice > 0 && quantity > 0) {
        return (
            Math.round((sellPrice*quantity)-(basePrice*quantity))
        )
    }
    else return ""
}

function profitPer(basePrice, sellPrice, quantity) {
    if(basePrice > 0 && sellPrice > 0 && quantity > 0) {
        return (
            Math.round((sellPrice-basePrice)/basePrice*1000)/10
        )
    }
    else return ""
}

export default function App() {

    const { basePrice, sellPrice, quantity, setBasePrice, setSellPrice, setQuantity} = roiStore();

    return (
        <div className="calculator">
            <InputNumber    
                className="inputNumber"
                value={basePrice}
                onChange={(value) => setBasePrice(value)}
                addonBefore={<div className="expression">매수단가</div>}
                formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            />       
            <InputNumber
                className="inputNumber"            
                value={sellPrice}
                onChange={(value) => setSellPrice(value)}
                addonBefore={<div className="expression">매도단가</div>}                 
                formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            />   
            <InputNumber
                className="inputNumber"            
                value={quantity}
                onChange={(value) => setQuantity(value)}
                addonBefore={<div className="expression">매도수량</div>}
                formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}         
            />
            <InputNumber
                className="inputNumber"            
                value={profit(basePrice, sellPrice, quantity)}
                addonBefore={<div className="expression">수익금액</div>}
                formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}         
            />
            <InputNumber
                className="inputNumber"            
                value={profitPer(basePrice, sellPrice, quantity)}
                addonBefore={<div className="expression">수익률</div>}
                formatter={(value) => `${value}%`}
                parser={(value) => value?.replace('%', '')}
            />                        
        </div>
   )
}