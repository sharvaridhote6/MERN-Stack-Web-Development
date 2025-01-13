import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  // const [count, setCount] = useState(0)
  const[color,setColor]= useState('white')
  // function changeColor(color){
  //   setColor(color)
  // }     this is one more way of adding a method and then changing the colors with it, but since setColor us a method we can use it directly
  return (
    <div className='w-full h-screen duration-200 bg-black' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-black'>
          
          <button onClick={()=> setColor('red')} className= ' px-4 py-1 rounded-full shadow-lg text-white' 
          style={{backgroundColor: 'red '}}>Red</button>
          
          <button onClick={()=> setColor('blue')} className=' px-4 py-1 rounded-full shadow-lg text-white'
          style={{backgroundColor: 'blue'}}>Blue</button>
        
        <button onClick={()=> setColor('yellow')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          style={{backgroundColor: 'yellow'}}>Yellow</button>

        <button onClick={()=> setColor('green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
          style={{backgroundColor: 'green'}}>Green</button>


        </div>
      </div>
    </div>
  )
}

export default App
