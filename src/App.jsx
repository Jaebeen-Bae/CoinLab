import { create } from 'zustand'
import Scene from './components/Scene'

const useStore = create((set) => ({
  long: 1,
  short: 1,
  incLong: () => set((state) => ({ long: state.long + 1 })),
  incShort: () => set((state) => ({ short: state.short + 1 })),  
}))

function Long() {
  const { long, incLong } = useStore()
  return (
    <div className="counter">
      <span>{long}</span>
      <button onClick={incLong}>Long</button>
    </div>
  )
}

function Short() {
  const { short, incShort } = useStore()
  return (
    <div className="counter">
      <span>{short}</span>
      <button onClick={incShort}>Short</button>
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
