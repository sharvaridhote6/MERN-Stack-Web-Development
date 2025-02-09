import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [count, setCount] = useState(0)
  const [from, setFrom]=useState('usd')
  const [to, setTo]=useState('usd')
  const [convertedAmount, setConvertedAmount]=useState(0)
  
  const currencyInfo=useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap=() =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setConvertedAmount(convertedAmount)
  }

  const convert= ()=>{
    setConvertedAmount(amount *currencyInfo[to])
  }

  return ( 
    <>
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://i.pinimg.com/736x/a0/31/25/a031250d0b127b4ad6788e52c2bbcff5.jpg)`}}>
      <div className='w-full'>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        </div>
      </div>
      <input/>
    </div>
    </>
  )
}

export default App
