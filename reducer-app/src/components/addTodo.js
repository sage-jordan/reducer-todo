import React, { useState } from 'react';

export default function AddTodo (props) {
    console.log(props.onSubmit);

    const [addTodoText, setAddTodoText] = useState();
  
    const handleChange = e => {
        setAddTodoText(e.target.value);
    };

    return (
        <div className='add-todo'>
            <input 
                className="todo-input"
                type="text"
                name="addTodoText"
                value={addTodoText}
                onChange={handleChange}
                onSubmit={props.onSubmit}
            />
            <button onClick={props.onSubmit}>Add Todo</button>
        </div>
    )
}