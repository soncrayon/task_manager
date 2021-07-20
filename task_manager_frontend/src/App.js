import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import { fetchAssigners } from './actions/assignerActions'
import { fetchMilestones } from './actions/milestoneActions'
import { fetchProjects } from './actions/projectActions'
import { fetchResources } from './actions/resourceActions'
import { fetchTasks } from './actions/taskActions'
import { fetchTeamMembers } from './actions/teamMemberActions'
import { fetchUsers } from './actions/userActions'

import { Projects } from './components/projects'
import { Tasks } from './components/tasks'
import { Users } from './components/users'
import { Clients } from './components/clients'


import './App.css';

class App extends React.Component {

  componentDidMount(){
    this.props.fetchProjects()
    this.props.fetchMilestones()
    this.props.fetchTasks()
    this.props.fetchAssigners()
    this.props.fetchResources()
    this.props.fetchTeamMembers()
    this.props.fetchUsers()
  }

  render() {


  
    return (
      <React.Fragment>
        <Router>
          <div className="app_nav">

            <div className="app_title"> 
              <p>TaskManager</p>
            </div>  

            <div className="menu_container">

            <div className="nav_item"> 
              <Link to="/">Home</Link> 
            </div>

            <div className="nav_item"> 
              <Link to="/projects">Projects</Link> 
            </div>

            <div className="nav_item"> 
              <Link to="/tasks">Tasks</Link> 
            </div>

            <div className="nav_item"> 
              <Link to="/clients">Clients</Link>
            </div>

            <div className="nav_item"> 
              <Link to="/personnel">Personnel</Link> 
            </div>

            </div>
          </div>


          <Switch>
    
          <Route
            exact path='/projects'
            render={() => (
              <Projects projects={this.props.projects}/>
            )}
          />

          <Route
            exact path='/tasks'
            render={() => (
              <Tasks tasks={this.props.tasks} resources={this.props.resources} assigners={this.props.assigners}/>
            )}
          />

          <Route
            exact path='/personnel'
            render={() => (
              <Users users={this.props.users} />
            )}
          />

          <Route
            exact path='/clients'
            render={() => (
              <Clients projects={this.props.projects} />
            )}
          />

          </Switch>
        </Router>
      </React.Fragment>
      
    )
  }

}

const mapStateToProps = state => {
  return {
    assigners: state.assigners,
    milestones: state.milestones,
    projects: state.projects, 
    resources: state.resources, 
    tasks: state.tasks, 
    team_members: state.team_members, 
    users: state.users, 
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAssigners: () => dispatch(fetchAssigners()),
  fetchMilestones: () => dispatch(fetchMilestones()), 
  fetchProjects: () => dispatch(fetchProjects()), 
  fetchResources: () => dispatch(fetchResources()),
  fetchTasks: () => dispatch(fetchTasks()), 
  fetchTeamMembers: () => dispatch(fetchTeamMembers()), 
  fetchUsers: () => dispatch(fetchUsers())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
