import React from 'react'
import Task from '../task'

const List = () => {
  return (
    <div className="task-list-col">
      <div className="border rounded task-list shadow mx-3 full-height paper">
        <h4 className="border-bottom px-3 py-2">Title</h4>
          <ul className="mx-4">
            <li><Task /></li>
            <li><Task /></li>
            <li><Task /></li>
          </ul>
      </div>
    </div>
  )
}

export default List
