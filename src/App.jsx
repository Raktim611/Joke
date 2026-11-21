import { useState } from 'react'
import './App.css'
import Joke from './Joke'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Joke></Joke>
    </>
  )
}

export default App
