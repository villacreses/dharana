import React from 'react'
import {connect} from 'react-redux'

const AddListContents = ({openForm}) => {
  return (
    <div className="p-3 pt-4 btn btn-lg" onClick={openForm}>
      <span>Add New List</span>
    </div>
  )
}

export default AddListContents
