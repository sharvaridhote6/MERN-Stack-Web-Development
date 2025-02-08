import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [count, setCount] = useState(0)
  const [from, setFrom]=useState('usd')
  const [to, setTo]=useState('usd')
  const [convertedAmount, setConvertedAmount]=useState(0)
  
  const currencyInfo=useCurrencyInfo(from)
  return ( 
    <>
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://i.pinimg.com/736x/a0/31/25/a031250d0b127b4ad6788e52c2bbcff5.jpg)`}}>
      <h1 className='bg-red-200'></h1>
      <input/>
    </div>
    </>
  )
}

export default App
