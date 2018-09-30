import React from 'react'
import {connect} from 'react-redux'
import {Form} from './FormComponents'

class ItemForm extends Form {
  render () {
    return (
      <Form.Form onSubmit={this.handleSubmit}>
        <Form.StandardInput
          name="title"
          value={this.state.title}
          onChange={this.handleInput}
        />
        <Form.StandardButtons onCancel={this.props.closeForm} />
      </Form.Form>
    )
  }
}

export default function StatefulItemForm (updateThunk, itemType) {
  if (!updateThunk || typeof updateThunk !== 'function') {
    throw new Error('There is no function to handle updates')
  } else if (['tasks', 'projects', 'lists'].indexOf(itemType) === -1) {
    throw new Error('Invalid Item Type')
  }

  const mapStateToProps = (state, ownProps) => {
    const haveTitle = itemType && state[itemType] && state[itemType][ownProps.id]
    const title = !!haveTitle ? state[itemType][ownProps.id].title : ''
    return {title}
  }

  const mapDispatchToProps = (dispatch, ownProps) => ({
    ...ownProps,
    submitUpdates: updates => dispatch(updateThunk(updates)),
  })

  return connect(mapStateToProps, mapDispatchToProps)(ItemForm)
}

