import React from 'react'

export default class StandardForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.title
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(evt) {
    const {name, value} = evt.target
    this.setState({[name]: value})
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const {submitUpdates, closeForm} = this.props
    if (this.state.title !== this.props.title) {
      submitUpdates(this.state)
    }

    closeForm()
  }

  render() {
    const {closeForm} = this.props
    return (
      <form onSubmit={this.handleSubmit} className="p-2">
        <div className="input-group flex-1 d-flex flex-row border in-shadow rounded py-1 px-2 bg-white">
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
            className="full-width no-outline"
            placeholder="Enter title here"
          />
        </div>
        {!this.props.hideButtons && (
          <div className="d-flex flex-row pl-1 pt-1">
            <input
              type="submit"
              className="btn btn-primary btn-sm"
              value="Save"
            />
            <a href="" className="btn btn-sm text-secondary" onClick={closeForm}>
              Cancel
            </a>
          </div>
        )}
      </form>
    )
  }
}
