import React from 'react'
import {connect} from 'react-redux'
import {createNewProject} from '../../../store'
import {StandardForm, handleInput, handleSubmit} from '../../FormComponents'

class ListItemForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.title
    }
    
    this.handleInput = handleInput.bind(this)
    this.handleSubmit = handleSubmit.bind(this)
    this.StandardForm = StandardForm.bind(this)
  }

  payload() {
    return this.state
  }

  submissionIsValid() {
    return this.state.title.length > 0
  }

  render() {
    const {StandardForm} = this
    return <StandardForm />
  }
}

const mapStateEdit = (state, ownProps) => {
  const {title} = state.projects[ownProps.id]
  return {title}
}

const mapDispatchEdit = (dispatch, ownProps) => ({
  ...ownProps,
  submitUpdates: updates => console.log('Updated!')
})

const mapDispatchAdd = dispatch => ({
  title: '',
  submitUpdates: updates => dispatch(createNewProject(updates.title))
})

export const EditProjectForm = connect(mapStateEdit, mapDispatchEdit)(ListItemForm)
export const AddProjectForm = connect(null, mapDispatchAdd)(ListItemForm)
