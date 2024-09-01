import { useState } from 'react'
import Navbar from './assets/Components/Navbar'
import Todo from './assets/Components/Todo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Todo/>
    </>
  )
}

export default App
