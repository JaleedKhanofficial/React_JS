import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userID} = useParams()
  return (
    <div className='bg-gray-700 text-white text-3xl p-4'>
      USER : {userID}
    </div>
  )
}

export default User
