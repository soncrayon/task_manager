import React from 'react'
import {WidgetPie} from './widget_pie'
import { WidgetLine } from './widget_line'
import {WidgetPie2} from './widget_pie2'


export const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <div className="widget_pair">
                <WidgetPie title="Task Statuses" type="status" data={props.data.task_percentages}/>
                <WidgetPie2 title="Open Tasks per Milestone" type="open_tasks" data={props.mils_data}/>
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