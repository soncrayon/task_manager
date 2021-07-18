import React from 'react'
import { User } from './user'

export const Users = (props) => {
    return (
        <div className="all projects">
        <h3>Personnel</h3>
        {props.users.map((user, key) => {
          return <User name={user.name} title={user.title} personnel_number={user.id}/> 
        })}
        </div>
    )
}