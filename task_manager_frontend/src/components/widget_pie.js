import React from 'react'
import { VictoryPie } from 'victory';
import { Legend } from './legend';

export const WidgetPie = (props) => {

    return (
        <div className="widget">
            <div className="table_title">
                <h3>{props.title}</h3>
            </div>
            <div className="table_content">
                <div className="table_graph">
                    {typeof props.data == "undefined" ? 

                    <VictoryPie colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}/> :

                    <VictoryPie colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                    data={[
                    {x: 1, y: props.data['Active'], label:`Active: ${props.data['Active']}%`},
                    {x: 2, y: props.data['On Hold'], label:`On Hold: ${props.data['On Hold']}%`},
                    {x: 3, y: props.data['Cancelled'], label:`Cancelled: ${props.data['Cancelled']}%`},
                    {x: 4, y: props.data['Complete'], label:`Complete: ${props.data['Complete']}%`},
                    ]}
                    /> 
                    }
                   
                </div> 
                <Legend />  
            </div>
            
        </div>
    )
}