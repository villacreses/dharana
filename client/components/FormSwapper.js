import React from 'react'
import OutsideListener from './OutsideListener'

export default function(Main, Form, resetForm = true) {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        showForm: false,
        title: this.props.title || '',
        defaultTitle: this.props.title || '',
      }

      this.openForm = this.openForm.bind(this)
      this.closeFormSubmit = this.closeFormSubmit.bind(this)
      this.closeFormCancel = this.closeFormCancel.bind(this)
      this.handleInput = this.handleInput.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    openForm(evt) {
      evt && evt.preventDefault()
      this.setState({showForm: true})
    }

    closeFormCancel(evt) {
      evt && evt.preventDefault()
      this.setState(prevState => ({
        showForm: false,
        title: prevState.defaultTitle
      }))
    }

    closeFormSubmit(evt) {
      evt && evt.preventDefault()

      const {title} = this.state
      this.props.handleSubmit({title})
      this.setState(prevState => ({
        showForm: false,
        defaultTitle: prevState.title
      }))
    }

    handleInput(evt) {
      const {name, value} = evt.target
      console.log(value)
      this.setState({[name]: value})
    }

    handleSubmit(evt) {
      evt.preventDefault()

      const {title, defaultTitle} = this.state
      if (title.length && title !== defaultTitle) this.closeFormSubmit()
      else this.closeFormCancel()
    }

    render() {
      return (
        <React.Fragment>
          {this.state.showForm ? (
            <OutsideListener handleClick={this.closeFormCancel}>
              <Form
                value={this.state.title}
                handleInput={this.handleInput}
                handleSubmit={this.handleSubmit}
                cancel={this.closeFormCancel}
              />
            </OutsideListener>
          ) : (
            <Main {...this.props} openForm={this.openForm} />
          )}
        </React.Fragment>
      )
    }
  }
}
