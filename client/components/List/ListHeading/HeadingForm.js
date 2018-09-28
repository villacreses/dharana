import React from 'react'
import {connect} from 'react-redux'
import {Form} from '../../FormComponents'
import {updateListThunk, createNewListThunk} from '../../../store'

  class HeadingForm extends Form {
    render() {
      return (
        <Form.Form onSubmit={this.handleSubmit}>
          <Form.StandardInput
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
          />
        </Form.Form>
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

const mapDispatchAdd = (dispatch, ownProps) => ({
  ...ownProps,
  title: '',
  submitUpdates: updates => dispatch(createNewListThunk(updates))
})

export const EditHeadingForm = connect(mapStateEdit, mapDispatchEdit)(HeadingForm)
export const AddListForm = connect(null, mapDispatchAdd)(HeadingForm)
