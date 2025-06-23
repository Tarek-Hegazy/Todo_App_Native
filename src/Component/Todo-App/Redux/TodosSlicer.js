
import { createSlice } from "@reduxjs/toolkit";

const todosSlicer = createSlice({
    name: "todos",
    initialState :{
        todos : [],
    },
    reducers: {
        addNewTodo: (state , action) =>{
            const newTodo = action.payload;
            state.todos.push(newTodo);
        },
        removeTodo: (state , action) =>{
            const todoId = action.payload;
            state.todos = state.todos.filter((item)=> item.id !== todoId)
        },
        completedTodo: (state , action) => {
            const todoId = action.payload;
            const todo = state.todos.find((item)=> item.id === todoId);
            if (todo) {
                todo.complete = !todo.complete;
            }
        },
        setAllTodos: (state, action) =>{
            state.todos = action.payload;
        }

    }
});
export const { addNewTodo, removeTodo, completedTodo, setAllTodos } =
  todosSlicer.actions;

export default todosSlicer;