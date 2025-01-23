import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const[length,setLength] =useState(8)
  const[numberAllowed,setNumberAllowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false)    //default value for nums and chars 
  const[password,setPassword]=useState('')

  const passwordRef= useRef(null)

  const generatePassword = useCallback(()=>{
    let pass =""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+=[]{}()~`-/\|<>.,"

    for(let i= 1 ;i <= length; i++){
      const char= Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed, charAllowed])


  useEffect(()=> {
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard= useCallback(()=>{
    const inputElement= passwordRef.current
    passwordRef.current?.focus();
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    // passwordRef.current?.setSelectionRange(0,6) this selects range that upto 6 values it'll select to copy
  },[password]);

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password} 
          className='outline-non w-full py-1 px-3 bg-white' 
          placeholder='Password' 
          readOnly
          useref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>

      <div className='flex test-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={5} 
          max={50} 
          value={length} 
          className='cursor-pointer' 
          onChange={(e)=> setLength(e.target.value)}/>
          <label htmlFor='length'>Length:{length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={numberAllowed} 
          onChange={(e)=>{
            setNumberAllowed((prev)=>!prev)
          }}/>
          <label htmlFor='number'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={charAllowed} 
          onChange={(e)=>{
            setCharAllowed((prev)=>!prev)
          }}/>
          <label htmlFor='charInput'>Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
