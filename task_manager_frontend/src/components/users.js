import React from 'react'
import { User } from './user'

export const Users = (props) => {
    return (
        <div className="all_personnel">
        <h3>Personnel</h3>
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
        {props.users.map((user, key) => {
          return <User name={user.name} title={user.title} personnel_number={user.id}/> 
        })}
        </div>
    )
}