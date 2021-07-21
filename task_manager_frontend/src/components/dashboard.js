import React from 'react'
import { Widget } from './widget'

export const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <Widget />
            <Widget />
            <Widget />
            <Widget />
        </div>
    )
}

// Need victory graph component for widget graphs
// use pie charts for tracking statuses of tasks
// use line graphs for top submitters and executors