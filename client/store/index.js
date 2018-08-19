import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import user from './user'
import projects from './project'
import lists from './list'
import tasks from './task'
import selected from './selected'

const reducer = combineReducers({user, projects, lists, tasks, selected})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './project'
export * from './list'
export * from './task'
export * from './selected'
