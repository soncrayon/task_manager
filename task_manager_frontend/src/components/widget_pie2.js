import React from 'react'
import { VictoryPie } from 'victory';
import { Legend } from './legend';

export const WidgetPie2 = (props) => {
    
    return (
        <div className="widget">
            <div className="table_title">
                <h3>{props.title}</h3>
            </div>
            <div className="table_content">
                <div className="table_graph">
                    {typeof props.data == "undefined" ? 

                    <VictoryPie colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}/> :

                    <VictoryPie colorScale={["tomato", "orange", "gold", "cyan", "navy", "black" ]}
                    data={[
                    {x: 1, y: props.data['Ad Hoc'], label:`Ad Hoc: ${props.data['Ad Hoc']}`},
                    {x: 2, y: props.data['Collection'], label:`DFOR: ${props.data['Collection']}`},
                    {x: 3, y: props.data['Data Transformation'], label:`DTP: ${props.data['Data Transformation']}`},
                    {x: 4, y: props.data['Processing'], label:`ESIP: ${props.data['Processing']}`},
                    {x: 4, y: props.data['Project Administration'], label:`PA: ${props.data['Project Administration']}`},
                    {x: 4, y: props.data['Review Support'], label:`DDS: ${props.data['Review Support']}`},


                    ]}
                    /> 
                    }
                   
                </div> 
                <Legend />  
            </div>
            
        </div>
    )
}