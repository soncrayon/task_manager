import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { assigners } from '../reducers/assigners'
import { milestones } from '../reducers/milestones'
import { projects } from '../reducers/projects'
import { resources } from '../reducers/resources'
import { team_members } from '../reducers/team_members'
import { tasks } from '../reducers/tasks'
import { users } from '../reducers/users'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({ assigners, milestones, projects, resources, tasks, team_members, users })

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


