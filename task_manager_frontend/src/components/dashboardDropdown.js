import React from 'react'

export default class DashboardDropdown extends React.Component {

    state = {
        dropDown: 'inactive'
    }
    
    toggleDropdown = () => {
        let dropDown = document.querySelector(`.${this.props.diff}`)
        if (this.state.dropDown === 'inactive'){
            dropDown.style.display = "flex" 
            this.setState(() => {
                return {dropDown: 'active'}
            })
        } else {
            dropDown.style.display = "none"
            this.setState(() => {
                return {dropDown: 'inactive'}
            })        
        }
    }

    setDropdownClass = () => {
        return `dropdown_content ${this.props.diff}`
    }

    makeDataProjSpecific = (projID) => {
        // use query selector to append name of project to widget title
        // then call the proj_spec function
    }

    // redo projectFilter method below to call fetch method for project specific data
    // set another button to re-fetch the aggregate data
    // this.props.proj_spec()

    render(){
        return(
            <div className="dashboard_dropdown">
                <button onClick={() => this.toggleDropdown()} className="dropbtn">Dropdown</button>

                <div className={this.setDropdownClass()}>
                    {this.props.projects.map((proj) => {
                        return <p id={proj.id} onClick={() => this.props.proj_spec(proj.id)}>{proj.name}</p>
                    })}
                </div>
            </div>
        )
    }
}