import React from 'react'
import { VictoryPie } from 'victory';

export const WidgetPie = (props) => {

    const populateData = () => {
        let pieData =[{
            x: "No data for visualization yet."
        }]     
        Object.entries(props.data).map((arr, idx) => {
            if (props.type === "status") {
                return pieData.push({x: idx, y: arr[1], label: `${arr[0]}: ${arr[1]}%`})
            }
            return pieData.push({x: idx, y: arr[1], label: `${arr[0]}: ${arr[1]}`})
        })
        return nixDefaultLanguage(pieData)
    }

    const nixDefaultLanguage = (pieData) => {
        if (pieData.length > 1) {
            pieData.shift()
        }
        return pieData
   }

    return (
        <div className="widget">
            <div className="table_title">
                <h3>{props.title}</h3>
            </div>
            <div className="table_content">
                <div className="table_graph">
                    {typeof props.data == "undefined" ? 

                    <VictoryPie colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}/> :

                    <VictoryPie colorScale={["tomato", "orange", "gold", "cyan", "navy", "purple", "black" ]} 
                    data={populateData()}
                    innerRadius={100}
                    /> 

                    }
                   
                </div> 
            </div>
            
        </div>
    )
}