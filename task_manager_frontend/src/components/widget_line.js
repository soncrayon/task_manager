import React from 'react'
import { VictoryLine, VictoryChart } from 'victory';
import { Legend } from './legend';

export const WidgetLine = (props) => {
    return (
        <div className="widget">
            <div className="table_title">
                <h3>{props.title}</h3>
            </div>
            <div className="table_content">
                <div className="table_graph">
                    <VictoryChart>
                        <VictoryLine /> 
                    </VictoryChart> 
                </div> 
                <Legend />  
            </div>
           
        </div>
    )
}