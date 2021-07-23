import React from 'react'
import { WidgetPie } from './widget_pie'
import { WidgetLine } from './widget_line'

export const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <div className="widget_pair">
                <WidgetPie title={"Project Status"} projects={props.projects}/>
                <WidgetPie title={"Task Status"} projects={props.projects}/>
            </div>
            <div className="widget_pair">
                <WidgetLine title={"Top Executors"}/>
                <WidgetLine title={"Top Assigners"}/>
            </div>
        </div>
    )
}

// Need victory graph component for widget graphs
// use pie charts for tracking statuses of tasks
// use line graphs for top submitters and executors
// for backend UserNotes model--Notes can have many users through using
// the @ notation to pin another user to the note