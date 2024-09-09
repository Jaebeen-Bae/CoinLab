import create from 'zustand';

const DcaStore = create((set) => ({
    basePrice: 0,
    sellPrice: 0,
    quantity: 0,
    setBasePrice: (value) => set({basePrice : value}),
    setSellPrice: (value) => set({sellPrice : value}),
    setQuantity: (value) => set({quantity : value}),
}));

export default DcaStore;