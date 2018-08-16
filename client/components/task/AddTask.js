import React from 'react'
import {connect} from 'react-redux'
import FormSwapper from '../FormSwapper'
import TaskForm from './TaskForm'

const AddTaskLink = ({openForm}) => {
  return (
    <div className="py-2 px-1 btn btn-sm">
      <a href="" onClick={openForm}>
        <i className="fas fa-plus px-2" />
        <span>Add Task</span>
      </a>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps
})

const WrappedAddTaskLink = FormSwapper(AddTaskLink, TaskForm)
export default connect(null, mapDispatchToProps)(WrappedAddTaskLink)
