import React from 'react'
import {swapper} from '../../FormComponents'
import {EditHeadingForm, AddListForm} from './HeadingForm'

const HeadingContents = ({title, openForm}) => {
  return (
    <div className="border-bottom pl-4 pr-1 py-2 d-flex flex-row">
      <h4 className="flex-1 c-pointer" onClick={openForm}>{title || 'Title not found'}</h4>
      <i className="fas fa-ellipsis-h pt-2 btn" />
    </div>
  )
}

const AddListContents = ({openForm}) => {
  return (
    <div className="p-3 pt-4 btn btn-lg" onClick={openForm}>
      <span>Add New List</span>
    </div>
  )
}

export default swapper(HeadingContents, EditHeadingForm)
export const AddList = swapper(AddListContents, AddListForm)
