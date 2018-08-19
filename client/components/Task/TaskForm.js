import React from 'react'
import {connect} from 'react-redux'
import {updateTaskThunk, createNewTaskThunk} from '../../store'
import {handleInput, handleSubmit, StandardForm} from '../FormComponents'

class TaskForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.title,
    }

    this.handleInput = handleInput.bind(this)
    this.handleSubmit = handleSubmit.bind(this)
    this.StandardForm = StandardForm.bind(this)
  }

  payload() {
    const {parentId} = this.props
    return {
      ...this.state,
      ...parentId
    }
  }

  submissionIsValid() {
    return this.state.title !== this.props.title
  }

  render() {
    const {StandardForm} = this
    return <StandardForm />
  }
}

const mapStateEdit = (state, ownProps) => {
  const {title} = state.tasks[ownProps.id]
  return {title}
}

const mapDispatchEdit = (dispatch, ownProps) => ({
  ...ownProps,
  submitUpdates: updates => dispatch(updateTaskThunk(ownProps.id, updates))
})

const mapDispatchAdd = (dispatch, ownProps) => ({
  ...ownProps,
  title: '',
  submitUpdates: updates => dispatch(createNewTaskThunk(updates))
})

export const EditTaskForm = connect(mapStateEdit, mapDispatchEdit)(TaskForm)
export const AddTaskForm = connect(null, mapDispatchAdd)(TaskForm)
