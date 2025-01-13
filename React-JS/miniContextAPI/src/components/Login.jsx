import React, { useState } from 'react'

function Login() {
    const[username, setUsername]= useState('')
    const[password, setPassword]= useState('')

    const handleSubmit=(e)=>{
        // prevent the page from refreshing
    }
  return (
    <div>
      <h2>Login</h2>
      <input 
      type="text" 
      onChange={(e)=> setUsername}/>
    </div>
  )
}

export default Login
