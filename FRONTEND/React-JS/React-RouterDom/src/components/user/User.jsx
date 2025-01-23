import React from 'react'
import {useParams} from "react-router-dom"

function User() {
    const {userid} =useParams()
  return (
    <div className='bg-orange-500 text-black flex justify-center font-medium'>User</div>
  )
}

export default User
