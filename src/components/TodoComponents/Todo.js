import React from 'react'

export default function Todo(props) {
    return (
        <div className={`item${props.item.done ? ' done' : ''}`}
        onClick={() => props.toggleItem(props.item.id)}>
            <p className='todoItem'>{props.item.name}</p>
        </div>
    )
}
