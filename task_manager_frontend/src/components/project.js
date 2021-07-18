import React from 'react'

export const Project = (props) => {
    return (
        <div className="project_row">
            <div>
                {props.name}
            </div>
            <div>
                {props.proj_number}
            </div>
            <div>
                {props.client}
            </div>
        </div>
    )
}