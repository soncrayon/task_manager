import React from 'react'

export const Task = (props) => {
    return (
        <div className="task_block">
            <div>
                {props.name}
            </div>
            <div>
                {props.task_number}
            </div>
            <div>
                {props.due_date}
            </div>
            <div>
                {props.status}
            </div>
        </div>
    )
}