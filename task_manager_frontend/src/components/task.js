import React from 'react'

export const Task = (props) => {
    return (
        <div className="item_row">
            <div className="row_item">
                {props.name}
            </div>
            <div className="row_item">
                {props.task_number}
            </div>
            <div className="row_item">
                {props.due_date}
            </div>
            <div className="row_item">
                {props.status}
            </div>
        </div>
    )
}