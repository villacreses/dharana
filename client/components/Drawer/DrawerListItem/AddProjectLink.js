import React from 'react'
import AddItemLink from '../../AddItemLink'

const AddProjectLink = props => {
  return (
    <div className="btn btn-sm">
      <AddItemLink text="Add Project" {...props} />
    </div>
  )
}

export default AddProjectLink
