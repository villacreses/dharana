import React, {Component, Fragment} from 'react'
import Input from './Input'
import Button from './Button'

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.title || 'title'
    }

    this.handleInput = (evt) => {
      const {name, value} = evt.target
      this.setState({[name]: value})
    }

    this.handleSubmit = (evt) => {
      evt.preventDefault()
      const {submitUpdates, closeForm} = this.props
      if (this.submissionIsValid()) {
        submitUpdates(this.payload())
      }
      closeForm()
    }

    this.payload = () => ({
      ...this.state,
      ...this.props.parentId
    })

    this.submissionIsValid = () => {
      const {title} = this.state
      return title.length && title !== this.props.title
    }
  }

  static Form ({children, onSubmit}) {
    return (
      <form onSubmit={onSubmit} className="p-2">
        {children}
      </form>
    )
  }

  static StandardInput ({name, value, onChange}) {
    return (
      <Input.Group>
        <Input
          name={name}
          value={value}
          onChange={onChange}
        />
      </Input.Group>
    )
  }

  static StandardButtons ({onCancel}) {
    return (
      <Button.Row>
        <Button.Submit />
        <Button.Cancel onClick={onCancel} />
      </Button.Row>
    )
  }
}
