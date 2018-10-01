import React from 'react'
import {swapper} from '../FormComponents'
import ItemContainer from '../ItemContainer'
import TaskContents from './TaskContents'
import {EditTaskForm} from './TaskForm'


const Task = swapper(TaskContents, EditTaskForm)

const WrappedTask = props => {
  return (
    <ItemContainer>
      <Task {...props} />
    </ItemContainer>
  )
}

export default WrappedTask
