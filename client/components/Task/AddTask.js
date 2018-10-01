import React from 'react'
import {swapper} from '../FormComponents'
import ItemContainer from '../ItemContainer'
import AddItemLink from '../AddItemLink'
import {AddTaskForm} from './TaskForm'

const AddTaskLink = props => {
  return (
    <div className="py-2 px-1 btn btn-sm">
      <AddItemLink text="Add Task" {...props} />
    </div>
  )
}

export default swapper(AddTaskLink, AddTaskForm)
