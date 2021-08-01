import React from 'react'
import { Task } from './task'

export const Tasks = (props) => {
    return (
         <div className="container">
        <h3>Tasks</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Task Number</th>
                        <th>Due Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map((task, key) => {
                        return (
                            <tr>
                                <Task name={task.name} due_date={task.due_date} status={task.status} task_number={task.id} resources={props.resources} assigners={props.assigners}/> 
                            </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}