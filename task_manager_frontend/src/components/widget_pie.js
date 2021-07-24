import React from 'react'
import { VictoryPie } from 'victory';
import { Legend } from './legend';

export const WidgetPie = (props) => {
    console.log(props.data)
    return (
        <div className="widget">
            {/* grab this title from props later */}
            <div className="table_title">
                <h3>{props.title}</h3>
            </div>
            <div className="table_content">
                <div className="table_graph">
                    <VictoryPie colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                    data={[
                        {x: 1, y: props.data.task_percentages['Active'], label:'Active'},
                        {x: 2, y: props.data.task_percentages['On Hold'], label:'On Hold'},
                        {x: 3, y: props.data.task_percentages['Cancelled'], label:'Cancelled'},
                        {x: 4, y: props.data.task_percentages['Complete'], label:'Complete'},
                    
                    ]}/> 
                </div> 
                <Legend />  
            </div>
            
        </div>
    )
}