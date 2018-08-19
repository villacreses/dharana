import React from 'react'
import {connect} from 'react-redux'
import {
  handleInput,
  handleSubmit,
  Form,
  InputGroup,
  Input
} from '../../FormComponents'
import {updateListThunk} from '../../../store'

class HeadingForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.title
    }

    this.handleInput = handleInput.bind(this)
    this.handleSubmit = handleSubmit.bind(this)
    this.payload = this.payload.bind(this)
    this.submissionIsValid = this.submissionIsValid.bind(this)
  }

  payload() {
    const {parentId} = this.props
    return {
      ...this.state,
      ...parentId
    }
  }

  submissionIsValid() {
    return this.state.title.length && this.state.title !== this.props.title
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputGroup>
          <Input
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
          />
        </InputGroup>
      </Form>
    )
  }
}

const mapStateEdit = (state, ownProps) => {
  const {title} = state.lists[ownProps.id]
  return {title}
}

const mapDispatchEdit = (dispatch, ownProps) => ({
  ...ownProps,
  submitUpdates: updates => dispatch(updateListThunk(ownProps.id, updates))
})

export const EditHeadingForm = connect(mapStateEdit, mapDispatchEdit)(
  HeadingForm
)
