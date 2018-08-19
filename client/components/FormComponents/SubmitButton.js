import React from 'react'

const SubmitButton = props => (
  <input
    type="submit"
    className="btn btn-primary btn-sm"
    value={props.submitText || 'Save'}
  />
)

export default SubmitButton
