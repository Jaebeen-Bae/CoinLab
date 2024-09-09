import tpStore from "../../stores/Calculator/TpStore";
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

    const { basePrice, sellPrice, quantity, setBasePrice, setSellPrice, setQuantity} = tpStore();
    return (
        <div className='calculator'>
            <Form.Item
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
                label="매도수량"
                name="quantity"
                rules={[{ message: 'Please input!', }]}
            >
                <InputNumber    
                    value={quantity}
                    onChange={(value) => setQuantity(value)}
                    defaultValue={0}
                    formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}         
                    style={{width: 320}}
                />                         
            </Form.Item>
        </div>
   )
}