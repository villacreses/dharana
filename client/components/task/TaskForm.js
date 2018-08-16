import React from 'react'

const TaskForm = props => {
  const {value, handleInput, handleSubmit, cancel} = props
  return (
    <form onSubmit={handleSubmit} className="px-2 py-2 border-bottom">
      <div className="input-group d-flex flex-row border in-shadow rounded py-1 px-2 bg-white">
        <input
          name="title"
          value={value}
          onChange={handleInput}
          className="flex-1 no-outline"
          placeholder="Enter task here"
        />
        <input type="date" name="date" className="no-outline border-left" />
      </div>
      <div className="d-flex flex-row pl-1 pt-1">
        <input type="submit" className="btn btn-primary btn-sm" value="Save" />
        <a href="" className="btn btn-sm text-secondary" onClick={cancel}>
          Cancel
        </a>
      </div>
    </form>
  )
}

export default TaskForm
