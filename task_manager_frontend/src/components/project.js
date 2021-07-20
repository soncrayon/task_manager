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

// redesign the home page as a dashbord for landing and call the 
// home page "Home"
// dashboard contains -- task statuses; tasks per milestone (pie graphs)
// top submitters; top executers (line charts with top 5 to 10 of each)