import React from 'react'

export const Clients = (props) => {
    return (
        <div className="all_clients">
        <h3>Clients</h3>
        <div className="top_div">
            <div>
                ID
            </div>
            <div>
                Name
            </div>
            <div>
                Client
            </div>
        </div>
        {props.projects.map((proj, key) => {
          return <p>{proj.client}</p>
        })}
        </div>
    )
}