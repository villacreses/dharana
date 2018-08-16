import React from 'react'
import {connect} from 'react-redux'
import {toggleTaskThunk, selectProject} from '../../store'
import TaskContents from './TaskContents'
import TaskForm from './TaskForm'
import FormSwapper from '../FormSwapper'

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.tasks[ownProps.id],
  projectTitle: state.projects[ownProps.projectId].title
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleCheck: () => dispatch(toggleTaskThunk(ownProps.id)),
  goToProject: () => dispatch(selectProject(ownProps.projectId))
})

const WrappedTask = FormSwapper(TaskContents, TaskForm)
export default connect(mapStateToProps, mapDispatchToProps)(WrappedTask)

export {default as AddTask} from './AddTask'
