import React from 'react'
import {connect} from 'react-redux'
import {updateTaskThunk, createNewTaskThunk} from '../../store'

class TaskForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.title,
      date: this.props.date
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(evt) {
    const {name, value} = evt.target
    this.setState({[name]: value})
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const {submitUpdates, closeForm} = this.props
    if (
      this.state.title !== this.props.title ||
      this.state.date !== this.props.date
    ) {
      submitUpdates(this.state)
    }

    closeForm()
  }

  render() {
    const {closeForm} = this.props
    return (
      <form onSubmit={this.handleSubmit} className="px-2 py-2 border-bottom">
        <div className="input-group d-flex flex-row border in-shadow rounded py-1 px-2 bg-white">
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
            className="flex-1 no-outline"
            placeholder="Enter task here"
          />
          <input
            type="date"
            name="date"
            onChange={this.handleInput}
            className="no-outline border-left"
          />
        </div>
        <div className="d-flex flex-row pl-1 pt-1">
          <input
            type="submit"
            className="btn btn-primary btn-sm"
            value="Save"
          />
          <a href="" className="btn btn-sm text-secondary" onClick={closeForm}>
            Cancel
          </a>
        </div>
      </form>
    )
  }
}

const mapStateEdit = (state, ownProps) => {
  const {title, date} = state.tasks[ownProps.id]
  return {title, date}
}

const mapDispatchEdit = (dispatch, ownProps) => ({
  ...ownProps,
  submitUpdates: updates => dispatch(updateTaskThunk(ownProps.id, updates))
})

const mapDispatchAdd = dispatch => ({
  title: '',
  date: null,
  submitUpdates: payload => dispatch(createNewTaskThunk(payload))
})

export const EditTaskForm = connect(mapStateEdit, mapDispatchEdit)(TaskForm)
export const AddTaskForm = connect(null, mapDispatchAdd)(TaskForm)
