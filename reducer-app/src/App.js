import React, { useState, useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { todoReducer, initialState } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const onSubmit = e => {
    return dispatch({ type: "ADD_TODO", payload: e.target.value});
  };

  return (
    <div className="App">
        <TodoList />
        <AddTodo onSubmit={onSubmit}/>
    </div>
  );
}

export default App;
