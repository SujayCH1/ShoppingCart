import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Shopping from './components/Shopping/Shopping'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Shopping/>
    </>
  )
}

export default App
