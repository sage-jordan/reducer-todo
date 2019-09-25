import React, { useState, useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/addTodo';
import { todoReducer, initialState } from './reducers/todoReducer';

export const [editing, setEditing] = useState(false);

function App() {
  const [state, dispatch] = useReducer(initialState, todoReducer);
  
  const handleChange = e => {
    setAddTodoText(e.target.value);
  };

  const onSubmit = e => {
    dispatch({ type: "ADD_TODO", payload: e})
  };

  return (
    <div className="App">
        <TodoList />
        <AddTodo handleChange={handleChange} onSubmit={onSubmit}/>
        <button >Add Todo</button>
    </div>
  );
}

export default App;
