import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import { fetchAssigners, fetchTopAssigners, fetchProjTopAssigners } from './actions/assignerActions'
import { fetchMilestones, fetchOpenTasksPerMilestone } from './actions/milestoneActions'
import { fetchProjects } from './actions/projectActions'
import { fetchResources, fetchTopExecutors } from './actions/resourceActions'
import { fetchTasks, fetchTaskStatusPercentages } from './actions/taskActions'
import { fetchTeamMembers } from './actions/teamMemberActions'
import { fetchUsers } from './actions/userActions'

import { Projects } from './components/projects'
import { Tasks } from './components/tasks'
import { Users } from './components/users'
import { Clients } from './components/clients'
import { Dashboard } from './components/dashboard';


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
    this.props.fetchTopAssigners()
    this.props.fetchTopExecutors()
    this.props.fetchTaskStatusPercentages()
    this.props.fetchOpenTasksPerMilestone()
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
              <Link to="/">Dashboard</Link> 
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
            exact path='/'
            render={() => (
              <Dashboard 
              projects={this.props.projects}
              top_assigners={this.props.assigners.top_assigners}
              top_resources={this.props.resources.top_resources}
              task_dash_data={this.props.tasks.dash_data} 
              mils_dash_data={this.props.milestones.dash_data}
              
              get_proj_top_assigners={this.props.fetchProjTopAssigners}

              />
            )}
          />
          
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
  fetchTopAssigners: () => dispatch(fetchTopAssigners()),
  fetchProjTopAssigners: (projID) => dispatch(fetchProjTopAssigners(projID)),
  fetchMilestones: () => dispatch(fetchMilestones()), 
  fetchOpenTasksPerMilestone: () => dispatch(fetchOpenTasksPerMilestone()),
  fetchProjects: () => dispatch(fetchProjects()), 
  fetchResources: () => dispatch(fetchResources()),
  fetchTopExecutors: () => dispatch(fetchTopExecutors()), 
  fetchTasks: () => dispatch(fetchTasks()), 
  fetchTaskStatusPercentages: () => dispatch(fetchTaskStatusPercentages()),
  fetchTeamMembers: () => dispatch(fetchTeamMembers()), 
  fetchUsers: () => dispatch(fetchUsers())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
