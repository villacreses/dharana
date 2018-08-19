import React from 'react'
import OutsideListener from './OutsideListener'

export default function(Main, Form) {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        showForm: false
      }

      this.openForm = this.openForm.bind(this)
      this.closeForm = this.closeForm.bind(this)
    }

    openForm(evt) {
      evt && evt.preventDefault()
      this.setState({showForm: true})
    }

    closeForm(evt) {
      evt && evt.preventDefault()
      this.setState({showForm: false})
    }

    render() {
      const {id, parentId} = this.props

      return (
        <React.Fragment>
          {this.state.showForm ? (
            <OutsideListener handleClick={this.closeForm}>
              <Form id={id} parentId={parentId} closeForm={this.closeForm} />
            </OutsideListener>
          ) : (
            <Main id={id} openForm={this.openForm} />
          )}
        </React.Fragment>
      )
    }
  }
}
