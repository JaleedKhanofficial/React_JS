import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    name : "Jaleed", 
    age : 22,
    id : 1122
  }

  return (
    <>

      <h1 className='bg-green-400 col text-black p-4 rounded-xl mb-5'>Jaleed khan</h1>
      <Cards username = "JALEED" />
      <Cards />
    </>
  )
}

export default App
