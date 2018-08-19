import React from 'react'
import {connect} from 'react-redux'
import Task, {AddTask} from '../Task'

const List = props => {
  return (
    <div className="task-list-col flex-1 p-3">
      <div className="border rounded task-list shadow full-height paper">
        <h4 className="border-bottom px-4 py-2">{props.title || 'Title'}</h4>
        <ul className="mx-1 mb-3">
          {props.tasks && props.tasks.map(task => (
            <li key={task.id}>
              <Task id={task.id} />
            </li>
          ))}
          <li>
            <AddTask />
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  ...state.lists[ownProps.id]
})

export default connect(mapStateToProps)(List)
