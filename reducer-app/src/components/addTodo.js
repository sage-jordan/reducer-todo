import React, { useState } from 'react';

export default function AddTodo (handleChange, onSubmit) {
    const [addTodoText, setAddTodoText] = useState();


    return (
        <div className='add-todo'>
            <input 
                className="todo-input"
                type="text"
                name="addTodoText"
                value={addTodoText}
                onChange={handleChange}
                onSubmit={onSubmit(addTodoText)}
            />
            <button onClick={onSubmit(addTodoText)}>Add Todo</button>
        </div>
    )
}