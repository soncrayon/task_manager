import React from 'react'

export const Clients = (props) => {
    return (
        <div className="all projects">
        <h3>Clients</h3>
        {props.projects.map((proj, key) => {
          return <p>{proj.client}</p>
        })}
        </div>
    )
}