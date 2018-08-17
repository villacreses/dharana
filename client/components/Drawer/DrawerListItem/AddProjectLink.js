import React from 'react'

const AddProjectLink = ({openForm}) => {
  return (
    <div className="btn btn-sm">
      <a href="" onClick={openForm}>
        <i className="fas fa-plus px-2" /> 
        <span>Add Project</span>
      </a>
    </div>
  )
}

export default AddProjectLink
