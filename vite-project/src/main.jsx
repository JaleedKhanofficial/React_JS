import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MyDatail from './MyDetail.jsx'

const reactElement = React.createElement(
    'a',
    {href:"https://google.com",target:'_blank'},
    'Click ME'
  )

createRoot(document.getElementById('root')).render(
  // <MyDatail />
  reactElement
)
