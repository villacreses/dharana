import React from 'react'
import {connect} from 'react-redux'
import Task, {AddTask} from '../Task'
import ListHeading from './ListHeading'

const ListContents = props => {
  const taskParentId = {listId: props.id, ...props.parentId}
  return (
    <div className="task-list-col flex-1 p-3">
      <div className="border rounded task-list shadow full-height paper">
        <ListHeading id={props.id} parentId={props.parentId} title={props.title} />
        <ul className="mx-1 mb-3">
          {props.tasks && props.tasks.map(task => (
            <li key={task.id}>
              <Task id={task.id} parentId={taskParentId} />
            </li>
          ))}
          <li>
            <AddTask parentId={taskParentId}/>
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.lists[ownProps.id]
})

export default connect(mapStateToProps)(ListContents)
export {AddList} from './ListHeading'
