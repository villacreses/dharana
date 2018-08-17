import React from 'react'
import {connect} from 'react-redux'
import {updateTaskThunk, createNewTaskThunk} from '../../store'
import {StandardForm} from '../FormSwapper'

const mapStateEdit = (state, ownProps) => {
  const {title} = state.tasks[ownProps.id]
  return {title}
}

const mapDispatchEdit = (dispatch, ownProps) => ({
  ...ownProps,
  submitUpdates: updates => dispatch(updateTaskThunk(ownProps.id, updates))
})

const mapDispatchAdd = dispatch => ({
  title: '',
  submitUpdates: updates => dispatch(createNewTaskThunk(updates))
})

export const EditTaskForm = connect(mapStateEdit, mapDispatchEdit)(StandardForm)
export const AddTaskForm = connect(null, mapDispatchAdd)(StandardForm)
