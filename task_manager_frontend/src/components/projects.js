import React from 'react'
// import { Project } from './project'

export const Projects = (props) => {
    return (
        <div className="all_projects">
            <h3>Projects</h3>
            <div className="project_id_column">
                <div className="id_title_div">
                    ID
                </div>
                {props.projects.map((proj, key) => {return <div className="data_div">{proj.id}</div>})}
            </div>
            <div className="project_name_column">
                <div className="name_title_div">
                    Name
                </div>
                {props.projects.map((proj, key) => {return <div className="data_div">{proj.name}</div>})}
            </div>
            <div className="project_client_column">
                <div className="client_title_div">
                    Client
                </div>
                {props.projects.map((proj, key) => {return <div className="data_div">{proj.client}</div>})}
            </div>
        </div>
    )
}