import React from 'react'
import AdderForm from './AdderForm'

export default function(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        showForm: false,
        title: ''
      }

      this.toggleOn = this.toggleOn.bind(this)
      this.toggleOff = this.toggleOff.bind(this)
      this.handleInput = this.handleInput.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    toggleOn(evt) {
      evt && evt.preventDefault()
      this.setState({showForm: true, title: ''})
    }

    toggleOff(evt) {
      evt && evt.preventDefault()
      this.setState({showForm: false})
    }

    handleInput(evt) {
      const {name, value} = evt.target
      this.setState({[name]: value})
    }

    handleSubmit(evt) {
      evt.preventDefault()
      const {title} = this.state
      if (title.length) {
        this.props.handleSubmit(title)
      }
        this.toggleOff()
    }

    render() {
      return (
        <React.Fragment>
          {this.state.showForm ? (
            <AdderForm
              handleSubmit={this.handleSubmit}
              handleInput={this.handleInput}
              toggleOff={this.toggleOff}
            />
          ) : (
            <WrappedComponent handleClick={this.toggleOn} />
          )}
        </React.Fragment>
      )
    }
  }
}
