import React, { useState, useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/addTodo';
import { todoReducer, initialState } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(initialState, todoReducer);
  const [editing, setEditing] = useState(false);
  
  return (
    <div className="App">
        <TodoList />
        {!state.editing  ? (
          <button onCLick={() => {
            dispatch({
              type: "TOGGLE_EDITING"
            })
            }}>Add Todo</button>
        ): (
          <AddTodo />
        )}
    </div>
  );
}

export default App;
