import React from 'react'

const Input = ({name, value, onChange}) => (
  <input
    name={name}
    value={value}
    onChange={onChange}
    className="full-width no-outline"
    placeholder={`Enter ${name} here`}
  />
)

export default Input
