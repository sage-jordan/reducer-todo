import React, { useState } from 'react';

export default function AddTodo () {
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
            />
        </div>
    )
}