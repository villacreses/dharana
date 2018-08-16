import React from 'react'
import {connect} from 'react-redux'
import Task, {AddTask} from './Task'

const List = ({tasks}) => {
  return (
    <div className="task-list-col flex-1 p-3">
      <div className="border rounded task-list shadow full-height paper">
        <h4 className="border-bottom px-4 py-2">Title</h4>
        <ul className="mx-1 mb-3">
          {tasks.filter(task => !task.checked).map(task => (
            <li key={task.id} className="border-bottom px-1">
              <Task {...task} />
            </li>
          ))}
          <li><AddTask /></li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  tasks: Object.values(state.tasks).map(task => ({
    id: task.id,
    checked: false,
  }))
})

export default connect(mapStateToProps)(List)
