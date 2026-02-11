import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import Entry from './Components/Entry'
import './App.css'
import Places from './Components/data.js'
function App() {
  const [count, setCount] = useState(0)
  const getData = Places.map((element, id) => {
    return (
      <Entry
      id={element.id} img={{
      src: element.img.src,
      alt : element.img.alt}} 
      title={element.title}
      country={element.country} 
      googleMapsLink={element.googleMapsLink}
      dates={element.dates}
      text={element.text} />
    );
  })
  console.log(getData);

  return (
    <>
      <div className='fulah'>
        <Header />
        <div className='container'>
          {getData}
        </div>
      </div>
    </>
  )
}

export default App
