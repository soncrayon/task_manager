import React from 'react'
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';

export const WidgetLine = (props) => {
    return (
        <div className="widget">
            <div className="table_title">
                <h3>{props.title}</h3>
            </div>
            <div className="table_content">
                <div className="table_graph">
                    <VictoryChart theme={VictoryTheme.material}>
                        <VictoryLine 
                        data={[
                        { x: "person 1", y: 1 },
                        { x: "person 2", y: 3 },
                        { x: "person 3", y: 5 },
                        { x: "person 4", y: 4 },
                        { x: "person 5", y: 7 }
                        ]}
                        /> 
                        <VictoryLine /> 
                    </VictoryChart> 
                </div> 
            </div>
           
        </div>
    )
}