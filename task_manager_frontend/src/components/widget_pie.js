import React from 'react'
import { VictoryPie } from 'victory';
import { Legend } from './legend';

export const WidgetPie = (props) => {
    return (
        <div className="widget">
            {/* grab this title from props later */}
            <div className="pie_title">
                <h3>Title placeholder</h3>
            </div>
            <div className="pie_content">
                <div className="pie_graph">
                    <VictoryPie /> 
                </div> 
                <Legend />  
            </div>
            
        </div>
    )
}