import React from 'react'
import {connect} from 'react-redux'
import {
  handleInput,
  handleSubmit,
  StandardForm,
  StandardFormAbbr
} from '../../FormComponents'
import {updateListThunk, createNewListThunk} from '../../../store'

function HeadingForm(Form) {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        title: this.props.title
      }

      this.Form = Form.bind(this)
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
      const {Form} = this
      return <Form  />
    }
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

const mapDispatchAdd = (dispatch, ownProps) => ({
  ...ownProps,
  title: '',
  submitUpdates: updates => dispatch(createNewListThunk(updates))
})

export const EditHeadingForm = connect(mapStateEdit, mapDispatchEdit)(
  HeadingForm(StandardFormAbbr)
)

export const AddListForm = connect(null, mapDispatchAdd)(
  HeadingForm(StandardForm)
)
