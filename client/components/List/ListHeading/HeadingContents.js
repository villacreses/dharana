import React from 'react'

const HeadingContents = ({title}) => {
  return (
    <div className="border-bottom px-4 py-2 d-flex flex-row">
      <h4 className="flex-1 c-pointer">{title || 'Title not found'}</h4>
      <i class="fas fa-ellipsis-h pt-2 btn" />
    </div>
  )
}

export default HeadingContents
