import { useRef, useMemo } from 'react'
import useStore from "../Stores/CalulatorStore.jsx";
import { Select, Form, InputNumber } from 'antd'



export default function App() {
    const setBasePrice = useStore((state) => state.setBasePrice);
    const setSellPrice = useStore((state) => state.setSellPrice);
    const setQuantity = useStore((state) => state.setQuantity);
    
    const handleBasePrice = (value) => {
        setBasePrice(value);
    };

    const handleSellPrice = (value) => {
        setSellPrice(value);
    };

    const handleQuantity = (value) => {
        setQuantity(value);
    };

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

    const { basePrice, sellPrice, quantity} = useStore();
    return (
        <div className='Calculate'>
            <Form.Item
                label="구매가격"
                name="basePrice"
                rules={[{ message: 'Please input!', }]}
            >
                <InputNumber    
                    value={basePrice}
                    onChange={(e) => handleBasePrice(e.basePrice)}                    
                    addonAfter={selectAfter}                    
                    formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    style={{width: 320}}                    
                />       
            </Form.Item>
            <Form.Item
                label="판매가격"
                name="sellPrice"
                rules={[{ message: 'Please input!', }]}
            >
                <InputNumber    
                    value={sellPrice}
                    onChange={(e) => handleSellPrice(e.sellPrice)}
                    addonAfter={selectAfter}                    
                    formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    style={{width: 320}}                    
                />   
            </Form.Item>
            <Form.Item
                label="보유수량"
                name="quantity"
                rules={[{ message: 'Please input!', }]}
            >
                <InputNumber    
                    value={quantity}
                    onChange={(e) => handleQuantity(e.setQuantity)}
                    formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}         
                    style={{width: 320}}
                />                         
            </Form.Item>
        </div>
   )
}