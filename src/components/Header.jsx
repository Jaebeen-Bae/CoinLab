import coinlabUrl from '../utils/image/coinlab.png'

export default function App() {
  return (
    <>    
      <header>  
        <div className='header-content'>
            <h5>
                <img src={coinlabUrl} style={{height: '4vh' }}/>
            </h5>
        </div>   
      </header>    
    </>
  )
}
