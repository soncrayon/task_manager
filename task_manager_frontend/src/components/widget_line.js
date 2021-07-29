import React from 'react'
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import DashboardDropdown from './dashboardDropdown';

export const WidgetLine = (props) => {

    const populateData = () => {
        let chartData =[{
            x: "No data for visualization yet."
        }]     
        Object.entries(props.data).map((arr, idx) => {
                return chartData.push({x: arr[0], y: arr[1]})
        })
        return nixDefaultLanguage(chartData)
    }

    const nixDefaultLanguage = (chartData) => {
        if (chartData.length > 1) {
            chartData.shift()
        }
        return chartData
   }

    return (
        <div className="widget">
            <div className="table_title">
                <h3>{props.title}</h3>
            </div>
            <div className="table_content">
                <div className="table_graph">

                {typeof props.data == "undefined" ? 

                <VictoryChart /> :

                    <VictoryChart theme={VictoryTheme.material}>
                        <VictoryBar 
                        horizontal 
                        data={populateData()}  
                        labels={({ datum }) => datum.y}
                        style={{ data: { fill: "maroon"}}}
                        /> 
                    </VictoryChart> 

                }
                </div>
                <DashboardDropdown diff={props.type} projects={props.projects} proj_spec={props.proj_spec}/> 
            </div>
           
        </div>
    )
}