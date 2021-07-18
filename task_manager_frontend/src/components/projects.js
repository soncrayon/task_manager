import React from 'react'
import { Project } from './project'

export const Projects = (props) => {
    return (
        <div className="all projects">
        <h3>Projects</h3>
        {props.projects.map((proj, key) => {
          return <Project name={proj.name} client={proj.client} proj_number={proj.id}/> 
        })}
        </div>
    )
}