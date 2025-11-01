import { useCallback, useState } from 'react'
import './App.css'

const [length, setLength] = useState(10);
const [numberAllowed, setNumberAllowed] = useState(false);
const [charAllowed, setCharAllowed] = useState(false);
const [password, setPassword] = useState("");

// const [symbolAllowed, setsymbolAllword] = useState(false)

const generatePassword = useCallback (() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += '0123456789'
  if(charAllowed) str += '!@#$%^&*()_+~`|}{[]:;?><,./-='

  for (let i = 1; i <= array.length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
  }
  pass += str.charAt(char)

},[length, numberAllowed, charAllowed,setPassword])


function App() {

  return (
    <>
    <h1 className='text-4xl text-center text-white'>Jaleed khan</h1>
    </>
  )
}

export default App
