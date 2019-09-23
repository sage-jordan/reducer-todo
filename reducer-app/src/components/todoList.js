import React from 'react';
import { initialState } from '../reducers/todoReducer';

export default function TodoList () {
    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            {initialState.map((item) => {
                return (
                    <div className="todo">
                        <h2>{item.item}</h2>
                    </div>
                )
            })}
        </div>
    )
};