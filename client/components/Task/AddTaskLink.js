import React from 'react'

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

export default AddTaskLink
