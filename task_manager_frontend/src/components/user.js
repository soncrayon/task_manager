import React from 'react'

export const User = (props) => {
    return (
        <div className="item_row">
            <div className="row_item">
                {props.name}
            </div>
            <div className="row_item">
                {props.title}
            </div>
            <div className="row_item">
                {props.personnel_id}
            </div>
        </div>
    )
}