import React, {Component} from 'react'

export default class Input extends Component {
  static Group({children}) {
    return (
      <div 
        className="input-group flex-1 d-flex flex-row border in-shadow rounded py-1 px-2 bg-white"
      >
        {children}
      </div>
    )
  }

  render() {
    return (
      <input
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.onChange}
        className="full-width no-outline"
        placeholder={`Enter ${name} here`}
      />
    )
  }
}
