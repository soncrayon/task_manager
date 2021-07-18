import React from 'react'

export const User = (props) => {
    return (
        <div className="task_block">
            <div>
                {props.name}
            </div>
            <div>
                {props.title}
            </div>
            <div>
                {props.personnel_id}
            </div>
        </div>
    )
}