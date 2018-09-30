import React from 'react'

const AddItemLink = ({openForm, text}) => {
  return (
    <a href="" onClick={openForm}>
      <i className="fas fa-plus px-2" />
      <span>{text || 'Add Item'}</span>
    </a>
  )
}

export default AddItemLink
