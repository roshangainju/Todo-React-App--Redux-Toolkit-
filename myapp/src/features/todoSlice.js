import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos:[
    {id:1, text:"Namaste"}
]}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state, action) =>{
            const todo = {
                id : nanoid(),
                text: action.payload           
            }
            state.todos.push(todo)                  
        },
        removeTodo:(state, action) => {               
            state.todos = state.todos.filter((todo) => 
            todo.id != action.payload)           
        },
        editTodo: (state, action) => {
            state.editedTodoId = action.payload.id;
        },
        updateTodo : (state,action) => {
            const {newText} = action.payload
            const todoToEdit = state.todos.find(todo => todo.id === state.editedTodoId )
            if (todoToEdit) {
                todoToEdit.text = newText;
                state.editedTodoId = null; // Reset editedTodoId after updating text
              }
        }
    }
})

export const {addTodo, removeTodo, editTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer
