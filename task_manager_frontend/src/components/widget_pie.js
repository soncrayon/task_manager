import React from 'react'
import { VictoryPie } from 'victory';
import { Legend } from './legend';

export const WidgetPie = (props) => {
    console.log(props)
    return (
        <div className="widget">
            {/* grab this title from props later */}
            <div className="table_title">
                <h3>{props.title}</h3>
            </div>
            <div className="table_content">
                <div className="table_graph">
                    <VictoryPie colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}/> 
                </div> 
                <Legend />  
            </div>
            
        </div>
    )
}