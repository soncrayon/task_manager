import React from 'react'
import { Project } from './project'

export const Projects = (props) => {
    return (
        <div className="all_projects">
        <h3>Projects</h3>
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
          return <Project name={proj.name} client={proj.client} proj_number={proj.id}/> 
        })}
        </div>
    )
}