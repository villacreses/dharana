import React from 'react'

const Form = props => (
  <form onSubmit={props.onSubmit} className="p-2">
    {props.children}
  </form>
)

export default Form
