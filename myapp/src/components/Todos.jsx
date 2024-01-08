import React, { useState } from 'react';
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiSave3Line } from "react-icons/ri";
import { removeTodo, editTodo, updateTodo } from '../features/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

const Todos = () => {
  const [editedText, setEditedText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const editedTodoId = useSelector(state => state.editedTodoId);

  const handleEdit = (id, currentText) => {
    dispatch(editTodo({ id }));
    setEditedText(currentText);
  };

  const handleUpdate = (id) => {
    if (editedText.trim() === "") {
      alert("Cannot save the empty todos");
      return; 
    }
    dispatch(updateTodo({
      id,
      newText: editedText
    }));
    setEditedText('')
  };

  return (
    <div className='todos'>
      <h3>Todo List</h3>
      {todos.map((todo) => (
        <div key={todo.id}>
          {editedTodoId === todo.id ? (
            <>
              <input
              id="input"
              placeholder="Edit your Todos here"
                type='text'
                value={editedText}
                autoFocus 
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button onClick={() => handleUpdate(todo.id)}>< RiSave3Line/></button>
              <button id="delete"><RiDeleteBin6Line onClick={() => dispatch(removeTodo(todo.id))} /></button>
            </>
          ) : (
            <>
              <p>{todo.text}</p>
              <button><BiSolidEdit onClick={() => handleEdit(todo.id, todo.text)} /></button>
              <button id="delete"><RiDeleteBin6Line onClick={() => dispatch(removeTodo(todo.id))} /></button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Todos;
