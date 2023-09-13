import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick() {
    alert('Button Clicked')
  }
  const handleClick2 = ()=> {
    alert('Button 2 is Clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>


      <button onClick={handleClick}>
        Click Me
      </button>
      <button onClick={handleClick2}>
        Click 2
      </button>
      <button onClick={()=>{alert("Button Khele gece")}}>THIRD</button>
      <button onClick={()=>addToFive(7)}>Four</button>
      
     
    </>
  )
}

export default App
