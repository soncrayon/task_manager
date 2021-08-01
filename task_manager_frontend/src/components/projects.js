import React from 'react'
// import { Project } from './project'

export const Projects = (props) => {
    return (
        <div className="container">
        <h3>Projects</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Client</th>
                    </tr>
                </thead>
                <tbody>
                    {props.projects.map((proj, key) => {
                        return (
                            <tr>
                            <td>{proj.id}</td>
                            <td>{proj.name}</td>
                            <td>{proj.client}</td>
                            </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
        
    )
}