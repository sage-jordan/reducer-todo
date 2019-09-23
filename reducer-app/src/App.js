import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/addTodo';

function App() {
  return (
    <div className="App">
        <TodoList />
        <button onCLick={() => {
          dispatch({
            type: "TOGGLE_EDITING"
          })
          }}/>
        <AddTodo />
    </div>
  );
}

export default App;
