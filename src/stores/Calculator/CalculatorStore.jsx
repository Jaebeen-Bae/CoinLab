import create from 'zustand';

const CalculatorStore = create((set) => ({
    view: 'roiView',
    setView: (value) => set({view : value}),
}));

export default CalculatorStore;