import React from 'react'

const HeadingContents = ({title, openForm}) => {
  return (
    <div className="border-bottom pl-4 pr-1 py-2 d-flex flex-row">
      <h4 className="flex-1 c-pointer" onClick={openForm}>{title || 'Title not found'}</h4>
      <i className="fas fa-ellipsis-h pt-2 btn" />
    </div>
  )
}


export default HeadingContents
