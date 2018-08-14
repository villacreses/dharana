import React from 'react'

const List = () => {
  return (
    <div className="task-list-col">
      <div className="border rounded task-list shadow mx-3 full-height">
        <h4 className="border-bottom px-3 py-2">Title</h4>
        <ul className="list-group list-group-flush px-4">
          <li className="list-group-item">Task 1</li>
          <li className="list-group-item">Task 2</li>
          <li className="list-group-item">Task 2</li>
        </ul>
      </div>
    </div>
  )
}

export default List
