import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const[userName, setUsername] = useState('')
  const[password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) =>{
    e.preventDefault()
    setUser({userName,password})
  }

  return (
    <div>
      <h1>LOGIN FORM</h1>
      <input
      type='text' placeholder='User Name' value={userName}
      onChange={(e) => setUsername(e.target.value)}
      />
      <input
      type='text' placeholder='Password' value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit} >Submit</button>
      
    </div>
  )
}

export default Login
