// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
    return (
        <div className='todoListContainer'>
            <h2>Todo List</h2>
            <div className='todoList'>
                {props.items.map(item => (
                    <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
                ))}
            </div>
        </div>
    )
}

