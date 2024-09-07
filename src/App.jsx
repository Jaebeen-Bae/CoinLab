import { create } from 'zustand'
import Scene from './components/Scene'

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Long() {
  const { count, inc } = useStore()
  return (
    <div className="counter">
      <span>{count}</span>
      <button onClick={inc}>Long</button>
    </div>
  )
}

function Short() {
  const { count, inc } = useStore()
  return (
    <div className="counter">
      <span>{count}</span>
      <button onClick={inc}>Short</button>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Scene />
      <div className="main">
        <div className="vote">
          <div className="vote-container">
            <Long />
          </div>
          <div className="vote-container">
            <Short />
          </div>          
        </div>
      </div>    
    </>
  )
}
