import dcaStore from "../../stores/Calculator/DcaStore";
import { Select, Form, InputNumber, Input } from 'antd'



export default function App() {

    const selectAfter = (
        <Select
          defaultValue="USD"
          style={{
            width: 60,
          }}
        >
          <Option value="USD">$</Option>
          <Option value="KRW">₩</Option>          
          <Option value="EUR">€</Option>
          <Option value="GBP">£</Option>
          <Option value="CNY">¥</Option>
        </Select>
      );

    const { basePrice, sellPrice, quantity, setBasePrice, setSellPrice, setQuantity} = dcaStore();
    return (
        <div className='calculator'>
            <Form.Item
                colon={false}
                label="매수단가"
                name="basePrice"
                rules={[{ message: 'Please input!', }]}
            >
                <InputNumber
                    value={basePrice}
                    onChange={(value) => setBasePrice(value)}                    
                    addonAfter={selectAfter}
                    defaultValue={0}                                        
                    formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    style={{width: 320}}                    
                />       
            </Form.Item>
            <Form.Item
                colon={false}
                label="매도단가"
                name="sellPrice"
                rules={[{ message: 'Please input!', }]}
            >
                <InputNumber    
                    value={sellPrice}
                    onChange={(value) => setSellPrice(value)}
                    addonAfter={selectAfter}
                    defaultValue={0}                    
                    formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    style={{width: 320}}                    
                />   
            </Form.Item>
        </div>
   )
}