import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/addTodo';
import { todoReducer, initialState, editing } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState, editing);
  
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
