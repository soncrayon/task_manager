import React from 'react'
import {WidgetPie} from './widget_pie'
import { WidgetLine } from './widget_line'


export const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <div className="widget_pair">
                <WidgetPie title="Task Statuses" type="status" data={props.task_dash_data} projects={props.projects}/>
                <WidgetPie title="Open Tasks per Milestone" type="open_tasks" data={props.mils_dash_data} projects={props.projects}/>
            </div>
            <div className="widget_pair">
                <WidgetLine title="Top Assigners" type="assigners" data={props.top_assigners} projects={props.projects} proj_spec={props.get_proj_top_assigners}/>
                <WidgetLine title="Top Executors" type="executors" data={props.top_resources} projects={props.projects}/>
            </div>
        </div>
    )
}

// Need victory graph component for widget graphs
// use pie charts for tracking statuses of tasks
// use line graphs for top submitters and executors
// for backend UserNotes model--Notes can have many users through using
// the @ notation to pin another user to the note