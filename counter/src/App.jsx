import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  var myName = "Jaleed khan";

  const AddValue = () => {
    if (counter < 20){
      counter = counter + 1;
      setCounter(counter);
    }
  }

  const RemoveValue = () => {
    if (counter > 0){
        counter = counter - 1;
        setCounter(counter);
    }
  } 

  return (
    <>
    <h2>{myName}</h2>
    <h1>Counter Value {counter}</h1>
    <button onClick={AddValue}>Add Value {counter}</button>
    <br /><br />
    <button onClick={RemoveValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
