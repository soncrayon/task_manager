import React from 'react'

export const Task = (props) => {
    
    return (
        <>
            <td onClick={props.openDetail}>{props.name}</td>
            <td>{props.task_number}</td>
            <td>{props.due_date}</td>
            <td>{props.status}</td>
        </>
    )
}