import React from 'react'

export const Project = (props) => {

    const showProjectDetails = (proj) => {
        console.log(proj)
    }

    return (
        <div className="item_row">
            <div className="row_item">
                {props.proj_number}
            </div>
            <div className="row_item" onClick={() => showProjectDetails(props)}>
                {props.name}
            </div>
            <div className="row_item">
                {props.client}
            </div>
        </div>
    )
}