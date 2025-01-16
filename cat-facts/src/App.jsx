import { useState } from 'react'
import './App.css'
import dancingGarfield from './assets/garfield.gif'


function App() {
  const [count, setCount] = useState(0)
  const [fact, setFact] = useState("")

  async function getCatFact(){
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    console.log(data.fact);
    setFact(data.fact);
    setCount((count) => count + 1)
  }

  return (
  <>
    <a href="https://www.youtube.com/watch?v=uHgt8giw1LY&ab_channel=Licale" target="_blank">
      <img src={dancingGarfield} className="logo cat" alt="Cat" />
    </a>
    <h1>{fact}</h1>
    <div className="card">
      <button onClick={getCatFact}>
        🐱 New fact
      </button>
    </div>
    <p>You've already seen {count} cat facts today!</p>
  </>
  )
}


export default App