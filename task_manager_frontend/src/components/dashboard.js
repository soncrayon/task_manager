import React from 'react'
import { WidgetPie } from './widget_pie'
import { WidgetLine } from './widget_line'

export const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <div className="widget_pair">
                <WidgetPie title={"Task Statuses"} data={props.data.tasks}/>
                <WidgetPie title={"Open Tasks per Milestone"} projects={props.projects}/>
            </div>
            <div className="widget_pair">
                <WidgetLine title={"Task Assignment"}/>
                <WidgetLine title={"Task Execution"}/>
            </div>
        </div>
    )
}

// Need victory graph component for widget graphs
// use pie charts for tracking statuses of tasks
// use line graphs for top submitters and executors
// for backend UserNotes model--Notes can have many users through using
// the @ notation to pin another user to the note