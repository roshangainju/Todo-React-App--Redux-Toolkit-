import React, { useState } from 'react';
import { addTodo } from '../features/todoSlice';
import { useDispatch } from 'react-redux';

const Addtodo = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState("")

    const addTodoHandler = (e) => {     
        e.preventDefault()
        if (input.trim() === "") {
          alert("Enter your Todos first");
          return; 
        }
        dispatch(addTodo(input))
        setInput("")
    }       
  return (
    <form className='addTodo'>
        <input
          type='text' placeholder='Enter your todo here' value={input} onChange={(e)=> setInput(e.target.value)}/>
        <button onClick={addTodoHandler}>Add To list</button>       
    </form>
  )
}

export default Addtodo