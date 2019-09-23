import React from 'react';
import { initialState } from '../reducers/todoReducer';

export default function TodoList () {
    return (
        <div className="todo-list">
            {initialState.map((item) => {
                console.log(item);
            })}
        </div>
    )
}