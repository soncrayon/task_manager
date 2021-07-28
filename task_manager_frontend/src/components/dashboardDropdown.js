import React from 'react'

export default class dashboardDropdown extends React.Component {
    render(){
        return(
            <div className="dashboard_dropdown">
                <button onclick="myFunction()" class="dropbtn">Dropdown</button>
                <div id="myDropdown" class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    {/* need a link for each project and a reset button to return to aggregate */}
                    {/* dropdown needs a search function to scale with number of projects */}
                </div>
            </div>
        )
    }
}