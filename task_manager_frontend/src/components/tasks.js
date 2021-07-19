import React from 'react'
import { Task } from './task'

export const Tasks = (props) => {
    return (
        <div className="all_tasks">
        <h3>Tasks</h3>
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
        {props.tasks.map((task, key) => {
          return <Task name={task.name} due_date={task.due_date} status={task.status} task_number={task.id} resources={props.resources} assigners={props.assigners}/> 
        })}
        </div>
    )
}