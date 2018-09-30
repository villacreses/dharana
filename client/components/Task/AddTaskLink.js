import React from 'react'
import AddItemLink from '../AddItemLink'

const AddTaskLink = props => {
  return (
    <div className="py-2 px-1 btn btn-sm">
      <AddItemLink text="Add Task" {...props} />
    </div>
  )
}

export default AddTaskLink
