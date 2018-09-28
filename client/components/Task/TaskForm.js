import React from 'react'
import {connect} from 'react-redux'
import {updateTaskThunk, createNewTaskThunk} from '../../store'
import {Form} from '../FormComponents'

class TaskForm extends Form {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.title,
    }

    this.payload = this.payload.bind(this)
    this.submissionIsValid = this.submissionIsValid.bind(this)
  }

  payload() {
    const {parentId} = this.props
    return {
      ...this.state,
      ...parentId
    }
  }

  submissionIsValid() {
    return this.state.title.length && this.state.title !== this.props.title
  }

  render() {
    return (
      <Form.Form onSubmit={this.handleSubmit}>
        <Form.StandardInput 
          name="title"
          value={this.state.title}
          onChange={this.handleInput}
        />
        <Form.StandardButtons
          onCancel={this.props.closeForm}
        />
      </Form.Form>
    )
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
