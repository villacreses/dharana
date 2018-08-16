import React from 'react'
import {connect} from 'react-redux'
import {toggleTaskThunk, updateTaskThunk} from '../../store'
import TaskContents from './TaskContents'
import TaskForm from './TaskForm'
import FormSwapper from '../FormSwapper'

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.tasks[ownProps.id],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleCheck: () => dispatch(toggleTaskThunk(ownProps.id)),
  handleSubmit: updates => {

    console.log('id', ownProps.id)
  dispatch(updateTaskThunk(ownProps.id, updates))
  }
})

const WrappedTask = FormSwapper(TaskContents, TaskForm, false)
export default connect(mapStateToProps, mapDispatchToProps)(WrappedTask)

export {default as AddTask} from './AddTask'
