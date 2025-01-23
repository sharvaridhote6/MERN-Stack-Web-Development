// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
    <Card username="sharvari"/> 
    <Card/>
    <Card username='json' post="intern" />
{/* number of times you'll endter card, that amount of times you'll see the card on the webpage, since we've added object props in the card we can pass on a value to it here 
    in the app.jsx for each card separaetly, and every value we pass in the card is used as a key-value pair in the card file   */}
    

    </>
  )
}

export default App
