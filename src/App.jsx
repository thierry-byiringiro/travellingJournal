import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import Entry from './Components/Entry'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='fulah'>
        <Header />
        <Entry />
      </div>
    </>
  )
}

export default App
