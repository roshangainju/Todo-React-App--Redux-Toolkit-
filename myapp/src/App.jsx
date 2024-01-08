import React from 'react'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'
import "./style.css"

const App = () => {
  return (
    <div className='app'>
      <div>
      <h1>Todo App</h1>
      <Addtodo />
      <Todos />
      </div>
   
    </div>
  )
}

export default App