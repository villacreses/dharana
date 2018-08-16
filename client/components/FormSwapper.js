import React from 'react'
import OutsideListener from './OutsideListener'

export default function(Main, Form, resetForm=true) {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        showForm: false,
        title: ''
      }

      this.openForm = this.openForm.bind(this)
      this.closeForm = this.closeForm.bind(this)
      this.handleInput = this.handleInput.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    openForm(evt) {
      (evt && evt.preventDefault())
      this.setState({showForm: true})
    }

    closeForm(evt) {
      (evt && evt.preventDefault())
      if (resetForm) this.setState({title: ''})
      this.setState({showForm: false})
    }

    handleInput(evt) {
      const {name, value} = evt.target
      this.setState({[name]: value})
    }

    handleSubmit(evt) {
      evt.preventDefault()
      this.closeForm()
    }

    render() {
      return (
        <React.Fragment>
          {this.state.showForm ? (
            <OutsideListener handleClick={this.closeForm}>
              <Form handleSubmit={this.handleSubmit} closeForm={this.closeForm}/>
            </OutsideListener>
          ) : (
            <Main {...this.props} openForm={this.openForm} />
          )}
        </React.Fragment>
      )
    }
  }
}
