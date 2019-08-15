import React from 'react';

const TodoItem = ({ id, handleDelete, handleComplete, item }) => {

    const handleClick = () => {
        handleDelete(id)
    }
    const handleMarkDone = () => {
        handleComplete(id)
    }

    return (
        <li className="border m-2 p-2" style={{ margin: '5px', padding: '5px', backgroundColor: "yellow", display: "flex", position: 'relative' }}>
            <li className="" style={{ textDecoration: item.done ? "line-through" : null }} onClick={handleMarkDone}>{item.task}</li>
            <div className="" style={{ position: 'absolute', right: '0' }} onClick={handleClick}>[x] </div>
        </li>
    )
}

export default TodoItem


